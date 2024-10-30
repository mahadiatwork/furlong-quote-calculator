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
import { useEffect, useState } from "react";


const ZOHO = window.ZOHO;

const parentContainerStyle = {
  minHeight: "calc(100vh - 1px)",
  borderTop: "1px solid #BABABA",
  width: "100vw",
  p: "1em",
  // display: "flex",
  // flexDireection: "column",
};

function App() {
  const [zohoLoaded, setZohoLoaded] = useState(false);
  const [quoteData, setQuoteData] = useState(null)

  useEffect(() => {

    ZOHO.embeddedApp.on("PageLoad", async function (data) {
      // console.log(data.EntityId);

      await ZOHO.CRM.API.getRecord({
        Entity: data?.Entity,
        RecordID: data?.EntityId,
      }).then(async function (data) {

        setQuoteData(data.data[0])

        await ZOHO.CRM.UI.Resize({ height: "600", width: "1200" }).then(function (data) {
          console.log(data);
        });
      });
    });

    ZOHO.embeddedApp.init().then(() => {
      // setZohoLoaded(true);
    });
  }, []);


  console.log({quoteData})

  return (
    <Box sx={parentContainerStyle}>
      <HeadingLine quoteData={quoteData} />
      <Buttons sx={{ mb: "1em", mt: ".5em" }} />
      <CustomTabs />
    </Box>
  );
}

export default App;
