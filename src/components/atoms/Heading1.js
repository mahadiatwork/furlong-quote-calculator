import React from "react";
import Typography from "@mui/material/Typography";

export const Heading1 = ({ text, redText, component = "h1", sx, ...rest }) => {
  const heading1Style = { fontSize: "28px", fontWeight: 600 };
  return (
    <Typography component={component} sx={heading1Style} {...rest}>
      {text}
      {redText ? (
        <Typography component="span" sx={{ ...heading1Style, color: "red" }}>
          {" "}
          {redText}
        </Typography>
      ) : null}
    </Typography>
  );
};
