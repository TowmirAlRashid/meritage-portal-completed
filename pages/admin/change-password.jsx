import { Box, Button, TextField, Typography } from "@mui/material"
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

  return (
    <>
        <MainLayout>
            <Box
                sx={{
                    display: {
                        lg: "block",
                        md: "block",
                        sm: "none",
                        xs: "none",
                    }
                }}
            >
                <BackToAdmin text="Change Password" />

                <Box
                    sx={{
                    backgroundColor: "white",
                    borderRadius: "15px",
                    marginRight: "1rem",
                    mb: 10,
                    }}
                >
                    <Box
                    component="form"
                    onSubmit={handleSubmit(onsubmit)}
                    sx={{
                        padding: "3rem 2rem 2rem"
                    }}
                    >
                        <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginBottom: "1.5rem"
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
                                        sx={{ width: "60%", "& .MuiInputBase-input": { padding: "10px 8px"}}}
                                    />
                                )
                            }}
                        />
                        </Box>

                        <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginBottom: "1.5rem"
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
                                        sx={{ width: "60%", "& .MuiInputBase-input": { padding: "10px 8px"}}}
                                    />
                                )
                            }}
                        />
                        </Box>

                        <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginBottom: "2.5rem"
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
                                        sx={{ width: "60%", "& .MuiInputBase-input": { padding: "10px 8px"} }}
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
                        sx={{ height: "3rem", width: "8rem", backgroundColor: "#0B4CCB" }}
                        >
                        Update
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box                // mobile view
                sx={{
                    display: {
                        lg: "none",
                        md: "none",
                        sm: "block",
                        xs: "block",
                    }
                }}
            >
                <Typography 
                    sx={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        display: "block",
                        margin: "1.5rem 1rem 0"
                    }}
                >
                    Change Password
                </Typography>

                <Box
                sx={{
                    display: "flex",
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
                    width: "92%",
                    borderRadius: "15px",
                    margin: "1rem auto 3rem",
                    padding: "1.5rem 1rem 2rem"
                    }}
                    component="form"
                    onSubmit={handleSubmit(onsubmit)}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            marginBottom: "1.5rem",
                            gap: "8px"
                        }}
                        >
                            <label id='currentPass' style={{ width: "10rem", fontSize: "16px"}}>Current Password</label>
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
                                        sx={{ "& .MuiInputBase-input": { padding: "8px 6px"}}}
                                        fullWidth
                                    />
                                )
                            }}
                        />
                        </Box>

                        <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            marginBottom: "1.5rem",
                            gap: "8px"
                        }}
                        >
                            <label id='newPass' style={{ width: "10rem", fontSize: "14px"}}>New Password</label>
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
                                        sx={{"& .MuiInputBase-input": { padding: "8px 6px"}}}
                                        fullWidth
                                    />
                                )
                            }}
                        />
                        </Box>

                        <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            marginBottom: "2.5rem",
                            gap: "8px"
                        }}
                        >
                            <label id='confirmNewPass' style={{ width: "10rem", fontSize: "14px"}}>Confirm New Password</label>
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
                                        sx={{ "& .MuiInputBase-input": { padding: "8px 6px"} }}
                                        fullWidth
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
                        sx={{ height: "2.25rem", width: "80%", margin: "auto 10%", backgroundColor: "#0B4CCB" }}
                    >
                        Update
                    </Button>
                </Box>

                <Box
                    sx={{
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