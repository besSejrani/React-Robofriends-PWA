import { UserModel as User } from '../Models/UserModel'

import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

// ========================================================================================================

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { firstname, lastname, email, username, password } = req.body

  try {
    let user = await User.findOne({ email })

    if (user) {
      res.status(400).json({ errors: [{ message: 'Email is already taken' }] })
    }

    user = new User({ firstname, lastname, email, username, password })
    await user.save()

    res.status(200).json(user)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: 'Server error' })
  }
}

// ========================================================================================================

export const signin = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body

  try {
    if (!email || !password) {
      res.status(400).json({ errors: [{ message: 'Please provide email and password' }] })
      return
    }

    const user = await User.findOne({ email })
    if (!user || !(await user.comparePasswords(password, user.password))) {
      res.status(400).json({ errors: [{ message: 'Invalid email or password' }] })
      return
    }

    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: `${process.env.JWT_EXPIRES_IN}`
    })

    res.header(`Bearer ${token}`).json({ authorization: token })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: 'Server error' })
  }
}

// // ========================================================================================================

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const { authorization } = req.headers

  if (!authorization) {
    res.status(401).json({ message: 'Authorization header is missing.' })
    return
  }

  const token = authorization?.split(' ')[1]

  if (!token) {
    res.status(401).json({ message: 'Token is missing.' })
    return
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

    if (typeof decodedToken === 'string' || !decodedToken._id) {
      res.status(401).json({ message: 'Invalid token payload.' })
      return
    }

    const user = await User.findById(decodedToken._id, ['-__v', '_id', '-password'])
    console.log(user)

    res.status(200).json({
      isAuth: true,
      user
    })
  } catch (error) {
    res.status(401).json({ message: 'Invalid token.' })
  }
}

// ========================================================================================================
