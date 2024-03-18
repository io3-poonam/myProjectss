import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
    const HandleHoverClick=()=>{
        console.log("F69400")
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Search onClick={HandleHoverClick}>
        {/* <SearchIconWrapper dir="rtl"> */}
        <Typography
          variant="div"
          sx={{
        display:"flex",  background: "#E6E6E6",borderRadius: "8px 0px 0px 8px",
        color: "#000000",}}
          
        >
            <Typography  
          variant="h6"
          sx={{fontSize: "0.9rem" ,
          padding: "25% 10% 25% 25%;",
          
          }}>
               All 
          </Typography>
          <Typography  
          variant="div"
          sx={{ padding: "32% 30% 32% 1%;",       background: "#E6E6E6",}}
         >
            <ArrowDropDownIcon  sx={{fontSize: "0.9rem" ,
           
     
           
          }} />
          </Typography>
     
        </Typography>
       
        {/* </SearchIconWrapper> */}
        <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
             <SearchIcon sx={{ padding: "1%" }} />
      </Search>
    </Box>
  );
}
