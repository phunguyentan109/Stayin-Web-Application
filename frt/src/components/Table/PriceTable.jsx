import React from "react";
import withTable from "hocs/withTable";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";


const PriceTable = ({tableData, cssRow, cssCell, ...props}) => (
    tableData.map((row, i) => (
        <TableRow className={cssRow}>
            <TableCell className={cssCell}>{i+1}</TableCell>
            <TableCell className={cssCell}>{row.room_Name} </TableCell>
            <TableCell className={`${cssCell} custom-cell room-name`}>
                <img src="https://images.unsplash.com/photo-1563729574084-950da51d3822?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100" alt=""/>
                <img src="https://images.unsplash.com/photo-1563729574084-950da51d3822?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100" alt=""/>
                <img src="https://images.unsplash.com/photo-1563729574084-950da51d3822?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100" alt=""/>
                <img src="https://images.unsplash.com/photo-1563729574084-950da51d3822?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100" alt=""/>
                <img src="https://images.unsplash.com/photo-1563729574084-950da51d3822?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixlib=rb-1.2.1&q=80&w=100" alt=""/>
                {
                    row.people_id.user_id.length > 5 && (
                        <div>
                            <span>{`+${row.people_id.user_id.length - 5}`}</span>
                        </div>
                    )
                }
            </TableCell>
            <TableCell className={cssCell}>{row.bill_date} </TableCell>
            <TableCell className={`${cssCell} options`}>
                <i className="fas fa-times remove"></i>
                <i className="fas fa-eraser edit"></i>
            </TableCell>
        </TableRow>
    ))
)

export default withTable(PriceTable);
