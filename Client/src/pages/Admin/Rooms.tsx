import React from "react";

// Material UI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// Data Tables
import { DataGrid, GridCellParams } from "@mui/x-data-grid";

// Components
import DataGridInfoAction from "@Components/DataGrid/DataGridInfoAction";
import DataGridAction from "@Components/DataGrid/DataGridAction";
import DataGridToolbar from "@Components/DataGrid/DataGridToolbar";
import DataGridPagination from "@Components/DataGrid/DataGridPagination";

// ======================================================================================

const Rooms = () => {
  const columns = [
    {
      field: "idRow",
      headerName: "ID",
      flex: 0.3,
    },
    {
      field: "talentName",
      headerName: "Name",
      flex: 1.3,
      renderCell: ({ row, value }: GridCellParams) => {
        return (
          <>
            {row.talentName === "" ? (
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                style={{ borderRadius: 20, color: "#ec691f", borderColor: "#ec691f" }}
              >
                Open Position
              </Button>
            ) : (
              value
            )}
          </>
        );
      },
    },
    {
      field: "talentGrade",
      headerName: "Role",
      flex: 0.8,
      renderCell: ({ row, value }: GridCellParams) => {
        return (
          <>
            {row.talentName === "" ? (
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                style={{ borderRadius: 20, color: "#ec691f", borderColor: "#ec691f" }}
              >
                Open Position
              </Button>
            ) : (
              value
            )}
          </>
        );
      },
    },
    {
      field: "officeCity",
      headerName: "City",
      flex: 0.5,
    },
    {
      field: "officePostalCode",
      headerName: "Postal Code",
      flex: 0.5,
    },
    {
      field: "jobManagerName",
      headerName: "Manager",
      flex: 1,
    },
    {
      field: "clientName",
      headerName: "Client",
      flex: 0.5,
    },
    {
      field: "industry",
      headerName: "Industry",
      flex: 0.8,
    },
    {
      field: "totalHours",
      headerName: "Hours",
      flex: 0.4,
    },
    {
      field: "startDate",
      headerName: "Start Date",
      flex: 0.9,
    },
    {
      field: "endDate",
      headerName: "End Date",
      flex: 0.9,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 0.6,
      renderCell: (params: GridCellParams) => {
        return <DataGridAction path={params.row.id} />;
      },
    },
  ];

  const rows = [
    {
      id: "1",
    },
  ];

  return (
    <Box style={{ height: 680, width: "100%" }}>
      <DataGridInfoAction title="Rooms" />

      <DataGrid
        columns={columns}
        rows={rows}
        components={{ Toolbar: DataGridToolbar, Pagination: DataGridPagination }}
      />
    </Box>
  );
};

export default Rooms;
