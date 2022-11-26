import { Box, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import EmptyData from '../EmptyData';
import EnhancedTableHead from '../EnhancedTableHead';
import CardToEngagement from '../mobile/CardToEngagement';


// this component will take data from server for each engagement and then populate the table / card components
const ContactTarget = ({ data }) => {
    // device sizes to show either table view or card view
    const lgSize = useMediaQuery('(min-width:1200px)');
    const mdSize = useMediaQuery('(min-width:900px)');
    const smSize = useMediaQuery('(min-width:600px)');
    const xsSize = useMediaQuery('(max-width:600px)');

    const [page, setPage] = useState(1);          // page number state for pagination
    const handlePageChange = (_, value) => {
        setPage(value);
    };

    const [entries, setEntries] = useState(10);   // takes how many rows to show (for web and tab table view) or how many cards to show in mobile view.

  return (
    <Box sx={{
        width: "100%"
    }}>
        {
            data?.length > 0 ?
                <TableContainer>
                    <Box 
                        sx={{
                            pl: "1.5rem !important",
                            pr: "1.5rem !important"
                        }}
                    >
                        {
                            lgSize || mdSize && !(smSize && xsSize) ? 
                            <Table
                                aria-labelledby="tableTitle"
                            >
                                <EnhancedTableHead />

                                {/* intregate your engagements data to this table view */}
                                <TableBody>
                                    {
                                        data
                                        ?.filter((_, index) => index >= ((page - 1) * entries) && index < (page * entries)) // filter on page change 
                                        ?.map((row) => {
                                        return (
                                            <TableRow
                                                hover
                                                key={row.id}
                                            >
                                                <TableCell sx={{ paddingLeft: "1rem"}}>
                                                    {row.id}
                                                </TableCell>
                                                <TableCell sx={{ paddingLeft: "1rem"}}>
                                                    {row.eng_name}
                                                </TableCell>
                                                <TableCell sx={{ paddingLeft: "1rem"}}>{row.eng_date}</TableCell>
                                                <TableCell sx={{ paddingLeft: "1rem"}}>{row.eng_stage}</TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table> :

                            // intregate your engagements data to this card view
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "1rem",
                                }}
                            >
                                {
                                    data
                                    ?.filter((_, index) => index >= ((page - 1) * entries) && index < (page * entries))     // filter on page change or number of entries
                                    ?.map((row, index) => {
                                        return (
                                            <CardToEngagement 
                                                key={row.id} 
                                                index={row.id}
                                                name={row.eng_name}
                                                creationDate={row.eng_date} 
                                                stage={row.eng_stage}
                                            />
                                        )
                                    })
                                }
                            </Box>
                        }
                        
                    
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: {
                                    lg: "space-between",
                                    md: "space-between",
                                    sm: "center",
                                    xs: "center"
                                },
                                flexDirection: {
                                    lg: "row",
                                    md: "row",
                                    sm: "column",
                                    xs: "column"
                                },
                                alignItems: {
                                    lg: "center",
                                    md: "center",
                                    sm: "center",
                                    xs: "center"
                                },
                                margin: "1.5rem 2rem 1rem",
                                gap: {
                                    lg: "0",
                                    md: "0",
                                    sm: "1.5rem",
                                    xs: "1.5rem"
                                }
                            }}
                        >
                            {/* calculates the number of engagements showed in the current page out of the total number of engagements */}
                            <Typography>
                                Showing {((page - 1) * entries) + 1} to {page < (data.length / entries) ? `${((page - 1) * entries) + entries}` : `${((page -1) * entries) + (data.length % entries)}`} of {data.length} entries
                            </Typography>

                            {/* the table / card pagination */}
                            <Pagination 
                                count={Math.ceil(data.length / entries)} 
                                page={page} 
                                variant="outlined" 
                                shape="rounded"
                                onChange={handlePageChange} 
                                size="medium"
                                sx={{
                                    "& .MuiPaginationItem-root.Mui-selected": {
                                        color: "white",
                                        backgroundColor: "#0B4CCB"
                                    },
                                    "& .MuiPaginationItem-root": {
                                        border: "none !important"
                                    }
                                }}
                            />
                        </Box>
                    </Box>
                </TableContainer> :

                // in case there is no engagement data, this empty page is rendered
                <EmptyData />
        }
    </Box>
  )
}

export default ContactTarget