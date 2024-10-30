import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Box,
  Tabs,
  Tab,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { FaEdit, FaTrash, FaSave, FaPlus } from "react-icons/fa";

const LaborCalculator = () => {
  const [labourData, setLabourData] = useState([
    {
      rateType: "Mon - Fri (Ordinary)",
      unitType: "Hours",
      qty: 1,
      rate: 24.93,
      isEditing: false,
    },
    {
      rateType: "Mon - Fri (Overtime)",
      unitType: "Sq Metre",
      qty: 2,
      rate: 53.33,
      isEditing: false,
    },
  ]);

  const rateTypeOptions = [
    "Mon - Fri (Ordinary)",
    "Mon - Fri (Overtime)",
    "Saturday",
    "Sunday",
    "Public Holiday",
    "Bulk Hours - 40 (Mon - Fri)",
    "Bulk Hours - 160 (Mon - Fri)",
  ];

  const unitTypeOptions = ["Hours", "Sq Metre"];

  // Function to toggle edit mode
  const toggleEditMode = (index) => {
    const newLabourData = labourData.map((row, i) => ({
      ...row,
      isEditing: i === index ? !row.isEditing : row.isEditing,
    }));
    setLabourData(newLabourData);
  };

  // Function to handle input changes in the editable fields
  const handleInputChange = (index, field, value) => {
    const newLabourData = [...labourData];

    // Convert to number if the field is qty or rate
    newLabourData[index][field] =
      field === "qty" || field === "rate" ? Number(value) : value;

    setLabourData(newLabourData);
  };

  // Function to save the edited row
  const saveRow = (index) => {
    const newLabourData = labourData.map((row, i) => ({
      ...row,
      isEditing: i === index ? false : row.isEditing,
    }));
    setLabourData(newLabourData);
  };

  // Function to delete a row
  const handleDelete = (index) => {
    const newLabourData = labourData.filter((_, i) => i !== index); // Remove the row at the given index
    setLabourData(newLabourData);
  };

  // Function to add a new row
  const addRow = () => {
    const newRow = {
      rateType: "New Rate Type",
      unitType: "New Unit Type",
      qty: 0,
      rate: 0,
      isEditing: true,
    };
    setLabourData([...labourData, newRow]);
  };

  return (
    <Box
      sx={{
        padding: 2,
        boxShadow: 3, // Apply shadow for card-like effect
        borderRadius: 2, // Rounded corners like a card
        backgroundColor: "white", // Background color
        border: "1px solid #e0e0e0", // Optional border}}>
        margin: "10px 0px"
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Rate Type</TableCell>
            <TableCell>Unit Type</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Rate</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {labourData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                {row.isEditing ? (
                  <Select
                    value={row.rateType}
                    onChange={(e) =>
                      handleInputChange(index, "rateType", e.target.value)
                    }
                    size="small"
                    fullWidth
                  >
                    {rateTypeOptions.map((option, i) => (
                      <MenuItem key={i} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                ) : (
                  row.rateType
                )}
              </TableCell>
              <TableCell>
                {row.isEditing ? (
                  <Select
                    value={row.unitType}
                    onChange={(e) =>
                      handleInputChange(index, "unitType", e.target.value)
                    }
                    size="small"
                    fullWidth
                  >
                    {unitTypeOptions.map((option, i) => (
                      <MenuItem key={i} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                ) : (
                  row.unitType
                )}
              </TableCell>
              <TableCell>
                {row.isEditing ? (
                  <TextField
                    value={row.qty}
                    onChange={(e) =>
                      handleInputChange(index, "qty", e.target.value)
                    }
                    type="number"
                    size="small"
                  />
                ) : (
                  row.qty
                )}
              </TableCell>
              <TableCell>
                {row.isEditing ? (
                  <TextField
                    value={row.rate}
                    onChange={(e) =>
                      handleInputChange(index, "rate", e.target.value)
                    }
                    type="number"
                    size="small"
                  />
                ) : (
                  row.rate.toFixed(2)
                )}
              </TableCell>
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
      <Box mt={2}>
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

export default LaborCalculator;
