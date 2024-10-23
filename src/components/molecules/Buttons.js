import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const CutomButton = ({ children, ...rest }) => (
  <Button
    variant="contained"
    disableRipple
    sx={{
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

export function Buttons() {
  return (
    <Stack direction="row" spacing={2}>
      <CutomButton onClick={() => {}}>Contained</CutomButton>
      <CutomButton onClick={() => {}} disabled={true}>
        Disabled
      </CutomButton>
      <CutomButton onClick={() => {}}>Link</CutomButton>
      <CutomButton onClick={() => {}}>Link</CutomButton>
      <CutomButton onClick={() => {}}>Link</CutomButton>
      <CutomButton onClick={() => {}}>Link</CutomButton>
    </Stack>
  );
}
