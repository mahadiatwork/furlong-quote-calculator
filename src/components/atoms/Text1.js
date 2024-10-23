import React from "react";
import Typography from "@mui/material/Typography";

export const Text1 = ({ text, redText, sx, ...rest }) => {
  const Text1Style = { fontSize: "14px", fontWeight: 400 };
  return (
    <Typography sx={Text1Style} {...rest}>
      {text}
      {redText ? (
        <Typography component="span" sx={{ ...Text1Style, color: "red" }}>
          {" "}
          {redText}
        </Typography>
      ) : null}
    </Typography>
  );
};
