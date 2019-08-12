import React from "react";
import withTable from "hocs/withTable";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import PropTypes from "prop-types";

const ListPeople = ({people_id}) => people_id.slice(0, 5).map((u, i) => (
    <img src={u.user_id.avatar.link} alt="" key={i}/>
))

const RoomTable = ({tableData, cssRow, cssCell, ...props}) => (
    tableData.map((row, i) => (
        <TableRow className={cssRow} key={i}>
            <TableCell className={cssCell}>{i+1}</TableCell>
            <TableCell className={cssCell}>{row.name} </TableCell>
            <TableCell className={`${cssCell} custom-cell room-name`}>
                {
                    row.people_id.length > 0
                    ? <ListPeople people={row.people_id} />
                    : <span className="empty-cell">No one is staying in this room</span>
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
                {/* <div>
                    {i === 0 && <span></span>}
                    {i === 1 && <span className="near"></span>}
                    {i === 2 && <span className="expire"></span>}
                    {row.bill_date}
                    {i === 1 && <i className="fas fa-hand-holding-usd"></i>}
                </div> */}
                {
                    row.bill_id.length > 0
                    ? <span></span>
                    : <span className="empty-cell">Not yet</span>
                }
            </TableCell>
            <TableCell className={cssCell}>
                {
                    row.price_id
                    ? row.price_id.type
                    : <span className="empty-cell">Not yet</span>
                }
            </TableCell>
            <TableCell className={`${cssCell} options`}>
                <div>
                    <i className="fas fa-times remove"></i>
                    <i className="fas fa-eraser edit"></i>
                </div>
            </TableCell>
        </TableRow>
    ))
)

RoomTable.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object)
}

export default withTable(RoomTable);
