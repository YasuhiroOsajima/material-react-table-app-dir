"use client";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  createTheme,
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";

import { HeaderTitleAtom } from "@/state/HeaderTitleAtom";

export default function App() {
  const defaultTheme = createTheme();

  const [_, setTitle] = useRecoilState(HeaderTitleAtom);

  useEffect(() => {
    setTitle("App");
  }, [setTitle]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            App page
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
