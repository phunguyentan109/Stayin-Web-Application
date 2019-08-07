import React from "react";
import withTable from "hocs/withTable";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const PeopleTable = ({tableData, cssRow, cssCell, ...props}) => (
    tableData.map((row, i) => (
        <TableRow className={cssRow}>
            <TableCell className={cssCell}>{i+1}</TableCell>
            <TableCell className={`${cssCell} custom-cell people-name`}>
                <img src={row.user_id.avatar.link} alt=""/>
                <div>
                    {row.user_id.viewname}
                    <span className={`status ${row.room_id ? "stateSuccess" :  "stateWait"}`}>
                        <i className={`fas ${row.room_id ? "fa-home" : "fa-hourglass-start"}`} />
                        {row.room_id ? "Staying" : "Waiting"}
                    </span>
                </div>
            </TableCell>
            <TableCell className={cssCell}>{row.age} years old</TableCell>
            <TableCell className={cssCell}>{row.job}</TableCell>
            <TableCell className={cssCell}>{row.user_id.email}</TableCell>
            <TableCell className={cssCell}>{row.user_id.phone}</TableCell>
            <TableCell className={`${cssCell} options`}>
                <i className="fas fa-times remove"></i>
                <i className="fas fa-eraser edit"></i>
            </TableCell>
        </TableRow>
    ))
)

export default withTable(PeopleTable);
