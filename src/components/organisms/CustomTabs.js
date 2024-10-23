import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { DenseTable } from "./DenseTable";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
    <Box sx={{ width: "100%", bgcolor: "rgba(0, 0, 0, 0.12)", ...sx }}>
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
        <Grid size={8}>
          <CustomTabPanel value={value} index={0}>
            <DenseTable />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {/* <DenseTable /> */}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <DenseTable />
          </CustomTabPanel>
        </Grid>
        <Grid size={4}></Grid>
      </Grid>
    </Box>
  );
}
