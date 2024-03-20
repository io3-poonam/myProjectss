import React from "react";

import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Height } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ConditionPage = () => {
 const navigate=useNavigate();
const HandleGoToLoginPage=(event)=>{
navigate("/Login")
}
  return (
    <>
      <Box sx={{ width: " 80%", margin: "2% auto" }}>
        <Typography variant="h4">Conditions of Use</Typography>
        <Typography variant="p">
          <strong>Disclaimer</strong>:In the event of any discrepancy or
          conflict, the English version will prevail over the translation.
          <br />
          The website www.amazon.in ("Amazon.in") is operated by Amazon Seller
          Services Private Limited ("Amazon" or "us" or "we" or "our"), having
          its registered office located 8th Floor, Brigade Gateway 26/1 Dr.
          Rajkumar Road Bangalore - 560055, Karnataka, India. Please read the
          Conditions of Use document carefully before using the Amazon.in
          website. By using the Amazon.in website, you signify your agreement to
          be bound by Amazon's Conditions of Use. Amazon Europe Core SARL,
          Amazon EU SARL, Amazon Services Europe SARL and Amazon Media EU SARL,
          all four at 38 avenue John F. Kennedy, L-1855, Luxembourg and Amazon
          Digital UK Limited of 1 Principal Place, Worship Street, London, EC2A
          2FA, UK (together "Amazon Europe") are data controllers of personal
          information collected and processed through Amazon Services. Details
          can be found here. As described in our Privacy Notice, we share
          information with Amazon.com, Inc. and the subsidiaries that
          Amazon.com, Inc. controls that are either subject to our Privacy
          Notice or follow practices at least as protective as those described
          in our Privacy Notice. We also share information with third-party
          service providers. For example, we use third-party service providers
          to fulfill orders for products or services, and to deliver packages.
          For any further details on our security practices please read our
          Privacy Notice. For any queries or issues relating to Amazon.in, you
          can contact us by clicking <Typography sx={{color:"#17c8e3",cursor:"pointer"}} onClick={(e)=>HandleGoToLoginPage(e)}>www.amazon.in/gp/help/contact-us</Typography>
        </Typography>
        <Typography variant="h5"  sx={{
        fontWeight:"600",color:"#000000",paddingY:"2%",
              }}>
          Conditions Relating to Your Use of Amazon.in
        </Typography>
        <Typography></Typography>
        <List
          sx={{
            width: "100%",
            maxWidth: "fitContent",
            bgcolor: "background.paper",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{
                lineHeight: "20px" ,fontWeight:"800",color:"#000000",
              }}
            >
              1 Your Account
            </ListSubheader>
          }
        >
          <ListItem>
            If you use the website, you are responsible for maintaining the
            confidentiality of your account and password and for restricting
            access to your computer to prevent unauthorised access to your
            account. You agree to accept responsibility for all activities that
            occur under your account or password. You should take all necessary
            steps to ensure that the password is kept confidential and secure
            and should inform us immediately if you have any reason to believe
            that your password has become known to anyone else, or if the
            password is being, or is likely to be, used in an unauthorised
            manner. Please ensure that the details you provide us with are
            correct and complete and inform us immediately of any changes to the
            information that you provided when registering. You can access and
            update much of the information you provided us with in the Your
            Account Your Account
            (https://www.amazon.in/gp/css/homepage.html/youraccount) area of the
            website.
          </ListItem>
          {
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{
                lineHeight: "20px" ,fontWeight:"800",color:"#000000",
              }}
            >
              2 Privacy
            </ListSubheader>
          }
          <ListItem>
            Please review our Privacy Notice Privacy Notice
            (https://www.amazon.in/privacynotice), which also governs your visit
            to Amazon.in, to understand our practices. The personal information
            / data provided to us by you during the course of usage of Amazon.in
            will be treated as strictly confidential and in accordance with the
            Privacy Notice and applicable laws and regulations. If you object to
            your information being transferred or used, please do not use the
            website.
          </ListItem>{" "}
          {
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{
                lineHeight: "20px" ,fontWeight:"800",color:"#000000",
              }}
            >
              3 E-Platform for Communication
            </ListSubheader>
          }
          <ListItem>
            You agree, understand and acknowledge that the website is an online
            platform that enables you to purchase products listed on the website
            at the price indicated therein at any time from any location. You
            further agree and acknowledge that Amazon is only a facilitator and
            is not and cannot be a party to or control in any manner any
            transactions on the website. Accordingly, the contract of sale of
            products on the website shall be a strictly bipartite contract
            between you and the sellers on Amazon.in.
          </ListItem>
          {
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{
                lineHeight: "20px" ,fontWeight:"800",color:"#000000",
              }}
            >
              4 Access to Amazon.in
            </ListSubheader>
          }
          <ListItem>
            We will do our utmost to ensure that availability of the website
            will be uninterrupted and that transmissions will be error-free.
            However, due to the nature of the Internet, this cannot be
            guaranteed. Also, your access to the website may also be
            occasionally suspended or restricted to allow for repairs,
            maintenance, or the introduction of new facilities or services at
            any time without prior notice. We will attempt to limit the
            frequency and duration of any such suspension or restriction.
          </ListItem>
          {
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{
                lineHeight: "20px" ,fontWeight:"800",color:"#000000"
              }}
            >
              5 Licence for website access
            </ListSubheader>
          }
          <ListItem>
            Subject to your compliance with these Conditions of Use and payment
            of applicable fees, if any, Amazon Seller Services Private Limited
            grants you a limited licence to access and make personal use of this
            website, but not to download (other than page caching) or modify it,
            or any portion of it, except with express written consent of Amazon
            Seller Services Private Limited and / or its affiliates, as may be
            applicable. This licence does not include any resale or commercial
            use of this website or its contents; any collection and use of any
            product listings, descriptions, or prices; any derivative use of
            this website or its contents; any downloading or copying of account
            information for the benefit of another seller; or any use of data
            mining, robots, or similar data gathering and extraction tools..
          </ListItem>
        </List>
      </Box>
    </>
  );
};
export default ConditionPage;
