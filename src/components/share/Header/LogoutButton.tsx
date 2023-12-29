"use client";

import axios from "axios";
import { Button } from "@mui/material";
import { Logout as LogoutIcon } from "@mui/icons-material";

const authServer = process.env.NEXT_PUBLIC_AUTH_SERVER;
const webserver = process.env.NEXT_PUBLIC_WEB_SERVER;

export default function LogoutButton() {
  const handleLogoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios({
        url: `${authServer}/api/admin/logout`,
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      console.log(response);
      window.location.href = `${webserver}/login/index.html`;
    } catch (error) {
      console.log(error);
      alert("ログアウトに失敗しました");
    }
  };

  return (
    <Button
      variant="contained"
      type="submit"
      startIcon={<LogoutIcon />}
      sx={{ mt: 3, mb: 2 }}
      onClick={handleLogoutSubmit}
    >
      ログアウト
    </Button>
  );
}
