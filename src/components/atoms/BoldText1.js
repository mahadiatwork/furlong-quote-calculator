import React from "react";
import Typography from "@mui/material/Typography";

export const BoldText1 = ({ text, redText, sx, ...rest }) => {
  const boldText1Style = { fontSize: "18px", fontWeight: 600 };
  return (
    <Typography sx={boldText1Style} {...rest}>
      {text}
      {redText ? (
        <Typography component="span" sx={{ ...boldText1Style, color: "red" }}>
          {" "}
          {redText}
        </Typography>
      ) : null}
    </Typography>
  );
};
