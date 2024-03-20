import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CountryFlag from "../../Assets/icon/flag.avif"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";
import axios from "axios";
import "./style.css"
const Country = () => {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    ApiCall();
  }, []);
  const ApiCall = async () => {
    const api = `https://restcountries.com/v3.1/all`;
    const res = await axios.get(api);
    const {data=[]}=res||{}
    setCountryData(data);
    console.log(data);

  };
  console.log(">>", countryData);
 

  return (
    <>

      <Box className=" container">
        {countryData.map((item,index)=>{
            return(
                  < >
                       <Box sx={{ display:"flex"  }} className="subContainer">
          <Box key={index}
            component="img"
            src={item?.flags.svg} alt={item?.flags.alt} className="image"

            sx={{
              cursor: "pointer",
              height: 18,
              width: 25,
              maxHeight: { xs: 17, md: 18 },
              maxWidth: { xs: 24, md: 25 },
            }}
         
          />
            <Typography
              sx={{ fontSize: "14px", fontWeight: "600",paddingLeft:"5%" }}
              // variant="h6"
              noWrap
              component="div"
            >
          {item?.flag}

            </Typography>
          </Box> 

</>);
        })}
            <ArrowDropDownIcon sx={{ fontSize: "0.9rem" }} />

        {/* {countryData.map((items, index) => {
          return (<h1>area={items?.area}</h1>);
        })} */}
      </Box>
    </>
  );
};
export default Country;
