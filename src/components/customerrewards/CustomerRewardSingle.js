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
const CustomerRewardSingle = ({ id, row }) => {
  const [open, setOpen] = useState(false); // State for managing row expansion/collapse
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          {/* Display expand/collapse button if subrow exists */}

          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>

        </TableCell>
        <TableCell>{row?.custid}</TableCell>
        <TableCell align="center" component="th" scope="row">
          {row?.customerName}
        </TableCell>
        <TableCell align="center">${row?.totalAmount}</TableCell>
        <TableCell align="center">{row?.totalRewardPoints}</TableCell>
      </TableRow>

      {/* Subrow with transaction history */}
      {Object.keys(row?.monthlyRewardPoints).length > 0 ? <TableRow>
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
                      Month
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
                  {Object.keys(row?.monthlyRewardPoints).map((month, i) => (
                    <TableRow key={i}>
                      <TableCell style={{ padding: "20px 15px" }}>
                        {month}
                      </TableCell>
                      <TableCell>${row?.monthlyRewardPoints[month].amount}</TableCell>
                      <TableCell>{row?.monthlyRewardPoints[month].points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow> : ''}

    </>
  );
};

export default CustomerRewardSingle; // Exporting the TableRows component as default