import { Box, Typography, Button } from "@mui/material";
import React from "react";

function TotalBox({ totalPrice }) {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        maxHeight: "200px",
        overflow: "auto",
        position: "relative",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
        padding: 4,
        gap: "12px",
        minWidth: "240px",
      }}
    >
      <Typography>
        Total Price: <b style={{ color: "blue" }}>{totalPrice} ₺</b>
      </Typography>
      <Button size="small" color="primary" variant="contained" fullWidth>
        Checkout
      </Button>
    </Box>
  );
}

export default TotalBox;
