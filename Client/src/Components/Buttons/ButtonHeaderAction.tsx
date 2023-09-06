import React, { MouseEventHandler } from 'react'

// Material-UI
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

// ========================================================================================================

type ButtonHeaderActionType = {
  children?: JSX.Element
  action?: MouseEventHandler
}

const ButtonHeaderAction: React.FC<ButtonHeaderActionType> = ({ children, action }) => {
  return (
    <Button
      color="inherit"
      aria-label="menu"
      onClick={action}
      style={{
        width: '31px',
        height: '31px',

        fontSize: '2rem',
        borderRadius: '10px',
        margin: '0px 0px 0px 10px',

        appearance: 'none',
        minWidth: '22px',
        border: '1.5px solid rgb(229, 232, 236)',
        backgroundColor: 'transparent',
        overflow: 'visible'
      }}
    >
      <Box>{children}</Box>
    </Button>
  )
}

export default ButtonHeaderAction

// ========================================================================================================
