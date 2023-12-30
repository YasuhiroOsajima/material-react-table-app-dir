"use client";

import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { HeaderTitleAtom } from "@/state/HeaderTitleAtom";
import Table from "@/components/tablePage/Table";

export default function TablePage() {
  const [_, setTitle] = useRecoilState(HeaderTitleAtom);

  useEffect(() => {
    setTitle("Table");
  }, [setTitle]);

  return <Table />;
}
