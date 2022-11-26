import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import React, { useContext } from 'react'
import CustomIconButton from './CustomIconButton'

import ArticleIcon from '@mui/icons-material/Article';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CampaignIcon from '@mui/icons-material/Campaign';

import { useRouter } from 'next/router';
import AppContext from '../../AppContext';

const Navbar = ({ navState, setNavState }) => {
    const router = useRouter()

    const values = useContext(AppContext);

    const { value, setValue } = values;

    console.log(value, setValue)

    if(router.pathname.includes("/admin/[engagementId]")) {
      const handleRecordClick = () => {
        setValue("Record Details")
      }

      const handleContactClick = () => {
        setValue("Contact Target")
      }

      const handleCampaignClick = () => {
        setValue("Campaign Details")
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
              text="Record Details" 
              icon={
                <ArticleIcon 
                  sx={{
                    color: `${value === "Record Details" ? "#0B4CCB !important" : "inherit"}`,
                    width: "24px",
                    height: "24px",
                  }}
                />
              } 
              onclick={handleRecordClick} 
              color={`${value === "Record Details" ? "#0B4CCB !important" : "inherit"}`} 
              backgroundColor={`${value === "Record Details" ? "rgba(11, 76, 203, 0.04) !important" : "inherit"}`} 
            />
    
            <CustomIconButton 
              text="Contact Target" 
              icon={
                <PermContactCalendarIcon 
                  sx={{
                    color: `${value === "Contact Target"? "#0B4CCB !important" : "inherit"}`,
                    width: "24px",
                    height: "24px",
                  }}
                />
              } 
              onclick={handleContactClick} 
              color={`${value === "Contact Target" ? "#0B4CCB !important" : "inherit"}`}
              backgroundColor={`${value === "Contact Target" ? "rgba(11, 76, 203, 0.04) !important" : "inherit"}`} 
            />
    
            <CustomIconButton 
              text="Campaign Details" 
              icon={
                <CampaignIcon 
                  sx={{
                    color: `${value === "Campaign Details" ? "#0B4CCB !important" : "inherit"}`,
                    width: "24px",
                    height: "24px",
                  }} 
                />
              } 
              onclick={handleCampaignClick} 
              color={`${value === "Campaign Details" ? "#0B4CCB !important" : "inherit"}`} 
              backgroundColor={`${value === "Campaign Details" ? "rgba(11, 76, 203, 0.04) !important" : "inherit"}`} 
            />
        </AppBar>
      )
    } else {
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
}

export default Navbar