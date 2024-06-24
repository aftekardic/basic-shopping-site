import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { setCardItems } from "../../redux/stores/add-items-store";
import { setDetail } from "../../redux/stores/detail-store";
import { useSelector, useDispatch } from "react-redux";

function ItemBox({ item }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cardItems.cardItems);
  const handleClick = (item) => {
    dispatch(setCardItems([...items, item]));
  };

  const handleSaveAndRedirect = (item) => {
    dispatch(setDetail(item));
    return window.location.assign("detail");
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardActionArea
        onClick={() => {
          handleSaveAndRedirect(item);
        }}
      >
        <CardMedia component="img" height="125" image={item.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.price} ₺
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.name}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => {
            handleClick(item);
          }}
          fullWidth
        >
          Add to Card
        </Button>
      </CardActions>
    </Card>
  );
}

export default ItemBox;
