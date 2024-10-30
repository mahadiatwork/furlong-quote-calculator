import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Heading2 } from "../atoms/Heading2";
import { Text1 } from "../atoms/Text1";
import { BoldText1 } from "../atoms/BoldText1";
import LaborCalculator from "./LaborCalculator";
import PaintCalculator from "./PaintCalculator";
import TravelAccommodationCalculator from "./TravelAccomodation";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function CustomTabs({ sx }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        p: "1em",
        borderRadius: "4px",
        width: "100%",
        bgcolor: "rgba(0, 0, 0, 0.12)",
        ...sx,
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab
          label="Labor"
          sx={{ textTransform: "capitalize" }}
          {...a11yProps(0)}
        />
        <Tab
          label="Paint"
          sx={{ textTransform: "capitalize" }}
          {...a11yProps(1)}
        />
        <Tab
          label="Travel/Accom"
          sx={{ textTransform: "capitalize" }}
          {...a11yProps(2)}
        />
        <Tab
          label="Access"
          sx={{ textTransform: "capitalize" }}
          {...a11yProps(2)}
        />
        <Tab
          label="Parking"
          sx={{ textTransform: "capitalize" }}
          {...a11yProps(2)}
        />
        <Tab
          label="External Trades"
          sx={{ textTransform: "capitalize" }}
          {...a11yProps(2)}
        />
        <Tab
          label="Equipment"
          sx={{ textTransform: "capitalize" }}
          {...a11yProps(2)}
        />
        <Tab
          label="3rd Party"
          sx={{ textTransform: "capitalize" }}
          {...a11yProps(2)}
        />
      </Tabs>

      <Grid container spacing={2}>
        <Grid size={8} sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ flexGrow: 1 }}>
            <CustomTabPanel value={value} index={0}>
              <LaborCalculator />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <PaintCalculator />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <TravelAccommodationCalculator />
            </CustomTabPanel>
          </Box>
          <BoldText1 text="Total Labour Cost:" redText="50,000.00" />
        </Grid>
        <Grid
          size={4}
          sx={{
            bgcolor: "white",
            boxShadow:
              "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
            borderRadius: "4px",
            p: ".33em 1em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Heading2 text="Summery - Part A" />
            <br />
            <Text1 text="Labour cost: AUD 5000.00" sx={{ mb: 2 }} />
            <Text1 text="Labour cost: AUD 5000.00" sx={{ mb: 2 }} />
            <Text1 text="Labour cost: AUD 5000.00" sx={{ mb: 2 }} />
            <Text1 text="Labour cost: AUD 5000.00" sx={{ mb: 2 }} />
            <Text1 text="Labour cost: AUD 5000.00" sx={{ mb: 2 }} />
            <Text1 text="Labour cost: AUD 5000.00" sx={{ mb: 2 }} />
          </Box>

          <BoldText1 text="Total Part Cost:" redText="50,000.00" />
        </Grid>
      </Grid>
    </Box>
  );
}
