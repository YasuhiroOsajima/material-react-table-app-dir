"use client";

import { useRecoilState } from "recoil";
import {
  createTheme,
  AppBar,
  Drawer,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import DrawerContent from "@/components/share/Header/DrawerContent";
import LogoutButton from "@/components/share/Header/LogoutButton";
import { DrawerOpenAtom } from "@/state/DrawerOpenAtom";
import { HeaderTitleAtom } from "@/state/HeaderTitleAtom";

export default function Header() {
  const defaultTheme = createTheme();

  const [opened, setOpened] = useRecoilState(DrawerOpenAtom);
  const [title, _] = useRecoilState(HeaderTitleAtom);

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar position="static">
        <Toolbar>
          <Drawer anchor="left" open={opened} onClose={() => setOpened(false)}>
            <DrawerContent />
          </Drawer>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpened(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6">{title}</Typography>

          <div style={{ flexGrow: 1 }}></div>

          <LogoutButton />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
