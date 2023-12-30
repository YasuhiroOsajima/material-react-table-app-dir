"use client";

import { Card, CardContent, Typography } from "@mui/material";

export default function MessageArea() {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="h6" component="div">
          MessageArea
        </Typography>
        <br />

        <Typography variant="body2">
          hogehoge
          <br />
          fugafuga
        </Typography>
      </CardContent>
    </Card>
  );
}
