"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { Button } from "@mui/material";

import { Person as PersonDataType } from "@/types/Person";

import dummyPeopleData from "@/dummy_people.json";

interface Person {
  name: string;
  age: number;
}

export default function Table() {
  const [data, setData] = useState<Person[]>([]);

  const loadPeopleData = async () => {
    let peopleData: Person[] = [];

    for (const personData of dummyPeopleData) {
      const person: PersonDataType = personData;
      peopleData.push({ name: person.name, age: person.age });
    }

    return peopleData;
  };

  useEffect(() => {
    loadPeopleData().then((peopleData) => {
      setData(peopleData);
    });
  }, []);

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        muiTableHeadCellProps: { sx: { color: "green" } },
        enableColumnActions: false,
        size: 400,
      },
      {
        accessorFn: (originalRow) => originalRow.age,
        id: "age",
        header: "Age",
        Header: <i style={{ color: "red" }}>Age</i>,
        enableColumnActions: false,
        size: 500,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    enableColumnOrdering: false,
    enableGlobalFilter: true,
    enableDensityToggle: false,
    enableColumnFilters: false,
    enableColumnDragging: false,
    enableHiding: false,
    enableFullScreenToggle: false,
    enableColumnResizing: true,
    initialState: {
      showGlobalFilter: true,
    },
    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        onClick={() => {
          const rowSelection = table.getState().rowSelection; //read state
          const selectedRows = table.getSelectedRowModel().rows; //or read entire rows

          console.log(rowSelection);
          console.log(selectedRows);
        }}
      >
        Download Selected Users
      </Button>
    ),
  });

  return <MaterialReactTable table={table} />;
}
