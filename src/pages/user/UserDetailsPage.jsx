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
        email: 'venky@gmail.com',
        password: '12345',
        emailConfirmed: true,
        role: 'Admin',
    },
    {
        id: '2',
        email: 'venky@gmail.com',
        password: '12345',
        emailConfirmed: true,
        role: 'Admin',
    },
    {
        id: '3',
        email: 'venky@gmail.com',
        password: '12345',
        emailConfirmed: true,
        role: 'Admin',
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




export const userDetailValues = [
    {
        id: '',
        email: '',
        password: '',
        emailConfirmed: true,
        role: '',
    },
]


export class UsersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: userDetailValues,
            addUserData: {
                email: '',
                password: '',
                emailConfirmed: true,
                roles: [''],
                role: '',
            },
            editUserData: {
                email: '',
                password: '',
                emailConfirmed: true,
                roles: [''],
                role: '',
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

    handleAddUserSubmit = (values, actions) => {
        postUser(values).then(() => {
            getUsers()
                .then(res => {
                    this.setState({
                        users: res,
                        addUserData: { ...this.state.addUserData },
                        addUserOpen: false,
                    })
                    actions.setSubmitting(false)
                })
                .catch(err => console.log(err))
        })
    }

    handleAddUserClick = () => {
        console.log("clicked")
        this.setState({
            addUserOpen: true,
        })
    }

    handleEditUserClick = (row) => {
        console.log(row)
        const id = row.id
        console.log(id)
        getUserById(id)
            .then(res => {
                console.log(res)
                this.setState({
                    editUserOpen: true,
                    editUserId: id,
                    editUserData: { ...this.state.editUserData, ...res },
                })
            })
            .catch(err => console.log(err))
    }

    handleEditUserSubmit = (values, action) => {
        putUser(values)
            .then(() => {
                getUsers()
                    .then(res => {
                        this.setState({
                            users: res,
                            editUserOpen: false,
                        })
                        action.setSubmitting(false)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    handleDeleteUserSubmit = (id) => {
        deleteBatchById(id)
            .then(() => {
                getUsers()
                    .then(res => {
                        this.setState({
                            users: res,
                        })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
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
