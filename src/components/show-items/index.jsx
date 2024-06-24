import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CounterComponent from "../counter";
import TotalBox from "../total-box";
import { setTotalPrice } from "../../redux/stores/total-price-store";

function ShowItems() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cardItems.cardItems);
  const totalPrice = useSelector((state) => state.totalPrice.totalPrice);
  console.log(totalPrice);
  const itemDetails = items.reduce((result, item) => {
    const { id, name, price } = item;

    if (!result[id]) {
      result[id] = {
        id,
        name,
        count: 1,
        totalPrice: parseFloat(price),
      };
    } else {
      result[id].count += 1;
      result[id].totalPrice += parseFloat(price);
    }

    return result;
  }, {});

  const resultArray = Object.values(itemDetails);
  useEffect(() => {
    dispatch(
      setTotalPrice(
        resultArray.reduce((total, item) => total + item.totalPrice, 0)
      )
    );
  }, [resultArray]);

  return (
    <>
      <Box
        style={{
          border: "1px solid black",
          maxHeight: "500px",
          overflow: "auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          padding: 8,
        }}
      >
        {resultArray.length > 0 ? (
          resultArray.map((item, index) => (
            <Box
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <Typography>{item.name}</Typography>
                <Typography color={"blue"}>
                  {item.totalPrice.toFixed(2)} ₺
                </Typography>
              </Box>
              <CounterComponent item={item} />
            </Box>
          ))
        ) : (
          <Typography variant="body2" color={"text.secondary"}>
            There is no product in box.
          </Typography>
        )}
      </Box>
      <TotalBox
        totalPrice={resultArray.reduce(
          (total, item) => total + item.totalPrice,
          0
        )}
      />
    </>
  );
}

export default ShowItems;
