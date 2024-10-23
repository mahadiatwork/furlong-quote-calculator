import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Heading1 } from "./components/atoms/Heading1";
import { Heading2 } from "./components/atoms/Heading2";
import { BoldText1 } from "./components/atoms/BoldText1";
import { BoldText2 } from "./components/atoms/BoldText2";
import { Text1 } from "./components/atoms/Text1";
import { HeadingLine } from "./components/molecules/HeadingLine";
import { Buttons } from "./components/molecules/Buttons";
import { CustomTabs } from "./components/organisms/CustomTabs";

const parentContainerStyle = {
  minHeight: "calc(100vh - 1px)",
  borderTop: "1px solid #BABABA",
  width: "100vw",
  p: "1em",
  // display: "flex",
  // flexDireection: "column",
};

function App() {
  return (
    <Box sx={parentContainerStyle}>
      <HeadingLine />
      <Buttons sx={{ mb: "1em", mt: ".5em" }} />
      <CustomTabs />
    </Box>
  );
}

export default App;
