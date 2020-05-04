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
          <p>
            In this example, the SupportingText component renders its children
            when the input field has focus.
          </p>
          <h4>Part One</h4>
          <p>
            Update the SupportingText component so its content becomes visible
            when the input field receives focus, and remains visible after the
            input field loses focus.
          </p>
          <h4>Part Two</h4>
          <p>
            Update the SupportingText component so that its content fades into
            view.
          </p>
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default Instructions;
