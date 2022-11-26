import { Box } from '@mui/material'
import React from 'react'
import InputBox from './InputBox'


// this component will get the data for each engagement and populate the textfields
const RecordDetails = () => {
  return (
    <Box
        sx={{
            width: "100%",
            display: "flex",
            flexDirection: {
                xs: "column",
                sm: "row",
                md: "row",
                lg: "row"
            },
            justifyContent: "space-between",
            alignItems: "center",
            gap: {
                xs: "0",
                sm: "1rem",
                md: "1rem",
                lg: "1rem"
            },
        }}
    >
        <Box
            sx={{
                width: {
                    xs: "94%",
                    sm: "48%",
                    md: "48%",
                    lg: "48%"
                },
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
            }}
        >
            <InputBox 
                labelId="Faucibus at"
                labelContent="Faucibus at"
            />
            <InputBox 
                labelId="Odio etiam"
                labelContent="Odio etiam"
            />
            <InputBox 
                labelId="Nisl dolor"
                labelContent="Nisl dolor"
            />
            <InputBox 
                labelId="Nisi orci"
                labelContent="Nisi orci"
            />
            <InputBox 
                labelId="Aliquet non"
                labelContent="Aliquet non"
            />
        </Box>

        <Box
            sx={{
                width: {
                    xs: "94%",
                    sm: "48%",
                    md: "48%",
                    lg: "48%"
                },
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
            }}
        >
            <InputBox 
                labelId="Non nulla"
                labelContent="Non nulla"
            />
            <InputBox 
                labelId="Cursus tristique"
                labelContent="Cursus tristique"
            />
            <InputBox 
                labelId="Ac quam"
                labelContent="Ac quam"
            />
            <InputBox 
                labelId="Lacus nunc"
                labelContent="Lacus nunc"
            />
            <InputBox 
                labelId="Nunc lorem"
                labelContent="Nunc lorem"
            />
        </Box>
    </Box>
  )
}

export default RecordDetails