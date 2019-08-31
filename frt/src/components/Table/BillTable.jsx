import React from "react";
import withTable from "hocs/withTable";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {inCurrency} from "services/utils";
import PropTypes from "prop-types";
import {OptTips} from "components/Table/CellOption";
import EmptyCell from "./EmptyCell";

const BillTable = ({tableData, cssRow, cssCell, hdRemove, hdEdit, options, hdPay, ...props}) => (
    tableData.map((row, i) => (
        <TableRow className={cssRow} key={i}>
            <TableCell className={cssCell}>{i+1}</TableCell>
                <TableCell className={`${cssCell} bill-electric`}>
                    <div>
                        {row.electric.cost ? inCurrency(row.electric.cost) : <EmptyCell/>}
                        <span>
                            <i className="fas fa-bolt"/>
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
                <TableCell className={`${cssCell} payState`}>
                    <div id={row.pay.status ? "" : "unpaid"}>
                        {row.inContract && <i className="fas fa-file-invoice-dollar"/>}
                        <span onClick={hdPay.bind(this, row._id, !row.pay.status)}>
                            {row.pay.status ? "Paid" : "Unpaid"}
                        </span>
                    </div>
                </TableCell>
                <TableCell className={`${cssCell} options`}>
                    <div>
                        {
                            row.inContract || <OptTips text="Remove">
                                <i
                                    className="fas fa-times remove"
                                    onClick={options.remove.bind(this, row._id)}
                                />
                            </OptTips>
                        }
                        {
                            row.inContract && i === 0 && <OptTips text="Reset">
                                <i
                                    className="fas fa-redo-alt edit"
                                    onClick={options.edit.bind(this, row._id)}
                                />
                            </OptTips>
                        }
                    </div>
                </TableCell>
        </TableRow>
    ))
)

BillTable.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object)
}

export default withTable(BillTable);
