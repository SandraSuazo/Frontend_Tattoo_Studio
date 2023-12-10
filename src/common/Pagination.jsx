import React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { Box } from "@mui/material";

export const CustomPagination = ({ count, page, onChange }) => {
  return (
    <Box display="flex" justifyContent="center" my={2}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        renderItem={(item) => (
          <PaginationItem
            component="div"
            {...item}
            style={{
              background: "#ad9859",
              borderRadius: "50%",
              margin: "0 2px",
            }}
          />
        )}
      />
    </Box>
  );
};
