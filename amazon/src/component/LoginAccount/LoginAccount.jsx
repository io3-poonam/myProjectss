import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/icon/amazon-logo.png";
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

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "30ch" },
          background: "light",
          margin: "10% auto",
          border: "1px solid black",
          width: "40%",
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          onClick={(h) => HandleHomePage(h)}
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
        />
        <Typography variant="h4"> Sign in</Typography>
        <form>
          <label htmlFor="EmailMobile">Email or mobile phone number</label>
          <input id="EmailMobile" type="text" />
        </form>
        <Stack spacing={4} direction="row">
          <Button variant="contained">Contained</Button>
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
      <footer>
      © 1996-2024,
        Amazon.com, Inc. or its affiliates
      </footer>
    </>
  );
};
export default LoginPage;
