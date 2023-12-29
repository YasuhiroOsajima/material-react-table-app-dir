"use client";

import Link from "next/link";
import { useRecoilState } from "recoil";
import { List, ListItem, ListItemText } from "@mui/material";

import { DrawerOpenAtom } from "@/state/DrawerOpenAtom";

export default function DrawerContent() {
  const [_, setOpened] = useRecoilState(DrawerOpenAtom);

  return (
    <div
      role="presentation"
      onClick={() => setOpened(false)}
      onKeyDown={() => setOpened(false)}
    >
      <List>
        <ListItem>
          <Link href="/" onClick={() => setOpened(false)}>
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/table" onClick={() => setOpened(false)}>
            <ListItemText primary="Table" />
          </Link>
        </ListItem>
      </List>
    </div>
  );
}
