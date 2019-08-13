import React from "react";
import withTable from "hocs/withTable";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {inCurrency} from "services/utils";
import PropTypes from "prop-types";
import CellOption from "components/Table/CellOption";

const PriceTable = ({tableData, cssRow, cssCell, hdRemove, hdEdit, options, ...props}) => (
    tableData.map((row, i) => (
        <TableRow className={cssRow} key={i}>
            <TableCell className={cssCell}>{i+1}</TableCell>
                <TableCell className={cssCell}>{row.type}</TableCell>
                <TableCell className={cssCell}>{inCurrency(row.electric)*1000}</TableCell>
                <TableCell className={cssCell}>{inCurrency(row.wifi)*1000}</TableCell>
                <TableCell className={cssCell}>{inCurrency(row.water)*1000}</TableCell>
                <TableCell className={cssCell}>{inCurrency(row.house)*1000}</TableCell>
                <TableCell className={cssCell}>{inCurrency(row.extra)*1000}</TableCell>
                <TableCell className={cssCell}>{row.duration}</TableCell>
                {
                    row.length === 0
                    ? <span className="empty-cell">Not yet</span>
                    : ""
                }
                {
                    options && <TableCell className={`${cssCell} options`}>
                        <CellOption options={options} use={row._id}/>
                    </TableCell>
                }
        </TableRow>
    ))
)

PriceTable.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
}

export default withTable(PriceTable);
