"use client";

import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { Box, Button } from "@mui/material";

import { Person as PersonDataType } from "@/types/Person";

//import dummyPeopleData from "@/dummy_people.json";

const apiserver = process.env.NEXT_PUBLIC_API_SERVER;

interface Person {
  name: string;
  age: number;
}

export default function Table() {
  const [data, setData] = useState<Person[]>([]);

  const loadPeopleData = async () => {
    let peopleData: Person[] = [];

    //for (const personData of dummyPeopleData) {
    //  const person: PersonDataType = personData;
    //  peopleData.push({ name: person.name, age: person.age });
    //}

    try {
      const response = await axios({
        url: `${apiserver}/api/users`,
        method: "get",
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      for (const personData of response.data.users) {
        const person: PersonDataType = personData;
        peopleData.push({ name: person.name, age: person.age });
      }
    } catch (error) {
      console.log(error);
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
      <Box sx={{ display: "flex", gap: "1rem", p: "4px" }}>
        <Button
          color="secondary"
          onClick={() => {
            alert("Create New Account");
          }}
          variant="contained"
        >
          Create Account
        </Button>
        <Button
          color="error"
          disabled={!table.getIsSomeRowsSelected()}
          onClick={async () => {
            const selected = table.getSelectedRowModel();
            let errors: string[] = [];
            for (let i = 0; i < selected.rows.length; i++) {
              const username = selected.rows[i].original.name;
              console.log(username);

              try {
                await axios({
                  url: `${apiserver}/api/users/${username}`,
                  method: "delete",
                  withCredentials: true,
                });
              } catch (error) {
                errors.push(username);
              }
            }

            if (errors.length > 0) {
              alert(`Failed to delete ${errors.join(", ")}`);
              return;
            }

            alert("Delete Selected Accounts");
          }}
          variant="contained"
        >
          Delete Selected Accounts
        </Button>
      </Box>
    ),
  });

  return <MaterialReactTable table={table} />;
}
