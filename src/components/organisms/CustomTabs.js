import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { DenseTable } from "./DenseTable";
import { Heading2 } from "../atoms/Heading2";
import { Text1 } from "../atoms/Text1";
import { BoldText1 } from "../atoms/BoldText1";

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
          label="Item One"
          sx={{ textTransform: "capitalize" }}
          {...a11yProps(0)}
        />
        <Tab
          label="Item Two"
          sx={{ textTransform: "capitalize" }}
          {...a11yProps(1)}
        />
        <Tab
          label="Item Three"
          sx={{ textTransform: "capitalize" }}
          {...a11yProps(2)}
        />
      </Tabs>

      <Grid container spacing={2}>
        <Grid size={8} sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ flexGrow: 1 }}>
            <CustomTabPanel value={value} index={0}>
              <DenseTable />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              {/* <DenseTable /> */}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <DenseTable />
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
            <Text1 text="Labour cost: AUD 5000.00" />
            <Text1 text="Labour cost: AUD 5000.00" />
            <Text1 text="Labour cost: AUD 5000.00" />
            <Text1 text="Labour cost: AUD 5000.00" />
            <Text1 text="Labour cost: AUD 5000.00" />
            <Text1 text="Labour cost: AUD 5000.00" />
          </Box>
          <BoldText1 text="Total Part Cost:" redText="50,000.00" />
        </Grid>
      </Grid>
    </Box>
  );
}
