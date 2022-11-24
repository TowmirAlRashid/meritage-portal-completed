import { 
    Box, 
    FormControl, 
    InputLabel, 
    MenuItem, 
    Select, 
    Typography, 
    TableContainer, 
    Table, 
    TableBody, 
    TableRow, 
    TableCell, 
    Pagination, 
    useMediaQuery, 
    Divider 
} from '@mui/material'
import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import EnhancedTableHead from './EnhancedTableHead';

import Link from 'next/link'
import EmptyData from './EmptyData';
import CardToEngagement from './mobile/CardToEngagement';



const CustomizedTable = ({ data, entries, Search, SearchIconWrapper, StyledInputBase, query, setQuery, handleChange, page, handlePageChange }) => {

  const key = "eng_name"


// device sizes to show either table view or card view
const lgSize = useMediaQuery('(min-width:1200px)');
const mdSize = useMediaQuery('(min-width:900px)');
const smSize = useMediaQuery('(min-width:600px)');
const xsSize = useMediaQuery('(max-width:600px)');

  return (
    <Box
        sx={{ paddingBottom: "1rem" }}
    >
        <Box
            sx={{
                padding: "2rem 1.5rem",
                borderBottom: {
                    lg: "1px solid rgba(0, 0, 0, 0.12)",
                    md: "1px solid rgba(0, 0, 0, 0.12)",
                    sm: "none",
                    xs: "none"
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
                    justifyContent: {
                        lg: "space-between",
                        md: "space-between",
                        sm: "flex-start",
                        xs: "flex-start"
                    },
                    alignItems: {
                        lg: "center",
                        md: "center",
                        sm: "flex-start",
                        xs: "flex-start"
                    },
                    gap: {
                        lg: "0",
                        md: "0",
                        sm: "2rem",
                        xs: "2rem"
                    }
                }}
            >
                <Typography 
                    variant='h4' 
                    fontWeight="bold" 
                    sx={{ 
                        fontSize: {
                             lg: "24px", md: "24px", sm: "20px", xs: "20px" 
                        },
                        width: "65%" 
                    }}>Dashboard Data</Typography>

                <Box        // this box holds the search and number of entries data fields
                    sx={{
                        display: "flex",
                        justifyContent: {
                            lg: "flex-end",
                            md: "flex-end",
                            sm: "flex-start",
                            xs: "flex-start"
                        },
                        alignItems: {
                            lg: "center",
                            md: "center",
                            sm: "flex-start",
                            xs: "flex-start"
                        },
                        flexDirection: {
                            lg: "row",
                            md: "row",
                            sm: "column",
                            xs: "column"
                        },
                        gap: "1.2rem",
                        width: {
                            lg: "70%",
                            md: "70%",
                            sm: "100%",
                            xs: "100%"
                        },
                    }}
                >
                    {/* number of entries */}
                    <FormControl sx={{ width: { lg: "60%", md: "60%", sm: "100%", xs: "100%" }}} fullWidth>
                        <InputLabel id="show-entries">Show Entries</InputLabel>
                        <Select
                            labelId="show-entries"
                            id="show-entries"
                            value={entries}
                            label="Show Entries"
                            onChange={handleChange}
                            sx={{
                                "& .MuiSelect-select": {
                                    padding: "8px 32px 8px 10px !important"
                                }
                            }}
                        >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                        </Select>
                    </FormControl>

                    {/* the search bar to get the desired engagement */}
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon sx={{ color: "rgba(0, 0, 0, 0.54)"}} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            sx={{ color: "black"}}
                            type="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </Search>
                </Box>
            </Box>
        </Box>

        {
            xsSize || smSize && !(lgSize && mdSize) ? <Box
                sx={{
                    width: "88%",
                    margin: "0 6% 1.5rem"
                }}
            >
                <Divider />
            </Box> : <></>
        }


        {/* after checking the device sizes, either the table view or the card view is rendered here */}
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
                                        ?.filter((row) => {     // search on engagement name
                                            if(query !== "") {
                                                return row[key].toLowerCase().includes(query)
                                            } else {
                                                return row;
                                            }
                                        })
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
                                                    <Link href={`/admin/${row.eng_name}`}>
                                                        <a style={{ color: "#0288D1" }}>{row.eng_name}</a>
                                                    </Link>
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
                                    ?.filter((row) => {
                                        if(query !== "") {
                                            return row[key].toLowerCase().includes(query)       // search on engagement name
                                        } else {
                                            return row;
                                        }
                                    })
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

export default CustomizedTable