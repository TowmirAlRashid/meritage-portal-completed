import { Box, TextField } from '@mui/material'
import React from 'react'


const InputBox = ({ labelId, labelContent }) => {
  return (
        <Box 
          sx={{ 
            width: "100%",
            display: "flex",
            flexDirection: {
                lg: "row",
                md: "row",
                sm: "row",
                xs: "column"
            },
            justifyContent: "flex-start",
            alignItems: {
                lg: "center",
                md: "center",
                sm: "center",
                xs: "flex-start"
            },
            marginBottom: "1.5rem",
            gap: {
                lg: "0",
                md: "0",
                sm: "0",
                xs: "8px"
            } 
          }}
        >
          <label id={labelId} style={{ width: "10rem"}}>{labelContent}</label>
          <TextField 
            id="currentPass" 
            variant="outlined"
            type="password"
            sx={{ 
                width: {
                    lg: "80%",
                    md: "80%",
                    sm: "80%",
                    xs: "100%"
                }, 
                "& .MuiInputBase-input": { padding: "10px 8px"}
            }}
          />
        </Box>
  )
}

export default InputBox