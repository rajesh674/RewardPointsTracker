import React from 'react';
import TableRows from './TableRows';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const titleObj = {
    marginBottom: '15px',
    fontWeight: 600,
}
const Tables = ({ title, data, pointsPerTransaction, columns }) => {
    function getIndividualTransactions(row) {
        let byCustMonth = pointsPerTransaction.filter((tRow) => {
            return row.custid === tRow.custid && row.monthNumber === tRow.month;
        });
        return byCustMonth;
    }

    return (
        <>
            <Typography style={titleObj} variant="h5" gutterBottom>
                {title}
            </Typography>

            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell style={{ fontWeight: 600 }}>Sr.</TableCell>
                            {columns.map((el, i) => {
                                return <TableCell style={{ fontWeight: 600 }} align='center' key={i}>{el?.Header}</TableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row, i) => {
                            return <TableRows key={i} id={i} row={row} subrow={pointsPerTransaction ? getIndividualTransactions(row) : null} />
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default Tables;