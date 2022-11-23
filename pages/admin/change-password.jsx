import { Box, Button, TextField, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import BackToAdmin from "../../components/backToAdmin"
import MainLayout from "../../layouts/MainLayout/MainLayout"

import CustomizedSnackbar from "../../components/snackbar"
import { useRouter } from "next/router"

const PasswordChange = () => {
    const router = useRouter();
    
    const { control, handleSubmit } = useForm();

    const onsubmit = (data) => {
        console.log(data)
    }

    const [state, setState] = useState({
        openSnack: false,
        vertical: 'bottom',
        horizontal: 'right',
      });
    
      const { vertical, horizontal, openSnack } = state;
    
      const handleClose = () => {
        setState({ ...state, openSnack: false });
      };
    
      const handleUpdateClick = (newState, Transition) => () => {
        setState({ openSnack: true, Transition, ...newState });
      };
    
      const handleLogOut = () => {
        router.push("/login")
      }

      const theme = useTheme();
      const lgSize = useMediaQuery(theme.breakpoints.up('lg'));
      const mdSize = useMediaQuery(theme.breakpoints.up('md'));
      const smSize = useMediaQuery(theme.breakpoints.up('sm'));
      const xsSize = useMediaQuery(theme.breakpoints.up('xs'));

  return (
    <>
        <MainLayout>
            <Box>
                {
                    lgSize || mdSize && !(smSize && xsSize) ?  
                        <BackToAdmin text="Change Password" /> :
                        <Typography 
                            sx={{
                                fontSize: "1.25rem",
                                fontWeight: "bold",
                                display: "block",
                                margin: "1.5rem 1rem 1rem"
                            }}
                        >
                            Change Password
                        </Typography>
                }

                <Box
                    sx={{
                        display: {
                            lg: "block",
                            md: "block",
                            sm: "flex",
                            xs: "flex"
                        },
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        height: "100%",
                        overflowY: "scroll",
                        pb: "7rem"
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "15px",
                            marginRight: "1rem",
                            marginLeft: "1rem",
                            width: "90%",
                            margin: "0 5% 0",
                            mb: 10
                        }}
                    >
                        <Box
                            component="form"
                            onSubmit={handleSubmit(onsubmit)}
                            sx={{
                                padding: {
                                    lg: "3rem 2rem 2rem",
                                    md: "3rem 2rem 2rem",
                                    sm: "2rem 1rem 2rem",
                                    xs: "2rem 1rem 2rem"
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: {
                                        lg: "row",
                                        md: "row",
                                        sm: "column",
                                        xs: "column"
                                    },
                                    justifyContent: "flex-start",
                                    alignItems: {
                                        lg: "center",
                                        md: "center",
                                        sm: "flex-start",
                                        xs: "flex-start"
                                    },
                                    marginBottom: "1.5rem",
                                    gap: {
                                        lg: "0",
                                        md: "0",
                                        sm: "8px",
                                        xs: "8px"
                                    }
                                }}
                            >
                                <label id='currentPass' style={{ width: "15rem"}}>Current Password</label>
                                <Controller
                                    name="current password"
                                    control={control}
                                    render={({ field }) => {
                                        return (
                                            <TextField 
                                                id="currentPass" 
                                                variant="outlined"
                                                {...field} 
                                                type="password"
                                                sx={{ 
                                                    "& .MuiInputBase-input": {
                                                        padding: {
                                                            lg: "10px 8px",
                                                            md: "10px 8px",
                                                            sm: "8px 6px",
                                                            xs: "8px 6px"
                                                        }
                                                    },
                                                    width: {
                                                        lg: "60%",
                                                        md: "60%",
                                                        sm: "100%",
                                                        xs: "100%"
                                                    }
                                                }}
                                            />
                                        )
                                    }}
                                />
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: {
                                        lg: "row",
                                        md: "row",
                                        sm: "column",
                                        xs: "column"
                                    },
                                    justifyContent: "flex-start",
                                    alignItems: {
                                        lg: "center",
                                        md: "center",
                                        sm: "flex-start",
                                        xs: "flex-start"
                                    },
                                    marginBottom: "1.5rem",
                                    gap: {
                                        lg: "0",
                                        md: "0",
                                        sm: "8px",
                                        xs: "8px"
                                    }
                                }}
                            >
                                <label id='newPass' style={{ width: "15rem"}}>New Password</label>
                                <Controller
                                name="new password"
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <TextField 
                                            id="newPass" 
                                            variant="outlined"
                                            {...field} 
                                            type="password"
                                            sx={{ 
                                                "& .MuiInputBase-input": {
                                                    padding: {
                                                        lg: "10px 8px",
                                                        md: "10px 8px",
                                                        sm: "8px 6px",
                                                        xs: "8px 6px"
                                                    }
                                                },
                                                width: {
                                                    lg: "60%",
                                                    md: "60%",
                                                    sm: "100%",
                                                    xs: "100%"
                                                }
                                            }}
                                        />
                                    )
                                }}
                            />
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: {
                                        lg: "row",
                                        md: "row",
                                        sm: "column",
                                        xs: "column"
                                    },
                                    justifyContent: "flex-start",
                                    alignItems: {
                                        lg: "center",
                                        md: "center",
                                        sm: "flex-start",
                                        xs: "flex-start"
                                    },
                                    marginBottom: "1.5rem",
                                    gap: {
                                        lg: "0",
                                        md: "0",
                                        sm: "8px",
                                        xs: "8px"
                                    }
                                }}
                            >
                                <label id='confirmNewPass' style={{ width: "15rem"}}>Confirm New Password</label>
                                <Controller
                                name="confirm new password"
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <TextField 
                                            id="confirmNewPass" 
                                            variant="outlined"
                                            {...field} 
                                            type="password"
                                            sx={{ 
                                                "& .MuiInputBase-input": {
                                                    padding: {
                                                        lg: "10px 8px",
                                                        md: "10px 8px",
                                                        sm: "8px 6px",
                                                        xs: "8px 6px"
                                                    }
                                                },
                                                width: {
                                                    lg: "60%",
                                                    md: "60%",
                                                    sm: "100%",
                                                    xs: "100%"
                                                }
                                            }}
                                        />
                                    )
                                }}
                            />
                            </Box>

                            <Button
                                type='submit'
                                onClick={handleUpdateClick({
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                })}
                                variant="contained"
                                sx={{ 
                                    height: {
                                        lg: "3rem",
                                        md: "3rem",
                                        sm: "2.25rem",
                                        xs: "2.25rem"
                                    }, 
                                    width: {
                                        lg: "8rem",
                                        md: "8rem",
                                        sm: "80%",
                                        xs: "80%"
                                    }, 
                                    backgroundColor: "#0B4CCB" ,
                                    margin: {
                                        sm: "2rem 10%",
                                        xs: "2rem 10%",
                                        lg: "2rem 0",
                                        md: "2rem 0"
                                    }
                                }}
                            >
                                Update
                            </Button>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: {
                                lg: "none",
                                md: "none",
                                sm: "block",
                                xs: "block"
                            },
                            width: "66%"
                        }}
                    >
                        <Button
                            variant='outlined'
                            fullWidth
                            onClick={handleLogOut}
                        >
                            Logout
                        </Button>
                    </Box>
                </Box>
            </Box>

            <CustomizedSnackbar 
                vertical={vertical} 
                horizontal={horizontal} 
                openSnack={openSnack}
                handleClose={handleClose}
                message="Your Password is Updated"
            />
        </MainLayout>
    </>
  )
}

export default PasswordChange