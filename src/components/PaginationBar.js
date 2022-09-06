import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ totalPages, setCurrentPage }) {
  const handleOnChange = (event, page) => {
    setCurrentPage(page);
    console.log(event, page);
  };
  return (
    <Stack alignItems="center" spacing={2} mt={2}>
      <Pagination
        count={totalPages}
        color="secondary"
        onChange={handleOnChange}
      />
    </Stack>
  );
}
