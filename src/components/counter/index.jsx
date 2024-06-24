import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCardItems } from "../../redux/stores/add-items-store";

const CounterComponent = ({ item }) => {
  const dispatch = useDispatch();
  const savedItems = useSelector((state) => state.cardItems.cardItems);

  const handleIncrement = (id) => {
    const selectedItem = savedItems.find((item) => item.id === id);

    if (selectedItem) {
      dispatch(setCardItems([...savedItems, selectedItem]));
    }
  };

  const handleDecrement = (id) => {
    const selectedItemIndex = savedItems.findIndex((item) => item.id === id);

    if (selectedItemIndex !== -1) {
      const filteredItems = [
        ...savedItems.slice(0, selectedItemIndex),
        ...savedItems.slice(selectedItemIndex + 1),
      ];

      dispatch(setCardItems(filteredItems));
    }
  };

  return (
    <Box
      style={{
        display: "flex",
        height: "min-content",
      }}
    >
      <Button
        sx={{
          borderRadius: "8px 0 0 8px",
          width: "36px !important",
          minWidth: "0px",
        }}
        size="small"
        style={{ backgroundColor: "#C0C0C0" }}
        onClick={() => {
          handleDecrement(item.id);
        }}
      >
        -
      </Button>

      <Typography
        style={{
          backgroundColor: "#1769aa",
          color: "white",
          width: "30px",
          textAlign: "center",
        }}
      >
        {item.count}
      </Typography>
      <Button
        sx={{
          borderRadius: "0 8px 8px 0",
          width: "36px !important",
          minWidth: "0px",
        }}
        style={{ backgroundColor: "#C0C0C0" }}
        size="small"
        onClick={() => {
          handleIncrement(item.id);
        }}
      >
        +
      </Button>
    </Box>
  );
};

export default CounterComponent;
