import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import CustomIconButton from './CustomIconButton'

import ArticleIcon from '@mui/icons-material/Article';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/router';

const Navbar = ({ navState, setNavState }) => {
    const router = useRouter()

    if(router.pathname.includes("Dashboard")){
      setNavState("Dashboard");
    } else if (router.pathname.includes("all-engagements")) {
      setNavState("all-engagements");
    } else if (router.pathname.includes("change-password")) {
      setNavState("change-password");
    }
    
  const handleProfileButtonClick = () => {
    setNavState("change-password");
    router.push("/admin/change-password");
  }

  const handleDashboardClick = () => {
    setNavState("Dashboard");
    router.push("/admin")
  }

  const handleEngagementsClick = () => {
    setNavState("all-engagements");
    router.push("/all-engagements")
  }

  return (
    <AppBar 
        position="fixed" 
        color="primary" 
        sx={{ 
            top: 'auto', 
            bottom: 0,
            height: "5.5rem",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white",
            boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.15)"
        }}
    >
        <CustomIconButton 
          text="Dashboard" 
          icon={
            <ArticleIcon 
              sx={{
                color: `${navState === "Dashboard" ? "#0B4CCB !important" : "inherit"}`,
                width: "24px",
                height: "24px",
              }}
            />
          } 
          onclick={handleDashboardClick} 
          color={`${navState === "Dashboard" ? "#0B4CCB !important" : "inherit"}`} 
          backgroundColor={`${navState === "Dashboard" ? "rgba(11, 76, 203, 0.04) !important" : "inherit"}`} 
        />

        <CustomIconButton 
          text="All Engagements" 
          icon={
            <PeopleAltIcon 
              sx={{
                color: `${navState === "all-engagements"? "#0B4CCB !important" : "inherit"}`,
                width: "24px",
                height: "24px",
              }}
            />
          } 
          onclick={handleEngagementsClick} 
          color={`${navState === "all-engagements" ? "#0B4CCB !important" : "inherit"}`}
          backgroundColor={`${navState === "all-engagements" ? "rgba(11, 76, 203, 0.04) !important" : "inherit"}`} 
        />

        <CustomIconButton 
          text="Profile" 
          icon={
            <AccountCircleIcon 
              sx={{
                color: `${navState === "change-password" ? "#0B4CCB !important" : "inherit"}`,
                width: "24px",
                height: "24px",
              }} 
            />
          } 
          onclick={handleProfileButtonClick} 
          color={`${navState === "change-password" ? "#0B4CCB !important" : "inherit"}`} 
          backgroundColor={`${navState === "change-password" ? "rgba(11, 76, 203, 0.04) !important" : "inherit"}`} 
        />
    </AppBar>
  )
}

export default Navbar