import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ totalPages, handlePagination }) {
  return (
    <Stack alignItems="center" spacing={2} mt={2}>
      <Pagination
        count={totalPages}
        color="secondary"
        onClick={handlePagination}
      />
    </Stack>
  );
}
