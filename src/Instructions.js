import React from "react";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Instructions = () => (
  <Box pb={2}>
    <Card>
      <CardContent>
        <Typography align="left">
          Make the appropriate updates necessary to place focus in the last name
          field when the "Set Focus" button is clicked.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default Instructions;
