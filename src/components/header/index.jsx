import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchBar from "../search-bar";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../redux/stores/global-search-store";

function HeaderBar() {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.totalPrice.totalPrice);
  const handleSearch = (searchTerm) => {
    dispatch(setSearchTerm(searchTerm));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={12} md={4}>
              <Typography variant="h6" noWrap>
                Your Site Name
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <SearchBar onSearch={handleSearch} />
            </Grid>
            <Grid
              item
              container
              xs={12}
              md={4}
              spacing={2}
              justifyContent="flex-end"
              alignItems="center"
            >
              <Hidden mdDown>
                <Grid item>
                  <Box
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <WorkOutlineIcon />
                    <Typography variant="body2">
                      {totalPrice.toFixed(2)}₺
                    </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <PersonOutlineIcon />
                    <Typography variant="body2">Ali Furkan</Typography>
                  </Box>
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Grid item>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 12,
                    }}
                  >
                    <WorkOutlineIcon />
                    <Typography variant="body2">
                      {totalPrice.toFixed(2)}₺
                    </Typography>
                    <PersonOutlineIcon />
                    <Typography variant="body2">Ali Furkan</Typography>
                  </Box>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HeaderBar;
