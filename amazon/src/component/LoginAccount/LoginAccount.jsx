import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/icon/amazon-logo.png";
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
const LoginPage = () => {
  const navigate = useNavigate();
  const HandleCondition = (event) => {
    navigate("/ConditionPage");
  };

  const HandlePrivacy = (e) => {
    navigate("/PrivacyPage");
  };
  const HandleHomePage = (e) => {
    navigate("/");
  };
  // input
  const InputSection = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
      width:theme.spacing(60),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
      border: '1px solid',
      borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
      fontSize: 16,
      width: "100%",
      height: "fitContent",
      padding: '8px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  return (
    <> 
    <Box
    component="div"
    sx={{width:"45%",
  margin:"auto"}}
  > 
  <Box sx={{    margin: "auto",
    width:" 40%"}}>
  <Box
    onClick={(h) => HandleHomePage(h)}
    component="img"
    sx={{
      cursor: "pointer",
      height: 150,
      width: 200,
      maxHeight: { xs: 100, md: 110 },
      maxWidth: { xs: 150, md: 180 },
    }}
    alt="The house from the offer."
    src={Logo}
  /></Box>
         <Box
        component="div"
        sx={{
          "& > :not(style)": { m: 1,},
          background: "light",
          margin: "1% auto",
          border: "1px solid black",    borderRadius: "15px",
          padding: "2% 2% 2% 4%;",
          width: "100%",
        }}
      >
      
           <Box
        component="form"
        sx={{
          background: "light",
          margin: "5% auto",
          
          width: "40%",
        }}
        noValidate
        autoComplete="off"
      ></Box>

        <Typography variant="h4"> Sign in</Typography>
      
        <FormControl variant="standard">
        <InputLabel shrink htmlFor="input-Section" sx={{color: "black",
      fontWeight: "600",
      fontSize: "1.4rem",
      lineHeight: "1em"}}>
          Email or mobile phone number
        </InputLabel>
        <InputSection id="fullWidth input-Section" />
      </FormControl>

        <Stack spacing={4} direction="row" id="fullWidth" sx={{width:"94%"}} >
          <Button variant="contained" sx={{width:"100%"}}  >Contained</Button>
        </Stack>
        <Typography >
          {" "}
          By continuing, you agree to Amazon's{" "}
          <Typography
            component="a"
            sx={{ cursor: "pointer", color: "blue" }}
            onClick={(e) => HandleCondition(e)}
          >
            Conditions of Use
          </Typography>{" "}
          and{" "}
          <Typography
            component="a"
            sx={{ cursor: "pointer", color: "blue" }}
            onClick={(p) => HandlePrivacy(p)}
          >
            Privacy Notice.
          </Typography>
        </Typography>
        <Typography component="a">Need help?</Typography>
        <Typography component="a">    Buying for work?</Typography>
        <Typography component="a">     Shop on Amazon Business New to Amazon?</Typography>
        <Typography component="a">    Create your
        Amazon account</Typography>

        <Typography
            component="a"
            sx={{ cursor: "pointer", color: "blue" }}
            onClick={(e) => HandleCondition(e)}
          >
            Conditions of Use
          </Typography> <Typography
            component="a"
            sx={{ cursor: "pointer", color: "blue" }}
            onClick={(p) => HandlePrivacy(p)}
          >
            Privacy Notice.
          </Typography> Help 
      </Box>
      </Box>
      <footer>
      © 1996-2024,
        Amazon.com, Inc. or its affiliates
      </footer>
    </>
  );
};
export default LoginPage;
