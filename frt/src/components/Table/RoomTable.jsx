import React from "react";
import withTable from "hocs/withTable";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";


const RoomTable = ({tableData, cssRow, cssCell, ...props}) => (
    tableData.map((row, i) => (
        <TableRow className={cssRow}>
            <TableCell className={cssCell}>{i+1}</TableCell>
            <TableCell className={cssCell}>{row.room_Name} </TableCell>
            <TableCell className={`${cssCell} custom-cell room-name`}>
                
                <img src={row.user_id.avatar.link} alt=""/>
                <img src={row.user_id.avatar.link} alt=""/>
                <img src={row.user_id.avatar.link} alt=""/>
                <img src={row.user_id.avatar.link} alt=""/>
                <img src={row.user_id.avatar.link} alt=""/>
                <div>
                    <span>
                        {row.user_id.total>5 ? `+${row.user_id.total-5}` : ""}
                    </span>
                </div>
            </TableCell>
            <TableCell className={cssCell}>{row.bill_date} </TableCell>
            <TableCell className={`${cssCell} options`}>
                <i className="fas fa-times remove"></i>
                <i className="fas fa-eraser edit"></i>
            </TableCell>
        </TableRow>
    ))
)

export default withTable(RoomTable);
