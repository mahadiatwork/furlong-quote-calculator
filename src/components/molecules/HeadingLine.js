import React from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Heading1 } from "../atoms/Heading1";
import { Text1 } from "../atoms/Text1";

export const HeadingLine = ({ sx,quoteData }) => {
  return (
    <Grid container spacing={2} sx={sx}>
      <Grid size={6} sx={{ display: "flex", gap: "2em",padding: "20px" }}>
        <Box>
          <Heading1 text={quoteData?.Name} />
        </Box>
        <Box>
          <Text1 text="ABCD Primary School" />
          <Text1 text="123 street, dhaka ctg." />
        </Box>
      </Grid>
      <Grid size={6}>
        <Heading1
          component="p"
          text="Total Quote Amount:"
          redText="AUD 78,000"
        />
      </Grid>
    </Grid>
  );
};
