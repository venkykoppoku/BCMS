import * as React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { Paper, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import { AddUserView } from './AddUser'


const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: 'grey',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell)



export const UserDetailsView = (props) => {
    console.log(props)
    return (
        <div>
            <div>
                <Button
                    style={{ float: 'right' }}
                    color="primary"
                    variant="contained"
                    type="submit"
                    onClick={props.handleAddUserClick}
                >
                    Add Project
        </Button>
                <div>
                    <div style={{ color: 'blue', textAlign: 'center', fontSize: 30 }}>
                        BCMS
            </div>
                </div>

                <AddUserView
                    addUserOpen={props.addUserOpen}
                    addUserData={props.addUserData}
                    handleAddUserSubmit={props.handleAddUserSubmit}
                    handleCloseClick={props.handleCloseClick}
                />

                
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Email</CustomTableCell>
                                <CustomTableCell align="right">Password</CustomTableCell>
                                <CustomTableCell align="right">Role</CustomTableCell>
                                <CustomTableCell align="right">EmailConfirmed</CustomTableCell>
                                <CustomTableCell align="right">Actions</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.tableData.map((row) => (
                                <TableRow key={row.id}>
                                    <CustomTableCell component="th" scope="row">
                                        {row.email}
                                    </CustomTableCell>
                                    <CustomTableCell align="right">
                                        {row.password}
                                    </CustomTableCell>
                                    <CustomTableCell align="right">{row.role}</CustomTableCell>
                                    <CustomTableCell align="right">
                                        {row.emailConfirmed.toString()}
                                    </CustomTableCell>
                                    <CustomTableCell align="right">
                                        <EditIcon onClick={() => props.handleEditUserClick(row)} />
                                        <DeleteIcon
                                            onClick={() => props.handleDeleteUserSubmit(row.id)}
                                        />
                                    </CustomTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        </div>
    )
}
