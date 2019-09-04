import React from "react";
import withTable from "hocs/withTable";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import PropTypes from "prop-types";
import CellOption from "components/Table/CellOption";
import EmptyCell from "components/Table/EmptyCell";
import moment from "moment";

const ListPeople = ({people}) =>
    people.map((u, i) => <img src={u.user_id.avatar.link} alt="" key={i}/>
)

function getBillStatus() {
    let dateLeft = moment().endOf("month") - moment();
    if (dateLeft === 0) {
        return "expire";
    } else if (dateLeft < 5) {
        return "near";
    }
    return "";
}

function getUpcomingBillDate(dates) {
    console.log(dates);
}

const RoomTable = ({tableData, cssRow, cssCell, options, ...props}) => (
    tableData.map((row, i) => (
        <TableRow className={cssRow} key={i}>
            <TableCell className={cssCell}>{i+1}</TableCell>
            <TableCell className={cssCell}>{row.name} </TableCell>
            <TableCell className={`${cssCell} custom-cell room-name`}>
                {
                    row.people_id.length > 0
                    ? <ListPeople people={row.people_id.length > 5 ? row.people_id.slice(0, 5) : row.people_id} />
                    : <EmptyCell text="No one is staying in this room"/>
                }
                {
                    row.people_id.length > 5 && (
                        <div>
                            <span>{`+${row.people_id.length - 5}`}</span>
                        </div>
                    )
                }
            </TableCell>
            <TableCell className={`${cssCell} bill-date`}>
                {getUpcomingBillDate(row.bill_id)}
                { row.bill_id.length > 0
                    ? <div>
                        <span className={getBillStatus()}/>
                        {moment(row.bill_id[row.bill_id.length-1].createdAt).format("DD-MM-YYYY")}
                        {row.bill_id.filter(b => b.pay === false).length > 0 && <i className="fas fa-hand-holding-usd"></i>}
                    </div>
                    : <EmptyCell/>
                }
            </TableCell>
            <TableCell className={cssCell}>
                { row.price_id ? row.price_id.type : <EmptyCell/> }
            </TableCell>
            {
                options && <TableCell className={`${cssCell} options`}>
                    <CellOption options={options} use={row._id}/>
                </TableCell>
            }
        </TableRow>
    ))
)

RoomTable.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object)
}

export default withTable(RoomTable);
