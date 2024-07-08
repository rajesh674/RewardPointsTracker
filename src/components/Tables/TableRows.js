import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const TableRows = ({ id, row, subrow }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    {subrow && <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>}
                </TableCell>
                <TableCell>
                    {id + 1}
                </TableCell>
                <TableCell align='center' component="th" scope="row">
                    {row.name}
                </TableCell>
                {subrow && <>
                    <TableCell align='center'>{row.month}</TableCell>
                    <TableCell align='center'>{row.numTransactions}</TableCell>
                </>}
                <TableCell align='center'>${row.amt}</TableCell>
                <TableCell align='center'>{row.points}</TableCell>
            </TableRow>
            {subrow && <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" style={{ fontWeight: 600 }} gutterBottom component="div">
                                Transaction History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ fontWeight: 600 }}>Transaction Date</TableCell>
                                        <TableCell style={{ fontWeight: 600 }}> Transaction Amount</TableCell>
                                        <TableCell style={{ fontWeight: 600 }}>Reward Points</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {subrow.map((historyRow, i) => (
                                        <TableRow key={i}>
                                            <TableCell style={{ padding: "20px 15px" }}>
                                                {historyRow.transactionDt}
                                            </TableCell>

                                            <TableCell>${historyRow.amt}</TableCell>
                                            <TableCell>{historyRow.points}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>}
        </>
    );
};

export default TableRows;