import React, { Component, Fragment } from 'react';
import XLSX from 'xlsx';
//import '../styles/sheet.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Sheet extends Component {

    exportXLSX = () => {
        let data = this.props.data;
        let cols = this.props.cols.map(c => c["name"]);
        data.unshift(cols);
        const worksheet = XLSX.utils.aoa_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "workbook");
        XLSX.writeFile(workbook, "workbook.xlsx")
    }

    render() {

        return (
            <Fragment>
                <TableContainer component={Paper}>
                    <Table stickyHeader aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {this.props.cols.map(c => (
                                    <TableCell key={c.key} align="right">{c.name}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.data.map((r, i) => (
                                <TableRow key={i}>
                                    {this.props.cols.map(c => (
                                        <TableCell component="th" scope="row" align="right" key={c.key}>{r[c.key]}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button
                    onClick={this.exportXLSX}
                    variant="contained"
                    color="primary"
                    className="mt-4"
                >
                    Export data to XLSX
                        </Button>
            </Fragment>
        )
    }
}

export default Sheet;
