import React from "react";
import withTable from "hocs/withTable";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {inCurrency} from "services/utils";
import PropTypes from "prop-types";
import CellOption from "components/Table/CellOption";
import EmptyCell from "./EmptyCell";

const BillTable = ({tableData, cssRow, cssCell, hdRemove, hdEdit, options, ...props}) => (
    tableData.map((row, i) => (
        <TableRow className={cssRow} key={i}>
            <TableCell className={cssCell}>{i+1}</TableCell>
                <TableCell className={`${cssCell} custom-cell bill-electric`}>
                    <div>
                        {row.electric.cost ? inCurrency(row.electric.cost) : <EmptyCell/>}
                        <span>
                            <i class="fas fa-bolt"/>
                            {row.electric.amount ? `${row.electric.amount} KW` : <EmptyCell/>} 
                        </span>
                    </div>
                </TableCell>
                <TableCell className={cssCell}>
                    {row.water ? inCurrency(row.water) : <EmptyCell/>}
                </TableCell>
                <TableCell className={cssCell}>
                    {row.house ? inCurrency(row.house) : <EmptyCell/>}
                </TableCell>
                <TableCell className={cssCell}>
                    {row.wifi ? inCurrency(row.wifi) : <EmptyCell/>}
                </TableCell>
                <TableCell className={cssCell}>
                    {inCurrency(row.electric.cost + row.water + row.house + row.wifi)}
                </TableCell>
                <TableCell className={`${cssCell} bill-active`}>
                    <div>
                        {row.inContract ? <span className="active"/> : <span className="unactive"/>}
                        {row.inContract ? "Active" : "Unactive"}
                    </div>
                </TableCell>
                {
                    options && <TableCell className={`${cssCell} options`}>
                        <CellOption options={options} use={row._id}/>
                    </TableCell>
                }
        </TableRow>
    ))
)

BillTable.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object)
}

export default withTable(BillTable);
