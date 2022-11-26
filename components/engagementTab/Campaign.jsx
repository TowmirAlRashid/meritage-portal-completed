import { Box, Typography } from '@mui/material'
import { DateTime } from 'luxon'
import React from 'react'

const Campaign = ({ sentMail, backgroundColor, progress, progressColor }) => {
  return (
    <Box
        sx={{
            width: {
                lg: "90%",
                md: "100%",
                sm: "100%",
                xs: "100%"
            },
            margin: "0 auto 3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <Typography 
            sx={{ 
                fontSize: {
                    lg: "24px",
                    md: "24px",
                    sm: "22px",
                    xs: "20px"
                }, 
                fontWeight: "bold" 
            }}>
                {/* renders the number of mails sent */}
                {sentMail}  
            </Typography>

        <Typography 
            sx={{ 
                fontSize: {
                    lg: "20px",
                    md: "20px",
                    sm: "16px",
                    xs: "16px"
                }, 
                fontWeight: "bold", 
                color: "rgba(0, 0, 0, 0.6)", 
                mb: "0.4rem" 
            }}>
                Total Emails Sent
            </Typography>

        <Typography 
            sx={{ 
                fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "14px"
                }, 
                color: "rgba(0, 0, 0, 0.6)" 
            }}>
                {`${DateTime.now().toLocaleString(DateTime.DATE_MED) + " " + DateTime.now().toLocaleString(DateTime.TIME_SIMPLE)}`}
            </Typography> 

        <Box //  this is a progress bar. You have to customize how the progress is shown during integration!
            sx={{
                width: {
                    lg: "90%",
                    md: "98%",
                    sm: "100%",
                    xs: "100%"
                },
                margin: "1rem auto 1rem",
                height: "2.5rem",
                backgroundColor: `${backgroundColor}`,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
            }}
        >
            <Box 
            sx={{
                height: "100%",
                width: `${progress}%`,
                backgroundColor: `${progressColor}`
            }}
            ></Box>
            <Box 
            sx={{
                height: "100%",
                width: `calc(100% - ${progress})%`
            }}
            ></Box>
        </Box>

        <Box  // this container holds the 3 deliver percantage components
            sx={{
                display: "flex",
                flexDirection: {
                    lg: "row",
                    md: "row",
                    sm: "column",
                    xs: "column",
                },
                justifyContent: "space-between",
                alignItems: "center",
                width: {
                    lg: "90%",
                    md: "98%"
                },
                margin: "1rem auto 0",
                gap: {
                    lg: 0,
                    md: 0,
                    sm: "1.5rem",
                    xs: "1.5rem"
                }
            }}
        >
            <Box 
                sx={{
                    // width: "33%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-start", 
                    gap: "0.8rem"  
                }}
            >
                <Box sx={{ width: "14px", height: "14px", borderRadius: "2px", backgroundColor: "#3FB68A", mt: "5px" }}></Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                        {/* delivery progress shown here */}
                        Delivered {progress}%  
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.6)" }}>
                        Delivered {progress}% 
                    </Typography>
                </Box>
            </Box>

            <Box 
                sx={{
                    // width: "33%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-start", 
                    gap: "0.8rem"  
                }}
            >
                <Box sx={{ width: "14px", height: "14px", borderRadius: "2px", backgroundColor: "#F88667",mt: "5px" }}></Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                        Delivered {progress}% 
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.6)" }}>
                        Delivered {progress}% 
                    </Typography>
                </Box>
            </Box>

            <Box 
                sx={{
                    // width: "33%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "flex-start", 
                    gap: "0.8rem"  
                }}
            >
                <Box sx={{ width: "14px", height: "14px", borderRadius: "2px", backgroundColor: "#F8E585", mt: "5px" }}></Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                    }}
                >
                    <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                        Delivered {progress}% 
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.6)" }}>
                        Delivered {progress}% 
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Campaign