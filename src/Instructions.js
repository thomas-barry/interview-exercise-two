import React from "react";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./styles.css";

const Instructions = () => (
  <Box py={2}>
    <Card className="instructions" raised={true}>
      <CardContent>
        <Typography align="left">
          <p>
            Make the appropriate updates necessary to place focus in the last
            name field when the "Set Focus" button is clicked.
          </p>
          <p>
            Note: the Material-UI TextField component accepts an "inputRef"
            property.
          </p>
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default Instructions;
