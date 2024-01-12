import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import ActiveMembers from "./ActiveMembers";
import PendingRequest from "./PendingRequest";
import MembershipExpired from "./MembershipExpired";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="home-container">
      <div className="association-main-box">
        <div className="association-sub-box">
          <div className="logo-div">
            <span className="logo-span">Logo</span>
          </div>
          <div className="association-div">
            <span className="Associations-text">Associations</span>
          </div>
        </div>
      </div>

      <div className="advocates-box-div">
        <div className="advocates-sub-box">
          <span className="Advocates-text">Advocates</span>
        </div>
      </div>

      <div className="tabbar-container">
        <div className="tabbar-sub-container">
          <Tabs value={value} onChange={handleChange} centered>
            <Tab className="subtab-sub-div" label="Active Members" />
            <Tab className="subtab-sub-div" label="Pending Request" />
            <Tab className="subtab-sub-div" label="Membership Expired" />
          </Tabs>
          <Box p={3}>
            {value === 0 && <ActiveMembers />}
            {value === 1 && <PendingRequest />}
            {value === 2 && <MembershipExpired />}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Home;
