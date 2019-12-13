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
import {EditUserView} from './EditUserView'


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

<EditUserView
          editUserOpen={props.editUserOpen}
          editUserData={props.editUserData}
          handleEditUserSubmit={props.handleEditUserSubmit}
          handleCloseClick={props.handleCloseClick}
        />


                
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Unit</CustomTableCell>
                                <CustomTableCell align="right">Type Of Project</CustomTableCell>
                                <CustomTableCell align="right">No of key resources needed</CustomTableCell>
                                <CustomTableCell align="right">No Of PCs Required</CustomTableCell>
                                <CustomTableCell align="right">Any Project specific Software Requirement</CustomTableCell>
                                <CustomTableCell align="right"> Service Priority</CustomTableCell>
                                <CustomTableCell align="right">Recovery Timelines</CustomTableCell>
                                <CustomTableCell align="right">Primary Location</CustomTableCell>
                                <CustomTableCell align="right">Relocation Location</CustomTableCell>
                                <CustomTableCell align="right">Primary Building</CustomTableCell>
                                <CustomTableCell align="right">Relocation Building</CustomTableCell>
                                <CustomTableCell align="right">Key Contact/SPOC</CustomTableCell>
                                <CustomTableCell align="right">Backup Key Contact/Backup SPOC</CustomTableCell>
                                <CustomTableCell align="right">Remarks</CustomTableCell>
                                <CustomTableCell align="right">Data Reviewed By</CustomTableCell>
                                <CustomTableCell align="right">Shift Start Time </CustomTableCell>
                                <CustomTableCell align="right">Is Work from Home Possible </CustomTableCell>
                                <CustomTableCell align="right">ECC Accomodation Needed </CustomTableCell>
                                <CustomTableCell align="right">Transport Requirements </CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.tableData.map((row) => (
                                <TableRow key={row.id}>
                                    <CustomTableCell component="th" scope="row">
                                        {row.unit}
                                    </CustomTableCell>
                                    <CustomTableCell align="right">
                                        {row.typeOfProject}
                                    </CustomTableCell>
                                    <CustomTableCell align="right">{row.noOfKeyResourcesNeeded}</CustomTableCell>
                                    <CustomTableCell align="right">
                                        {row.noOfPcsRequired}
                                    </CustomTableCell>
                                    <CustomTableCell align="right">{row.projectSpecificSoftwareRequired}</CustomTableCell>
                                    <CustomTableCell align="right">{row.servicePriority}</CustomTableCell>
                                    <CustomTableCell align="right">{row.recoveryTimelines}</CustomTableCell>
                                    <CustomTableCell align="right">{row.primaryLocation}</CustomTableCell>
                                    <CustomTableCell align="right">{row.relocationLocation}</CustomTableCell>
                                    <CustomTableCell align="right">{row.primaryBuilding}</CustomTableCell>
                                    <CustomTableCell align="right">{row.relocationBuilding}</CustomTableCell>
                                    <CustomTableCell align="right">{row.keyContact}</CustomTableCell>
                                    <CustomTableCell align="right">{row.backupKeyContact}</CustomTableCell>
                                    <CustomTableCell align="right">{row.remarks}</CustomTableCell>
                                    <CustomTableCell align="right">{row.dataReviewedBy}</CustomTableCell>
                                    <CustomTableCell align="right">{row.shiftStartTime}</CustomTableCell>
                                    <CustomTableCell align="right">{row.isWorkFromHomeAvl}</CustomTableCell>
                                    <CustomTableCell align="right">{row.eccAccomadationNeeded}</CustomTableCell>
                                    <CustomTableCell align="right">{row.transportRequirements}</CustomTableCell>
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
