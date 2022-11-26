import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import router from 'next/router';

const BackToAdmin = ({ text }) => {
    const handleBackToAdmin = () => {   // pushes the usser back to the admin dashboard page
        router.push("/admin");
    }

  return (
    <Box
        sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "0.2rem",
            mt: "1.4rem",
            ml: "1rem",
            marginBottom: "1.4rem"
        }}
    >
        <IconButton
            onClick={handleBackToAdmin}
        >
            <ArrowBackIcon fontSize='1.5rem' />
        </IconButton>

        <Typography fontSize='1.5rem' >
            {text}
        </Typography>
    </Box>
  )
}

export default BackToAdmin