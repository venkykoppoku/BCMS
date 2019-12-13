import * as React from 'react'
import { UserDetailsView } from '../../views/User/UserDetails'

export const postUser = (values) =>
    fetch(`http://192.168.1.77:4001/user`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(values),
    }).then(res => {
        console.log(res)
        if (res.ok) {
            return res
        }
        throw res
    })

// export const getUsers = () =>
//     fetch(`http://192.168.1.77:4001/user`, {
//         method: 'GET',
//         headers: {
//             'content-type': 'application/json',
//         },
//     }).then(res => {
//         if (res.ok) {
//             return res.json()
//         }
//         throw res
//     })



const getUsers = () => [
    {
        id: '1',
        unit: 'STGPW',
        typeOfProject: 'Retail',
        noOfKeyResourcesNeeded:3,
        noOfPcsRequired:3,
        projectSpecificSoftwareRequired:"no",
        servicePriority:"no",
        recoveryTimelines:"no",
        primaryLocation:"Hyderabad",
        relocationLocation:"Chennai",
        primaryBuilding:"B2",
        relocationBuilding:"B2",
        keyContact:"9398491296",
        backupKeyContact:"9848012328",
        remarks:"location change",
        dataReviewedBy:"",
        shiftStartTime:"",
        isWorkFromHomeAvl:false,
        eccAccomadationNeeded:false,
        transportRequirements:""
    },
    {
        id: '2',
        unit: 'STGPW',
        typeOfProject: 'Retail',
        noOfKeyResourcesNeeded:3,
        noOfPcsRequired:3,
        projectSpecificSoftwareRequired:"no",
        servicePriority:"no",
        recoveryTimelines:"no",
        primaryLocation:"Hyderabad",
        relocationLocation:"Chennai",
        primaryBuilding:"B2",
        relocationBuilding:"B2",
        keyContact:"9398491296",
        backupKeyContact:"9848012328",
        remarks:"location change",
        dataReviewedBy:"",
        shiftStartTime:"",
        isWorkFromHomeAvl:false,
        eccAccomadationNeeded:false,
        transportRequirements:""
    },
    {
        id: '3',
        unit: 'STGPW',
        typeOfProject: 'Retail',
        noOfKeyResourcesNeeded:3,
        noOfPcsRequired:3,
        projectSpecificSoftwareRequired:"no",
        servicePriority:"no",
        recoveryTimelines:"no",
        primaryLocation:"Hyderabad",
        relocationLocation:"Chennai",
        primaryBuilding:"B2",
        relocationBuilding:"B2",
        keyContact:"9398491296",
        backupKeyContact:"9848012328",
        remarks:"location change",
        dataReviewedBy:"",
        shiftStartTime:"",
        isWorkFromHomeAvl:false,
        eccAccomadationNeeded:false,
        transportRequirements:""
    }
]


export const getUserById = (userId) =>
    fetch(`http://192.168.1.77:4001/user/${userId}`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    }).then(res => {
        if (res.ok) {
            console.log(res)
            return res.json()
        }
        throw res
    })

export const putUser = (values) =>
    fetch(`http://192.168.1.77:4001/user/${values.id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(values),
    }).then(res => {
        if (res.ok) {
            return res
        }
        throw res
    })

export const deleteBatchById = (userId) =>
    fetch(`http://192.168.1.77:4001/user/${userId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    }).then(res => {
        if (res.ok) {
            return res
        }
        throw res
    })




export const userDetailValues =[
    {
        id: '1',
        unit: 'STGPW',
        typeOfProject: 'Retail',
        noOfKeyResourcesNeeded:3,
        noOfPcsRequired:3,
        projectSpecificSoftwareRequired:"no",
        servicePriority:"no",
        recoveryTimelines:"no",
        primaryLocation:"Hyderabad",
        relocationLocation:"Chennai",
        primaryBuilding:"B2",
        relocationBuilding:"B2",
        keyContact:"9398491296",
        backupKeyContact:"9848012328",
        remarks:"location change",
        dataReviewedBy:"",
        shiftStartTime:"",
        isWorkFromHomeAvl:false,
        eccAccomadationNeeded:false,
        transportRequirements:""
    },
    {
        id: '2',
        unit: 'STGPW',
        typeOfProject: 'Retail',
        noOfKeyResourcesNeeded:3,
        noOfPcsRequired:3,
        projectSpecificSoftwareRequired:"no",
        servicePriority:"no",
        recoveryTimelines:"no",
        primaryLocation:"Hyderabad",
        relocationLocation:"Chennai",
        primaryBuilding:"B2",
        relocationBuilding:"B2",
        keyContact:"9398491296",
        backupKeyContact:"9848012328",
        remarks:"location change",
        dataReviewedBy:"",
        shiftStartTime:"",
        isWorkFromHomeAvl:false,
        eccAccomadationNeeded:false,
        transportRequirements:""
    },
    {
        id: '3',
        unit: 'STGPW',
        typeOfProject: 'Retail',
        noOfKeyResourcesNeeded:3,
        noOfPcsRequired:3,
        projectSpecificSoftwareRequired:"no",
        servicePriority:"no",
        recoveryTimelines:"no",
        primaryLocation:"Hyderabad",
        relocationLocation:"Chennai",
        primaryBuilding:"B2",
        relocationBuilding:"B2",
        keyContact:"9398491296",
        backupKeyContact:"9848012328",
        remarks:"location change",
        dataReviewedBy:"",
        shiftStartTime:"",
        isWorkFromHomeAvl:false,
        eccAccomadationNeeded:false,
        transportRequirements:""
    }
]


