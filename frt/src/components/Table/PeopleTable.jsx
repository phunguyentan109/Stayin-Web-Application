import React from "react";
import withTable from "hocs/withTable";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CellOption from "components/Table/CellOption";
import EmptyCell from "components/Table/EmptyCell";
import PropTypes from "prop-types";

const PeopleTable = ({tableData, cssRow, cssCell, options, ...props}) => (
    tableData.map((row, i) => (
        <TableRow className={cssRow} key={i}>
            <TableCell className={cssCell}>{i+1}</TableCell>
            <TableCell className={`${cssCell} custom-cell people-name`}>
                <img src={row.user_id.avatar.link} alt=""/>
                <div>
                    {row.user_id.viewname}
                    <span className={`status ${row.room_id ? "stateSuccess" :  "stateWait"}`}>
                        <i className={`fas ${row.room_id ? "fa-home" : "fa-hourglass-start"}`} />
                        {row.room_id ? `Staying at room ${row.room_id.name}` : "Waiting"}
                    </span>
                </div>
            </TableCell>
            <TableCell className={cssCell}>
                {row.birthDate ? row.birthDate : <EmptyCell/>} years old
            </TableCell>
            <TableCell className={cssCell}>
                { row.job ? row.job : <EmptyCell/> }
            </TableCell>
            <TableCell className={cssCell}>{row.user_id.email}</TableCell>
            <TableCell className={cssCell}>
                { row.user_id.phone ? row.user_id.phone : <EmptyCell/> }
            </TableCell>
            {
                options && <TableCell className={`${cssCell} options`}>
                    <CellOption options={options} use={row._id}/>
                </TableCell>
            }
        </TableRow>
    ))
)

PeopleTable.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object)
}

export default withTable(PeopleTable);
