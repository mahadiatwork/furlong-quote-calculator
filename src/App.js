import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Heading1 } from "./components/atoms/Heading1";
import { Heading2 } from "./components/atoms/Heading2";
import { BoldText1 } from "./components/atoms/BoldText1";
import { BoldText2 } from "./components/atoms/BoldText2";
import { Text1 } from "./components/atoms/Text1";
import { Line1 } from "./components/molecules/Line1";
import { Buttons } from "./components/molecules/Buttons";

function App() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 1px)",
        borderTop: "1px solid #BABABA",
        width: "100vw",
        p: "1em",
      }}
    >
      <Line1 />
      <Buttons />
    </Box>
  );
}

export default App;
