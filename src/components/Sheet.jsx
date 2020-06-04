import React, { Component, Fragment } from 'react';
import XLSX from 'xlsx';
import '../styles/sheet.css';


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
                <table className="table">
                    <thead className="table-head">
                        <tr>
                            {this.props.cols.map((c) => 
                                <th key={c.key}>{c.name}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {this.props.data.map((r,i) => 
                            <tr key={i} className={`table-row-${i%2===0? '1' : '2'}`}>
                                {this.props.cols.map(c => 
                                    <td 
                                        key={c.key}>{ r[c.key] }
                                    </td>)}
                            </tr>)}
                    </tbody>
                </table>
                <button className="button-export-xlsx" onClick={this.exportXLSX}>Export data to XLSX</button>
            </Fragment>    
        )
    }
}

export default Sheet;
