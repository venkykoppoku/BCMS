import * as React from 'react'
import { MyTextField } from './MFComponents/MFTextField'

import { MyCheckbox } from './MFComponents/MFCheckbox'


import { Field } from 'formik'


const capitalizeFirst = (word) =>
    word.charAt(0).toUpperCase() + word.substring(1)



export const MFTextField = ({
    type,
    name,
}) => (
        <div>
            <Field
                label={capitalizeFirst(name)}
                name={name}
                type={type}
                component={MyTextField}
            />
        </div>
    )



export const MFCheckbox = ({
    name,
    value,
}) => (
        <div>
            <Field value={value} name={name} component={MyCheckbox} />
        </div>
    )

