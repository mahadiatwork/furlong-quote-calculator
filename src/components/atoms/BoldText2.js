import React from "react";
import Typography from "@mui/material/Typography";

export const BoldText2 = ({ text, redText, sx, ...rest }) => {
  const boldText2Style = { fontSize: "14px", fontWeight: 600 };
  return (
    <Typography sx={boldText2Style} {...rest}>
      {text}
      {redText ? (
        <Typography component="span" sx={{ ...boldText2Style, color: "red" }}>
          {" "}
          {redText}
        </Typography>
      ) : null}
    </Typography>
  );
};
