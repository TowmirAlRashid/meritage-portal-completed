import { Box, InputBase, styled } from "@mui/material"
import CustomizedTable from "../../components/CustomizedTable"
import MainLayout from "../../layouts/MainLayout/MainLayout"

import data from "../../data"
import { useRouter } from "next/router"
import { useState } from "react"



const Search = styled('div')(({ theme }) => ({  // custom search component with inputwrapper and styled Input base
  position: 'relative',
  borderRadius: "4px",
  border: "1px solid rgba(0, 0, 0, 0.20)",
  "&:hover": {
      border: "1px solid rgba(0, 0, 0, 0.75)",
  },
  height: "2.5rem",
  // marginRight: theme.spacing(2),
  // marginLeft: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up('sm')]: {
      // marginLeft: theme.spacing(3),
      width: '100%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'rgba(0, 0, 0, 0.87)',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: {
    //       lg: 200,
    //       md: 100
    //   },
    // },
  },
}));



const AdminDashboard = () => {
  const router  = useRouter();

  const [entries, setEntries] = useState(10);   // takes how many rows to show (for web and tab table view) or how many cards to show in mobile view.

  const [query, setQuery] = useState('')        // takes the search input

  const handleChange = (event) => {
    setEntries(event.target.value);
  };

  const [page, setPage] = useState(1);          // page number state for pagination
  const handlePageChange = (_, value) => {
    setPage(value);
  };

  console.log(data)

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
              <CustomizedTable // holds the table / cards
                data={data} 
                router={router} 
                entries={entries} 
                setEntries={setEntries}
                Search={Search}
                SearchIconWrapper={SearchIconWrapper}
                StyledInputBase={StyledInputBase}
                query={query}
                setQuery={setQuery}
                handleChange={handleChange}
                page={page}
                setPage={setPage}
                handlePageChange={handlePageChange}
              />
            </Box>
          </Box>
        </MainLayout>
    </>
  )
}

export default AdminDashboard