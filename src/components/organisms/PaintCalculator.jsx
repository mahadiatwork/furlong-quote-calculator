import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Box,
  Select,
  MenuItem,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  TableContainer,
  Paper,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { FaEdit, FaTrash, FaSave, FaPlus } from "react-icons/fa";
import { useTheme } from '@mui/material/styles';

const PaintCalculator = () => {
  const [paintData, setPaintData] = useState([
    {
      barcode: "9315513043781",
      description: "Expressions Ceiling White",
      productRange: "Expressions",
      qty: 1,
      buyingRateExcl: 24.93,
      buyingRateIncl: 24.93,
      ltrKgPrice: 24.93,
      category: "White",
      brand: "Haymes",
      isEditing: false,
    },
  ]);

  const [haymesSelected, setHaymesSelected] = useState(false);
  const [duluxSelected, setDuluxSelected] = useState(false);

  const productRangeOptions = ["Expressions", "Deluxe", "Premium", "Economy"];
  const categoryOptions = ["White", "Color", "Gloss", "Matte"];
  const brandOptions = ["Haymes", "Dulux"];

  // Get theme and useMediaQuery to make the table more responsive
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // Function to toggle edit mode
  const toggleEditMode = (index) => {
    const newPaintData = paintData.map((row, i) => ({
      ...row,
      isEditing: i === index ? !row.isEditing : row.isEditing,
    }));
    setPaintData(newPaintData);
  };

  // Function to handle input changes
  const handleInputChange = (index, field, value) => {
    const newPaintData = [...paintData];
    newPaintData[index][field] = field === "qty" || field.includes("Rate") || field === "ltrKgPrice" ? Number(value) : value;
    setPaintData(newPaintData);
  };

  // Function to save the edited row
  const saveRow = (index) => {
    const newPaintData = paintData.map((row, i) => ({
      ...row,
      isEditing: i === index ? false : row.isEditing,
    }));
    setPaintData(newPaintData);
  };

  // Function to delete a row
  const handleDelete = (index) => {
    const newPaintData = paintData.filter((_, i) => i !== index);
    setPaintData(newPaintData);
  };

  // Function to add a new row
  const addRow = () => {
    const newRow = {
      barcode: "",
      description: "New Paint",
      productRange: "New Range",
      qty: 0,
      buyingRateExcl: 0,
      buyingRateIncl: 0,
      ltrKgPrice: 0,
      category: "New Category",
      brand: "",
      isEditing: true,
    };
    setPaintData([...paintData, newRow]);
  };

  // Function to filter based on Haymes and Dulux checkboxes
  const filteredPaintData = paintData.filter((row) => {
    if (haymesSelected && row.brand === "Haymes") return true;
    if (duluxSelected && row.brand === "Dulux") return true;
    return !haymesSelected && !duluxSelected; // If no filter selected, show all
  });

  return (
    <Box
      sx={{
        padding: 2,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "white",
        border: "1px solid #e0e0e0",
        margin: "10px 0px",
        maxWidth: "100%",
      }}
    >
      {/* Responsive Checkboxes for Haymes and Dulux */}
      <Box sx={{display: "flex", gap: 1}}>
      <FormControlLabel
            control={
              <Checkbox
                checked={haymesSelected}
                onChange={(e) => setHaymesSelected(e.target.checked)}
              />
            }
            label="Haymes"
          />
            <FormControlLabel
            control={
              <Checkbox
                checked={duluxSelected}
                onChange={(e) => setDuluxSelected(e.target.checked)}
              />
            }
            label="Dulux"
          />
      </Box>

      <TableContainer component={Paper}>
        <Table size={isSmallScreen ? "small" : "medium"} aria-label="paint data table">
          <TableHead>
            <TableRow>
              <TableCell>Barcode</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Product Range</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Buying Rate excl tax</TableCell>
              <TableCell>Buying Rate incl tax</TableCell>
              <TableCell>Ltr/kg (Price ex)</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPaintData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={row.barcode}
                      onChange={(e) => handleInputChange(index, "barcode", e.target.value)}
                      size="small"
                      fullWidth
                    />
                  ) : (
                    row.barcode
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={row.description}
                      onChange={(e) => handleInputChange(index, "description", e.target.value)}
                      size="small"
                      fullWidth
                    />
                  ) : (
                    row.description
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <Select
                      value={row.productRange}
                      onChange={(e) => handleInputChange(index, "productRange", e.target.value)}
                      size="small"
                      fullWidth
                    >
                      {productRangeOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : (
                    row.productRange
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={row.qty}
                      onChange={(e) => handleInputChange(index, "qty", e.target.value)}
                      type="number"
                      size="small"
                      fullWidth
                    />
                  ) : (
                    row.qty
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={row.buyingRateExcl}
                      onChange={(e) => handleInputChange(index, "buyingRateExcl", e.target.value)}
                      type="number"
                      size="small"
                      fullWidth
                    />
                  ) : (
                    row.buyingRateExcl.toFixed(2)
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={row.buyingRateIncl}
                      onChange={(e) => handleInputChange(index, "buyingRateIncl", e.target.value)}
                      type="number"
                      size="small"
                      fullWidth
                    />
                  ) : (
                    row.buyingRateIncl.toFixed(2)
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <TextField
                      value={row.ltrKgPrice}
                      onChange={(e) => handleInputChange(index, "ltrKgPrice", e.target.value)}
                      type="number"
                      size="small"
                      fullWidth
                    />
                  ) : (
                    row.ltrKgPrice.toFixed(2)
                  )}
                </TableCell>
                <TableCell>
                  {row.isEditing ? (
                    <Select
                      value={row.category}
                      onChange={(e) => handleInputChange(index, "category", e.target.value)}
                      size="small"
                      fullWidth
                    >
                      {categoryOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  ) : (
                    row.category
                  )}
                </TableCell>
                <TableCell>{row.brand}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() =>
                      row.isEditing ? saveRow(index) : toggleEditMode(index)
                    }
                  >
                    {row.isEditing ? <FaSave /> : <FaEdit />}
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton color="error" onClick={() => handleDelete(index)}>
                    <FaTrash />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={2} display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="primary"
          startIcon={<FaPlus />}
          onClick={addRow}
        >
          Add Row
        </Button>
      </Box>
    </Box>
  );
};

export default PaintCalculator;
