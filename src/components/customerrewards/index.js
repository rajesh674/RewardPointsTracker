import React from "react";
import CustomerRewardSingle from "./CustomerRewardSingle"; // Importing the component for table rows

// Importing necessary components from Material-UI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

// Styles for the title
const titleObj = {
  marginTop: "15px",
  marginBottom: "15px",
  fontWeight: 600,
};

// Functional component for Tables
const CustomerRewards = ({ title, data, columns }) => {

  // Render the component
  return (
    <>
      {/* Title for the table */}
      <Typography style={titleObj} variant="h5" gutterBottom>
        {title}
      </Typography>

      {/* Table container component */}
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell style={{ fontWeight: 600 }}>Customer ID</TableCell>
              {/* Mapping over columns array to create table headers */}
              {columns.map((el, i) => {
                return (
                  <TableCell style={{ fontWeight: 600 }} align="center" key={i}>
                    {el?.Header}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          {/* Table body */}
          <TableBody>
            {/* Mapping over data to create rows */}
            {data?.map((row, i) => {
              return (
                <CustomerRewardSingle
                  key={i}
                  id={i}
                  row={row}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CustomerRewards; // Exporting the Tables component as default