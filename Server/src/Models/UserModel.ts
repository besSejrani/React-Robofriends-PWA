import bcrypt from 'bcryptjs'

import { prop as Property, getModelForClass, pre } from '@typegoose/typegoose'
import { IsEmail } from 'class-validator'
import { ObjectId } from 'mongodb'

// ========================================================================================================

@pre<User>('save', async function (next): Promise<void> {
  // 1) Check if password is modified
  if (!this.isModified('password')) return next()

  // 2) Create salt
  const salt = await bcrypt.genSalt(12)

  // 3) Hash password with salt
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

// ========================================================================================================

// ========================================================================================================
export class User {
  readonly _id: ObjectId

  @Property({ required: [true, 'Please provide a firstname'], trim: true, minlength: 2, maxlength: 20 })
  firstname: string

  @Property({ required: [true, 'Please provide a lastname'], trim: true, minlength: 2, maxlength: 20 })
  lastname: string

  @Property({ required: [true, 'Please provide a username'], unique: true, trim: true, minlength: 2, maxlength: 20 })
  username: string

  @Property({
    required: [true, 'Please provide your email'],
    unique: true,
    trim: true,
    lowercase: true
  })
  @IsEmail()
  email: string

  @Property({ required: [true, 'Please provide a password'], trim: true, minlength: 8 })
  password: string

  @Property({ enum: ['user', 'dev', 'designer', 'moderators', 'admin'], default: 'user' })
  role: string

  @Property()
  roomsCreated: string

  @Property()
  roomsRegistered: string

  @Property({ default: Date.now() })
  createdAt?: Date

  // ========================================================================================================

  /**
   * @description Compare hashed passwords
   */
  public async comparePasswords(candidatePassword: string, userPassword: string): Promise<boolean> {
    return await bcrypt.compare(candidatePassword, userPassword)
  }

  // ========================================================================================================
}

export const UserModel = getModelForClass(User)
