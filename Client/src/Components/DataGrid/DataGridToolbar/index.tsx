import React from "react";

// Material-UI
import Box from "@mui/material/Box";

// Material-UI
import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarDensitySelector,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";

// ========================================================================================================

const DataGridToolbar = () => (
  <GridToolbarContainer style={{ padding: "0px 30px", height: 100, display: "flex", justifyContent: "space-between" }}>
    <Box>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </Box>

    <GridToolbarQuickFilter />
  </GridToolbarContainer>
);

export default DataGridToolbar;
