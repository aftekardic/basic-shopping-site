import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ShowItems from "../../components/show-items";
import { setCardItems } from "../../redux/stores/add-items-store";

function Detail() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cardItems.cardItems);
  const detailItem = useSelector((state) => state.detail.detail);

  const handleClick = () => {
    dispatch(setCardItems([...items, detailItem]));
  };

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid item xs={12} sm={6} md={8}>
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "column", lg: "row" },
          }}
        >
          <CardMedia
            component="img"
            height="400"
            image={detailItem.image}
            sx={{
              flex: "1",
              objectFit: "cover",
              width: "auto", // Ekran küçüldükçe görsel maksimum genişliği korur
              height: "auto", // Ekran genişledikçe görsel yüksekliği korunur
              transition: "all 0.3s ease", // Animasyon ekledik
            }}
          />
          <CardContent
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              mt: { xs: 2, md: 0 },
              minWidth: { xs: "100%", sm: "200px" }, // minWidth ekledik
            }}
          >
            <Typography variant="h5">{detailItem.name}</Typography>
            <Typography variant="body2" color="blue" component="div">
              {detailItem.price} ₺
            </Typography>
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={handleClick}
              fullWidth
              sx={{ mt: 2 }}
            >
              Add to Card
            </Button>
            <Typography
              variant="body2"
              color="text.secondary"
              component="div"
              sx={{ mt: 2, minHeight: "100px" }}
            >
              {detailItem.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <ShowItems />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Detail;
