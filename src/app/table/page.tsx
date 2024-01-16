"use client";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Box, Paper, Typography } from "@mui/material";
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
      <Grid container>
        <Grid xs={12}>
          <Paper
            square
            elevation={0}
            sx={{
              height: "50px",
              display: "flex",
              alignItems: "center",
              borderBottom: 1,
            }}
          >
            <Typography variant="h6" component="div">
              Person table
            </Typography>
          </Paper>
        </Grid>
        <Grid xs={8}>
          <Paper square elevation={0} sx={{ height: "100%", borderRight: 1 }}>
            <Table />
          </Paper>
        </Grid>
        <Grid xs={4}>
          <Paper square elevation={0} sx={{ height: "100%" }}>
            <MessageArea />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
