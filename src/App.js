import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import Instructions from "./Instructions";
import LastNameField from "./LastNameField";

import "./styles.css";

export default function App() {
  return (
    <MuiThemeProvider>
      <div className="app">
        <Instructions />
        <Box px={2}>
          <form noValidate autoComplete="off">
            <LastNameField />
          </form>
          <Box pt={3}>
            <Button variant="contained" color="primary">
              Set Focus
            </Button>
          </Box>
        </Box>
      </div>
    </MuiThemeProvider>
  );
}
