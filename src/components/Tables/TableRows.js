import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// Functional component for rendering each row in the table
const TableRows = ({ id, row, subrow }) => {
  const [open, setOpen] = useState(false); // State for managing row expansion/collapse

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          {/* Display expand/collapse button if subrow exists */}
          {subrow && (
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          )}
        </TableCell>
        <TableCell>{id + 1}</TableCell>
        <TableCell align="center" component="th" scope="row">
          {row.customerName}
        </TableCell>
        {/* Additional columns displayed only if subrow exists */}
        {subrow && (
          <>
            <TableCell align="center">{row.month}</TableCell>
            <TableCell align="center">{row.numTransactions}</TableCell>
          </>
        )}
        <TableCell align="center">${row.amount}</TableCell>
        <TableCell align="center">{row.points}</TableCell>
      </TableRow>

      {/* Subrow with transaction history */}
      {subrow && (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            {/* Collapse component for showing/hiding the transaction history */}
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                {/* Title for the transaction history section */}
                <Typography
                  variant="h6"
                  style={{ fontWeight: 600 }}
                  gutterBottom
                  component="div"
                >
                  Transaction History
                </Typography>
                {/* Table displaying transaction history */}
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      {/* Transaction history table headers */}
                      <TableCell style={{ fontWeight: 600 }}>
                        Transaction Date
                      </TableCell>
                      <TableCell style={{ fontWeight: 600 }}>
                        Transaction Amount
                      </TableCell>
                      <TableCell style={{ fontWeight: 600 }}>
                        Reward Points
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Mapping through subrow to display each transaction */}
                    {subrow.map((historyRow, i) => (
                      <TableRow key={i}>
                        {/* Transaction date */}
                        <TableCell style={{ padding: "20px 15px" }}>
                          {historyRow.transactionDate}
                        </TableCell>
                        {/* Transaction amount */}
                        <TableCell>${historyRow.amount}</TableCell>
                        {/* Reward points */}
                        <TableCell>{historyRow.points}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
};

export default TableRows; // Exporting the TableRows component as default