import React from "react";
import withTable from "hocs/withTable";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const RoomTable = ({tableData, cssRow, cssCell, ...props}) => (
    tableData.map((row, i) => (
        <TableRow className={cssRow} index={i}>
            <TableCell className={cssCell}>{i+1}</TableCell>
            <TableCell className={cssCell}>{row.room_Name} </TableCell>
            <TableCell className={`${cssCell} custom-cell room-name`}>
                {
                    row.people_id.slice(0, 5).map(u => ( <img src={u.avatar.link} alt=""/> ))
                }
                {
                    row.people_id.length > 5 && (
                        <div>
                            <span>{`+${row.people_id.length - 5}`}</span>
                        </div>
                    )
                }
            </TableCell>
            <TableCell className={cssCell}>{row.bill_date} </TableCell>
            <TableCell className={`${cssCell} options`}>
                <div>
                    <i className="fas fa-times remove"></i>
                    <i className="fas fa-eraser edit"></i>
                </div>
            </TableCell>
        </TableRow>
    ))
)

export default withTable(RoomTable);
