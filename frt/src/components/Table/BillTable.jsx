import React from "react";
import withTable from "hocs/withTable";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {inCurrency} from "services/utils";
import PropTypes from "prop-types";

const BillTable = ({tableData, cssRow, cssCell, ...props}) => (
    tableData.map((row, i) => (
        <TableRow className={cssRow} key={i}>
            <TableCell className={cssCell}>{i+1}</TableCell>
            {
                row.map((m, i) => (
                    <TableCell className={cssCell} key={i}>
                        { i !== 5 ? inCurrency(m*1000) : m }
                    </TableCell>
                ))
            }
            <TableCell className={`${cssCell} options`}>
                <div>
                    <i className="fas fa-times remove"></i>
                    <i className="fas fa-eraser edit"></i>
                </div>
            </TableCell>
        </TableRow>
    ))
)

BillTable.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
}

export default withTable(BillTable);