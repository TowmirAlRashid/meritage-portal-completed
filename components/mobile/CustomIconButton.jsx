import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'


const CustomIconButton = ({ text, icon, onclick, color, backgroundColor }) => {
    

  return (
    <IconButton
        sx={{
            width: "33.33%"
        }}
        onClick={onclick}
    >
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem"
            }}
        >
            <Box 
                sx={{
                    width: "64px",
                    height: "32px",
                    backgroundColor: {backgroundColor},
                    borderRadius: "16px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {icon}
            </Box>

            <Typography fontWeight="bold" fontSize={12} color={color} >
                {text}
            </Typography>
        </Box>
    </IconButton>
  )
}

export default CustomIconButton