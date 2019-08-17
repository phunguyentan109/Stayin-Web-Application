import React from "react";
import withTable from "hocs/withTable";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {inCurrency} from "services/utils";
import PropTypes from "prop-types";
import CellOption from "components/Table/CellOption";
import EmptyCell from "./EmptyCell";

const PriceTable = ({tableData, cssRow, cssCell, hdRemove, hdEdit, options, ...props}) => (
    tableData.map((row, i) => (
        <TableRow className={cssRow} key={i}>
            <TableCell className={cssCell}>{i+1}</TableCell>
                <TableCell className={cssCell}>
                    {row.type ? row.type : <EmptyCell/>}
                </TableCell>
                <TableCell className={cssCell}>
                    {row.electric ? inCurrency(row.electric) : <EmptyCell/>}
                </TableCell>
                <TableCell className={cssCell}>
                    {row.wifi ? inCurrency(row.wifi) : <EmptyCell/>}
                </TableCell>
                <TableCell className={cssCell}>
                    {row.water ? inCurrency(row.water) : <EmptyCell/>}
                </TableCell>
                <TableCell className={cssCell}>
                    {row.house ? inCurrency(row.house) : <EmptyCell/>}
                </TableCell>
                <TableCell className={cssCell}>
                    {row.extra ? inCurrency(row.extra) : <EmptyCell/>}
                </TableCell>
                <TableCell className={cssCell}>
                    {row.duration ? `${row.duration} month(s)` : <EmptyCell/>}
                </TableCell>

                {
                    options && <TableCell className={`${cssCell} options`}>
                        <CellOption options={options} use={row._id}/>
                    </TableCell>
                }
        </TableRow>
    ))
)

PriceTable.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object)
}

export default withTable(PriceTable);
