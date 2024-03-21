import React from "react";
import { Box } from "@mui/material";
const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <>
    <footer >
    <Box className="w-100 bg-body-tertiary bg-light  text-center   bottom-0 "> <p> Copyright &#169; {year} Techno Graphy All Right Reserved | Term and Condition</p>
    </Box> </footer>
    </>
  );
};
export default Footer;
