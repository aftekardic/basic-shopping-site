import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Box, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ItemBox from "../../components/item-box";
import ShortBy from "../../components/short-by";
import Brands from "../../components/brands";
import Model from "../../components/model";
import { useSelector } from "react-redux";
import ShowItems from "../../components/show-items";

const itemsPerPage = 12;

function Home() {
  const filterParams = useSelector((state) => state.filter);

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(null);

  let searchTerm = useSelector((state) => state.searchTerm.searchTerm);

  useEffect(() => {
    const getData = async () => {
      const data = (
        await axios.get("https://5fc9346b2af77700165ae514.mockapi.io/products")
      ).data;

      let filteredData = filterAndSortData(data, filterParams);
      if (searchTerm !== null) {
        filteredData = filteredData.filter((data) =>
          data.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setData(filteredData);
    };
    getData();
  }, [filterParams, searchTerm]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = data?.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "24px",
        p: 2,
      }}
    >
      <Box
        sx={{
          flex: { xs: "1", md: "0.5" },
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Typography color={"#c0c0c0"}>Sort By</Typography>
        <ShortBy />
        <Typography color={"#c0c0c0"}>Brands</Typography>
        <Brands />
        <Typography color={"#c0c0c0"}>Models</Typography>
        <Model />
      </Box>

      <Box
        sx={{
          flex: { xs: "1", md: "1" },
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Grid container spacing={4}>
          {visibleItems?.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <ItemBox item={item} />
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={Math.ceil(data?.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}
        />
      </Box>
      <Box
        sx={{
          flex: { xs: "1", md: "0.5" },
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <ShowItems />
      </Box>
    </Box>
  );
}

export default Home;

const filterAndSortData = (data, filters) => {
  const { sortBy, brands, model } = filters;

  let filteredData = data;
  if (brands?.length > 0) {
    filteredData = filteredData.filter((item) => brands.includes(item.brand));
  }
  if (model?.length > 0) {
    filteredData = filteredData.filter((item) => model.includes(item.model));
  }

  if (sortBy.oldToNew || sortBy.newToOld) {
    filteredData.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortBy.oldToNew ? dateA - dateB : dateB - dateA;
    });
  } else if (sortBy.priceHighToLow || sortBy.priceLowToHigh) {
    filteredData.sort((a, b) => {
      return sortBy.priceHighToLow ? b.price - a.price : a.price - b.price;
    });
  }

  return filteredData;
};
