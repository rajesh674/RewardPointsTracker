import React from "react";
import CustomerRewardSingle from "./CustomerRewardSingle"; // Importing the component for table rows
//import ErrorPage from "../components/errorpage";

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
// Columns for the 'Monthly Rewards' tab
const columns = [
  {
    Header: "Customer Name",
  },
  {
    Header: "Transaction Year",
  },
  {
    Header: "Total Amount",
  },
  {
    Header: "Total Reward Points",
  },
];

// Functional component for Tables
const CustomerRewards = ({ title, data }) => {

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
            {data?.length > 0 ? data?.map((row, i) => {
              return (
                <CustomerRewardSingle
                  key={i}
                  row={row}
                />
              );
            }) : <td colSpan={6} className="p-5"><h1 style={{textAlign:'center'}}> No records found </h1></td>}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CustomerRewards; // Exporting the Tables component as default