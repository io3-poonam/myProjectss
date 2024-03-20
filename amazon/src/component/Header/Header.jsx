import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SearchAppBar from "../InputSearch/InputSearch";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Logo from "../../Assets/icon/amazon-ar21.svg";
import CountryFlag from "../../Assets/icon/flag.avif"
import "./style.css"
import { useNavigate } from "react-router-dom";
export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // const menuId = "primary-search-account-menu";
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // );

  // const mobileMenuId = "primary-search-account-menu-mobile";
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton size="large" aria-label="show 4 new mails" color="inherit">
  //         <Badge badgeContent={4} color="error">
  //           <MailIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Messages</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton
  //         size="large"
  //         aria-label="show 17 new notifications"
  //         color="inherit"
  //       >
  //         <Badge badgeContent={17} color="error">
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Notifications</p>
  //     </MenuItem>
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         size="large"
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );
  const navigate=useNavigate();
const HandleInputClick=()=>{
  navigate("/Login")
}
const HandleHomePage=()=>{
  navigate("/homePage")

}
  return (
    <Box  >
      <AppBar position="static"
       sx={{backgroundColor:"#131921" }}
       >
        <Toolbar sx={{width: "100%",
    display: "flex",
    flexDirection: "row",
    /* flex-shrink: 4; */
    /* flex-grow: 2; */
    flexWrap: "wrap"}}>
          <Box className="hoverPointing"
            component="img"
            sx={{
              cursor: "pointer",
              height: 90,
              width: 150,
              maxHeight: { xs: 100, md: 70 },
              maxWidth: { xs: 150, md: 100 },
            }}
            alt="The house from the offer."
            src={Logo}
            onClick={(e)=>HandleHomePage(e)}
          />
          <Box  className="hoverPointing">
            <Typography
              sx={{ fontSize: "11px" }}
              // variant="h6"
              noWrap
              // component="div"
            >
              Delivering to Chandigarh 160047
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600" }}
              // variant="h6"
              noWrap
              component="div"
            >
              <PlaceOutlinedIcon sx={{ fontSize: "16px" }} />
              Update location
            </Typography>
          </Box>
         
          <Box sx={{flexGrow: { xs: "none", md: "flex" },flexGrow: 1 }}   >
              {/* // sx={{ fontSize: "14px", fontWeight: "600" }}
              // variant="h6"
              // noWrap */}
            <SearchAppBar /></Box>
          <Box sx={{display:"flex" }}className=" hoverPointingCountry">
          <Box
            component="img"
            sx={{
              cursor: "pointer",
              height: 18,
              width: 25,
              maxHeight: { xs: 17, md: 18 },
              maxWidth: { xs: 24, md: 25 },
            }}
            alt="CountryFlag."
            src={CountryFlag}
          />
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600" }}
              // variant="h6"
              noWrap
              component="div"
            >
            Cou
            <ArrowDropDownIcon sx={{ fontSize: "0.9rem" }} />

            </Typography>
          </Box>   
            <Box className="hoverPointing" onClick={(e)=>HandleInputClick(e)}>
            <Typography
              sx={{ fontSize: "11px" }}
              // variant="h6"
              noWrap
              // component="div"
            >
            Hello Sign in
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600" }}
              // variant="h6"
              noWrap
              component="div"
            >
             Account And List 
            <ArrowDropDownIcon sx={{ fontSize: "0.9rem" }} />

            </Typography>
          </Box>    
           <Box className="hoverPointing">
            <Typography
              sx={{ fontSize: "11px" }}
              // variant="h6"
              noWrap
              // component="div"
            >
              Return
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600" }}
              // variant="h6"
              noWrap
              component="div"
            >
          &Orders
            </Typography>
          </Box>
          <Typography className="hoverPointing"
              sx={{ fontSize: "14px", fontWeight: "600" }}
              // variant="h6"
              noWrap
              component="div"
            >
            <ShoppingCartOutlinedIcon/>Cart

            </Typography>

          {/* <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box> */}
        </Toolbar>

      </AppBar>
      {/* {renderMobileMenu}
      {renderMenu} */}
    </Box>
  );
}
