import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const CutomButton = ({ children, ...rest }) => (
  <Button
    variant="contained"
    disableRipple
    sx={{
      textTransform: "capitalize",
      boxShadow: "none",
      color: "rgba(0, 0, 0, 0.26)",
      bgcolor: "rgba(0, 0, 0, 0.12)",
      "&.Mui-disabled": {
        background: "#00bd9c",
        color: "white",
      },
    }}
    {...rest}
  >
    {children}
  </Button>
);

export function Buttons({ sx }) {
  return (
    <Stack direction="row" spacing={2} sx={sx}>
      <CutomButton onClick={() => {}}>Part 1</CutomButton>
      <CutomButton onClick={() => {}} disabled={true}>
        Part 2
      </CutomButton>
      <CutomButton onClick={() => {}}>Part 3</CutomButton>
      <CutomButton onClick={() => {}}>Part 4</CutomButton>
      <CutomButton onClick={() => {}}>Part 5</CutomButton>
      <CutomButton onClick={() => {}}>Part 6</CutomButton>
    </Stack>
  );
}