export class UsersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: userDetailValues,
            addUserData: {
               unit: '',
                typeOfProject: '',
                noOfKeyResourcesNeeded:0,
                noOfPcsRequired:0,
                projectSpecificSoftwareRequired:"",
                servicePriority:"",
                recoveryTimelines:"",
                primaryLocation:"",
                relocationLocation:"",
                primaryBuilding:"",
                relocationBuilding:"",
                keyContact:"",
                backupKeyContact:"",
                remarks:"",
                dataReviewedBy:"",
                shiftStartTime:"",
                isWorkFromHomeAvl:false,
                eccAccomadationNeeded:false,
                transportRequirements:""
            },
            editUserData: {
               
        unit: '',
        typeOfProject: '',
        noOfKeyResourcesNeeded:0,
        noOfPcsRequired:0,
        projectSpecificSoftwareRequired:"",
        servicePriority:"",
        recoveryTimelines:"",
        primaryLocation:"",
        relocationLocation:"",
        primaryBuilding:"",
        relocationBuilding:"",
        keyContact:"",
        backupKeyContact:"",
        remarks:"",
        dataReviewedBy:"",
        shiftStartTime:"",
        isWorkFromHomeAvl:false,
        eccAccomadationNeeded:false,
        transportRequirements:""
            },
            addUserOpen: false,
            editUserOpen: false,
            editUserId: 0,
            deleteUserId: 0,
        }
    }

    async componentDidMount() {
        // const getUsers = await fetch('http://localhost:4001/user')
        const users = getUsers()
        this.setState({ users: users })
    }

    // handleAddUserSubmit = (values, actions) => {
    //     postUser(values).then(() => {
    //         getUsers()
    //             .then(res => {
    //                 this.setState({
    //                     users: res,
    //                     addUserData: { ...this.state.addUserData },
    //                     addUserOpen: false,
    //                 })
    //                 actions.setSubmitting(false)
    //             })
    //             .catch(err => console.log(err))
    //     })
    // }


    handleAddUserSubmit = (values, actions) => {
        const newProject = {id:this.state.users.length,...values}
        this.setState({
            users:[...this.state.users,newProject],
            addUserData: { ...this.state.addUserData },
            addUserOpen: false,
        })
        actions.setSubmitting(false)
    }

    handleAddUserClick = () => {
        console.log("clicked")
        this.setState({
            addUserOpen: true,
        })
    }

    // handleEditUserClick = (row) => {
    //     console.log(row)
    //     const id = row.id
    //     console.log(id)
    //     getUserById(id)
    //         .then(res => {
    //             console.log(res)
    //             this.setState({
    //                 editUserOpen: true,
    //                 editUserId: id,
    //                 editUserData: { ...this.state.editUserData, ...res },
    //             })
    //         })
    //         .catch(err => console.log(err))
    // }


    handleEditUserClick = (row) => {
        console.log(row)
        const id = row.id
        console.log(id)

        const editUser = this.state.users.find(x => x.id === id)
        console.log(editUser)
        this.setState({
            editUserOpen: true,
            editUserId: id,
            editUserData:  editUser ,
        })

        
    }


    // handleEditUserSubmit = (values, action) => {
    //     putUser(values)
    //         .then(() => {
    //             getUsers()
    //                 .then(res => {
    //                     this.setState({
    //                         users: res,
    //                         editUserOpen: false,
    //                     })
    //                     action.setSubmitting(false)
    //                 })
    //                 .catch(err => console.log(err))
    //         })
    //         .catch(err => console.log(err))
    // }


    handleEditUserSubmit = (values, actions) => {
        console.log(values)
        const updatedProject = this.state.users.find(x =>x.id === values.id)
        const newe = {...updatedProject,values}
        console.log(newe)
        const ps = this.state.users
         ps[values.id-1] = values
        this.setState({
            users:[...ps],
            editUserOpen: false,
            
        })
        actions.setSubmitting(false)
    }

    // handleDeleteUserSubmit = (id) => {
    //     deleteBatchById(id)
    //         .then(() => {
    //             getUsers()
    //                 .then(res => {
    //                     this.setState({
    //                         users: res,
    //                     })
    //                 })
    //                 .catch(err => console.log(err))
    //         })
    //         .catch(err => console.log(err))
    // }


    handleDeleteUserSubmit = (id) => {
        const users = this.state.users.filter(x => x.id !== id)
        this.setState({users: users  })
    }
    

    handleCloseClick = (modelType) => {
        if (modelType === 'add user') {
            this.setState({
                addUserOpen: false,
            })
        } else {
            this.setState({
                editUserOpen: false,
            })
        }
    }

    render() {
        return (
            <div>
                <UserDetailsView
                    {...this.state}
                    tableData={this.state.users}
                    handleAddUserClick={this.handleAddUserClick}
                    handleAddUserSubmit={this.handleAddUserSubmit}
                    handleEditUserClick={this.handleEditUserClick}
                    handleEditUserSubmit={this.handleEditUserSubmit}
                    handleDeleteUserSubmit={this.handleDeleteUserSubmit}
                    handleCloseClick={this.handleCloseClick}
                />
            </div>
        )
    }
}
