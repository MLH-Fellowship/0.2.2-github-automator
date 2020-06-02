import React, { Component, Fragment } from 'react'
import XLSX from 'xlsx'

// usage: <OutTable data={data} cols={cols} />
// data:Array<Array<any> >;
// cols:Array<{name:string, key:number|string}>;
class Sheet extends Component {

    sortByLeastRecent = (data) => {
        
    }

    render() {
        return (
            <Fragment>
                <table className="table table-striped">
                    <thead>
                        <tr>{this.props.cols.map((c) => <th key={c.key}>{c.name}</th>)}</tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((r,i) => <tr key={i}>
                            {this.props.cols.map(c => <td key={c.key}>{ r[c.key] }</td>)}
                                </tr>)}
                    </tbody>
                </table>
            </Fragment>    
        )
    }
}

export default Sheet