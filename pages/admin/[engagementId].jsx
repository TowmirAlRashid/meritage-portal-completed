import React from 'react'
import MainLayout from "../../layouts/MainLayout/MainLayout";

import BackToAdmin from "../../components/backToAdmin"
import { useRouter } from 'next/router';

import data from "../../data"
import { Box, Button } from '@mui/material';

import { useContext } from 'react';
import AppContext from '../../AppContext';
import RecordDetails from '../../components/engagementTab/RecordDetails';
import ContactTarget from '../../components/engagementTab/ContactTarget';
import CampaignDetails from '../../components/engagementTab/CampaignDetails';

const Engagement = () => {
    const router = useRouter();
    const engagementId = router.query.engagementId; // gets the engagement id from the route to get dynamic data

    const values = useContext(AppContext)  // nested navbar state
    const { value, setValue } = values;

    const handleRecordClick = () => {       // these 3 functions change the state of the nested navbar on click
        setValue("Record Details")
      }

      const handleContactClick = () => {
        setValue("Contact Target")
      }

      const handleCampaignClick = () => {
        setValue("Campaign Details")
      }

    

  return (
    <>
        <MainLayout>
            
            <Box
                sx={{
                    overflowY: {
                      sm: "scroll",
                      xs: "scroll",
                      lg: "hidden",
                      md: "hidden"
                    },
                }}
            >
                <BackToAdmin text={`Mock Engagement ${engagementId}`} />

                <Box
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "15px",
                        margin: "2rem 1rem 7rem",
                        overflowY: {
                          sm: "scroll",
                          xs: "scroll",
                          lg: "hidden",
                          md: "hidden"
                        },
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            padding: "0.5rem 1rem 0",
                            boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.12)",
                            display: {
                                lg: "flex",
                                md: "flex",
                                sm: "none",
                                xs: "none"
                            },
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            sx={{
                                color: `${value === "Record Details"? "#0B4CCB" : "black"}`,
                                borderRadius: "0",
                                borderBottom: `${value === "Record Details"? "2px solid #0B4CCB" : "none"}`,
                                padding: "6px 30px"
                            }}
                            onClick={handleRecordClick}
                        >Record Details</Button>

                        <Button
                            sx={{
                                color: `${value === "Contact Target"? "#0B4CCB" : "black"}`,
                                borderRadius: "0",
                                borderBottom: `${value === "Contact Target"? "2px solid #0B4CCB" : "none"}`,
                                padding: "6px 30px"
                            }}
                            onClick={handleContactClick}
                        >Contact Target</Button>

                        <Button
                            sx={{
                                color: `${value === "Campaign Details"? "#0B4CCB" : "black"}`,
                                borderRadius: "0",
                                borderBottom: `${value === "Campaign Details"? "2px solid #0B4CCB" : "none"}`,
                                padding: "6px 30px"
                            }}
                            onClick={handleCampaignClick}
                        >Campaign Details</Button>
                    </Box>

                    <Box
                        sx={{
                            width: "100%",
                            padding: "1.5rem 1rem 3rem"
                        }}
                    >
                        {/* based on the navbar state, the below components are rendered conditionally */}
                        {
                            value === "Record Details" && <RecordDetails />
                        }

                        {
                            value === "Contact Target" && <ContactTarget data={data} />
                        }

                        {
                            value === "Campaign Details" && <CampaignDetails />
                        }
                    </Box>
                </Box>
            </Box>

        </MainLayout>
    </>
  )
}

export default Engagement

// export async function getStaticProps(context) {
//     console.log(context)
//     return {
//         props: {
//             // engagement: data?.filter(targetEngagement => targetEngagement.id === params.engagementId)
//             data: {}
//         }
//     }
// }

// export async function getStaticPaths() {
//     return {
//         paths: [{ params: { engagementId: "1" } }],
//         fallback: false
//     }
// }