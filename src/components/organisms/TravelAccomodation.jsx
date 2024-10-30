import React, { useState } from "react";
import { Box, Grid, TextField, Typography, Paper, Card } from "@mui/material";

const TravelAccommodationCalculator = () => {
  const [distance, setDistance] = useState(250);
  const [totalCost, setTotalCost] = useState(50000); // Example starting value

  // Calculated values based on input (these can be modified based on real formulas)
  const travelAllowance = 200;
  const twoWayAllowance = 400;
  const hoursAtSpeed = (distance / 75).toFixed(1);
  const timeCost = (hoursAtSpeed * 45).toFixed(1);
  const fuelAllowance = 200;
  const fuelKmRate = 0.65;
  const totalFuelCost = (fuelKmRate * distance * 2).toFixed(2);

  return (
    <Box
      sx={{
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "white",
        border: "1px solid #e0e0e0",
        margin: "10px 0px",
        maxWidth: "100%",
      }}
    >
      <Box sx={{ display: "flex", gap: 5, alignItems: "center" }}>
        <Typography variant="h6" fontWeight="bold">
          Distance from GPO (kms)
        </Typography>
        <TextField
          variant="outlined"
          label="Distance from GPO (kms)"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          type="number"
          size="small"
        />
      </Box>

      {/* Main Grid for Travel Allowance and Cost Table */}
      <Grid container spacing={2} mt={2}>
        {/* Travel Allowance and Fuel Allowance Section */}
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" gap={2}>
            {/* Travel Allowance Card */}
            <Card
              elevation={3}
              sx={{
                padding: 2,
                borderRadius: 3,
                // maxWidth: 400, // Fixed width for the card
                boxShadow: 3,
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Travel Allowance
              </Typography>
              <br />
              <Typography>Less 500km Allowance: {travelAllowance}</Typography>
              <Typography>2 Ways: {twoWayAllowance}</Typography>
              <Typography>Hrs at 75 km per hour: {hoursAtSpeed}</Typography>
              <Typography>
                Time cost per return trip (@$45): {timeCost}
              </Typography>
            </Card>

            {/* Fuel Allowance Card */}
            <Card
              elevation={3}
              sx={{
                padding: 2,
                borderRadius: 3,
                maxWidth: 400, // Fixed width for the card
                boxShadow: 3,
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Fuel Allowance
              </Typography>
              <br />
              <Typography>Less 500km Allowance: {fuelAllowance}</Typography>
              <Typography>2 Ways: {twoWayAllowance}</Typography>
              <Typography>
                *{fuelKmRate * 100}c per KM: {totalFuelCost}
              </Typography>
              <Typography>Fuel per return trip: {fuelAllowance}</Typography>
            </Card>
          </Box>
        </Grid>

        {/* Cost Table Section */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              borderRadius: 3,
              maxWidth: 600, // Fixed width for the cost table
              margin: "auto", // Center the card
              boxShadow: 3,
            }}
          >
            <Grid container spacing={1}>
              {/* Category: Painter */}
              <Grid item xs={12}>
                <Typography variant="h6" fontWeight="bold">
                  Painter
                </Typography>
              </Grid>

              {/* Cost Table for Painter */}
              <Grid item xs={6}>
                <Box
                  sx={{
                    minHeight: "40px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography>Project Hours</Typography>
                </Box>
                <Box
                  sx={{
                    minHeight: "40px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography>Travel Allowance - Start</Typography>
                </Box>
                <Box
                  sx={{
                    minHeight: "40px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography>Travel Allowance per 100 hrs</Typography>
                </Box>
                <Box
                  sx={{
                    minHeight: "40px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography>Accommodation (Per 9 hr)</Typography>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <TextField size="small" defaultValue="200" />
                <TextField size="small" defaultValue="1" />
                <TextField size="small" defaultValue="1" />
                <TextField size="small" defaultValue="21" />
              </Grid>
              <Grid item xs={2}>
                <TextField size="small" defaultValue="90" />
                <TextField size="small" defaultValue="575" />
                <TextField size="small" defaultValue="575" />
                <TextField size="small" defaultValue="200" />
              </Grid>
              <Grid item xs={2}>
                <TextField size="small" defaultValue="18000" />
                <TextField size="small" defaultValue="575" />
                <TextField size="small" defaultValue="575" />
                <TextField size="small" defaultValue="4244" />
              </Grid>
            </Grid>

            <Grid container spacing={1} mt={2}>
              {/* Category: Supervision */}
              <Grid item xs={12}>
                <Typography variant="h6" fontWeight="bold">
                  Supervision
                </Typography>
              </Grid>

              {/* Cost Table for Supervision */}
              <Grid item xs={6}>
                <Box
                  sx={{
                    minHeight: "40px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography>Travel</Typography>
                </Box>
                <Box
                  sx={{
                    minHeight: "40px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography>Accommodation</Typography>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <TextField size="small" defaultValue="2" />
                <TextField size="small" defaultValue="1" />
              </Grid>
              <Grid item xs={2}>
                <TextField size="small" defaultValue="200" />
                <TextField size="small" defaultValue="200" />
              </Grid>
              <Grid item xs={2}>
                <TextField size="small" defaultValue="200" />
                <TextField size="small" defaultValue="200" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* Total Travel and Accommodation */}
      <Box mt={3} textAlign="center">
        <Typography variant="h6">
          Total Travel and Accommodation:{" "}
          <span style={{ color: "red" }}>AUD {totalCost.toFixed(2)}</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default TravelAccommodationCalculator;
