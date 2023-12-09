import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const Pagination = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} color="#ad9859" />
    </Stack>
  );
};
