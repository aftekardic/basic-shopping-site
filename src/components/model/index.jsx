import React, { useEffect, useState } from "react";
import SearchBar from "../search-bar";
import axios from "axios";
import { Box, MenuItem, Checkbox, ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";
import { setModel } from "../../redux/stores/filter-store";

function Model() {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [checkedModels, setCheckedModels] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = (
        await axios.get("https://5fc9346b2af77700165ae514.mockapi.io/products")
      ).data;

      const modelValues = Object.values(data).map((item) => item.model);

      const uniqueModelValues = [...new Set(modelValues)].sort();
      setData(uniqueModelValues);
      setFilteredData(uniqueModelValues);
    };
    getData();
  }, []);

  const handleCheckboxChange = (model) => {
    if (checkedModels.includes(model)) {
      setCheckedModels(checkedModels.filter((item) => item !== model));
    } else {
      setCheckedModels([...checkedModels, model]);
    }
  };

  const handleSearch = (searchTerm) => {
    const filteredModels = data.filter((model) =>
      model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredModels);
  };

  useEffect(() => {
    dispatch(setModel(checkedModels));
  }, [checkedModels, dispatch]);

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
            checked={checkedModels.includes(item)}
            onChange={() => handleCheckboxChange(item)}
          />
          <ListItemText primary={item} />
        </MenuItem>
      ))}
    </Box>
  );
}

export default Model;
