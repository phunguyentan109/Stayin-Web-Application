import React from "react";
import withTable from "hocs/withTable";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {inCurrency} from "services/utils";
import PropTypes from "prop-types";
import {OptTips} from "components/Table/CellOption";
import EmptyCell from "./EmptyCell";

const BillTable = ({tableData, cssRow, cssCell, hdRemove, hdEdit, options, hdChangePay, ...props}) => (
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
                <TableCell className={`${cssCell} bill-active`}>
                    <div>
                        {row.inContract ? <span className="active"/> : <span className="unactive"/>}
                        {row.inContract ? "Active" : "Unactive"}
                    </div>
                </TableCell>
                <TableCell className={`${cssCell} bill-pay`}>
                    <div onClick={hdChangePay.bind(this, row._id)}>
                        <span>
                            {row.pay.status ? "" : <i className="fas fa-comments-dollar"/>}
                        </span>
                        {row.pay.status ? "Paid" : "Unpaid"}
                    </div>
                </TableCell>
                <TableCell>
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
                            row.inContract && <OptTips text="Edit">
                                <i
                                    className="fas fa-edit edit"
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
