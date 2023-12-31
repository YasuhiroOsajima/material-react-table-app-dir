"use client";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { HeaderTitleAtom } from "@/state/HeaderTitleAtom";
import Table from "@/components/tablePage/Table";
import MessageArea from "@/components/tablePage/MessageArea";

export default function TablePage() {
  const [_, setTitle] = useRecoilState(HeaderTitleAtom);

  useEffect(() => {
    setTitle("Table");
  }, [setTitle]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Person table
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={8}>
          <Card sx={{ height: "100%" }}>
            <Table />
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card sx={{ height: "100%" }}>
            <MessageArea />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
