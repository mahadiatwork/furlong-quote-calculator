import React from "react";
import Typography from "@mui/material/Typography";

export const Heading2 = ({ text, redText, component = "h2", sx, ...rest }) => {
  const heading2Style = { fontSize: "20px", fontWeight: 600 };
  return (
    <Typography component={component} sx={heading2Style} {...rest}>
      {text}
      {redText ? (
        <Typography component="span" sx={{ ...heading2Style, color: "red" }}>
          {" "}
          {redText}
        </Typography>
      ) : null}
    </Typography>
  );
};
