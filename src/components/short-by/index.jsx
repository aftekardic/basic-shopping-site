import React, { useEffect, useState } from "react";
import { MenuItem, Checkbox, ListItemText, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSortBy } from "../../redux/stores/filter-store";

function ShortBy() {
  const dispatch = useDispatch();
  const [sortOptions, setSortOptions] = useState({
    oldToNew: true,
    newToOld: false,
    priceHighToLow: false,
    priceLowToHigh: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setSortOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  };

  const checkDisable = () => {
    if (
      !sortOptions.oldToNew &&
      !sortOptions.newToOld &&
      !sortOptions.priceHighToLow &&
      !sortOptions.priceLowToHigh
    ) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    dispatch(setSortBy(sortOptions));
  }, [sortOptions, dispatch]);

  return (
    <Box
      style={{
        border: "1px solid black",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
      }}
    >
      <MenuItem value="oldToNew">
        <Checkbox
          checked={sortOptions.oldToNew}
          onClick={handleChange}
          name="oldToNew"
          disabled={checkDisable() && !sortOptions.oldToNew}
        />
        <ListItemText primary="Old to New" />
      </MenuItem>
      <MenuItem value="newToOld">
        <Checkbox
          checked={sortOptions.newToOld}
          onClick={handleChange}
          name="newToOld"
          disabled={checkDisable() && !sortOptions.newToOld}
        />
        <ListItemText primary="New to Old" />
      </MenuItem>
      <MenuItem value="priceHighToLow">
        <Checkbox
          checked={sortOptions.priceHighToLow}
          onClick={handleChange}
          name="priceHighToLow"
          disabled={checkDisable() && !sortOptions.priceHighToLow}
        />
        <ListItemText primary="Price High to Low" />
      </MenuItem>
      <MenuItem value="priceLowToHigh">
        <Checkbox
          checked={sortOptions.priceLowToHigh}
          onClick={handleChange}
          name="priceLowToHigh"
          disabled={checkDisable() && !sortOptions.priceLowToHigh}
        />
        <ListItemText primary="Price Low to High" />
      </MenuItem>
    </Box>
  );
}

export default ShortBy;
