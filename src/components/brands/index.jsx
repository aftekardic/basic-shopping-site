import React, { useEffect, useState } from "react";
import SearchBar from "../search-bar";
import axios from "axios";
import { Box, MenuItem, Checkbox, ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";
import { setBrands } from "../../redux/stores/filter-store";

function Brands() {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [checkedBrands, setCheckedBrands] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://5fc9346b2af77700165ae514.mockapi.io/products"
      );
      const brandValues = response.data.map((item) => item.brand);
      const uniqueBrandValues = [...new Set(brandValues)].sort();
      setData(uniqueBrandValues);
      setFilteredData(uniqueBrandValues);
    };
    getData();
  }, []);

  const handleCheckboxChange = (brand) => {
    if (checkedBrands.includes(brand)) {
      setCheckedBrands(checkedBrands.filter((item) => item !== brand));
    } else {
      setCheckedBrands([...checkedBrands, brand]);
    }
  };

  const handleSearch = (searchTerm) => {
    const filteredBrands = data.filter((brand) =>
      brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredBrands);
  };

  useEffect(() => {
    dispatch(setBrands(checkedBrands));
  }, [checkedBrands, dispatch]);

  return (
    <Box
      style={{
        border: "1px solid black",
        maxHeight: "200px",
        overflow: "auto",
        position: "relative",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      >
        <SearchBar onSearch={handleSearch} />
      </div>

      {filteredData?.map((item, index) => (
        <MenuItem key={index}>
          <Checkbox
            checked={checkedBrands.includes(item)}
            onChange={() => handleCheckboxChange(item)}
          />
          <ListItemText primary={item} />
        </MenuItem>
      ))}
    </Box>
  );
}

export default Brands;
