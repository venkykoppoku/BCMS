import * as React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { Paper, Button, Dialog } from '@material-ui/core'
import { MFTextField, MFCheckbox } from '../../MaterialComponents'




export const EditUserForm = (props) => (
  <div>
    <Formik
      initialValues={props.values}
      onSubmit={(values, actions) => {
        props.onSubmit(values, actions)
      }}
    >
      <div className="ActivityViewContainer">
        <Paper>
          <Form>
          <MFTextField name="unit" type="text" />
                        <MFTextField name="typeOfProject" type="text" />
                        <MFTextField name="noOfKeyResourcesNeeded" type="number" />
                        <MFTextField name="noOfPcsRequired" type="number" />
                        <MFTextField name="projectSpecificSoftwareRequired" type="text" />
                        <MFTextField name="servicePriority" type="text" />
                        <MFTextField name="recoveryTimelines" type="text" />
                        <MFTextField name="primaryLocation" type="text" />
                        <MFTextField name="relocationLocation" type="text" />
                        <MFTextField name="primaryBuilding" type="text" />
                        <MFTextField name="relocationBuilding" type="text" />
                        <MFTextField name="keyContact" type="text" />
                        <MFTextField name="backupKeyContact" type="text" />
                        <MFTextField name="remarks" type="text" />
                        <MFTextField name="dataReviewedBy" type="text" />
                        <MFTextField name="shiftStartTime" type="text" />
                        <MFCheckbox name="isWorkFromHomeAvl" value={true} />
                        <MFCheckbox name="eccAccomadationNeeded" value={true} />
                        <MFTextField name="transportRequirements" type="text" />
            <br />
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
            <Button
              className="add-button"
              variant="raised"
              type="button"
              onClick={() => props.onClose('edit user')}
            >
              Close
            </Button>
          </Form>
        </Paper>
      </div>
    </Formik>
  </div>
)

export const EditUserView = (props) => (
  <Dialog open={props.editUserOpen} onClose={props.handleCloseClick}>
    {props.editUserOpen && (
      <EditUserForm
        values={props.editUserData}
        onClose={props.handleCloseClick}
        onSubmit={props.handleEditUserSubmit}
      />
    )}
  </Dialog>
)
