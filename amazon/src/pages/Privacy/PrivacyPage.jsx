import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
const PrivacyPage = () => {
  return (
    <>
      <Box sx={{ width: " 80%", margin: "2% auto" }}>
        <Typography variant="h4"> Amazon.in Privacy Notice</Typography>
        <Typography variant="p">
          <strong>Disclaimer</strong>: In the event of any discrepancy or
          conflict, the English version will prevail over the translation.
          <br />
          <strong>
            {" "}
            Last updated: August 11, 2022. To see prior version, click here
          </strong>
        </Typography>
        <Typography
          sx={{
            paddingY: "1%",
          }}
        >
          We know that you care how information about you is used and shared,
          and we appreciate your trust that we will do so carefully and
          sensibly. This Privacy Notice describes how Amazon Seller Services
          Private Limited and its affiliates including Amazon.com, Inc.
          (collectively "Amazon") collect and process your personal information
          through Amazon websites, devices, products, services, online
          marketplace and applications that reference this Privacy Notice
          (together "Amazon Services").
          <Typography
            sx={{
              paddingY: "1%",
            }}
          >
            By using Amazon Services you agree to our use of your personal
            information (including sensitive personal information) in accordance
            with this Privacy Notice, as may be amended from time to time by us
            at our discretion. You also agree and consent to us collecting,
            storing, processing, transferring, and sharing your personal
            information (including sensitive personal information) with third
            parties or service providers for the purposes set out in this
            Privacy Notice.
          </Typography>
        </Typography>
        <Typography
          sx={{
            padding: "0% 0 1% 0" ,
          }}
        >
          Personal information subject to this Privacy Notice will be collected
          and retained by Amazon, with a registered office at 8th floor, Brigade
          Gateway 26/1 Dr. Rajkumar Road Bangalore Karnataka 560055 India.
        </Typography>
      </Box>
    </>
  );
};
export default PrivacyPage;
