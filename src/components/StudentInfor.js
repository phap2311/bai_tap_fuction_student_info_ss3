import {Component, useState} from "react";

export default class StudentInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listStudent: [
                {
                    id: 1,
                    name: 'dat',
                    phone: '012345614',
                    email: 'dat@gg'
                },
                {
                    id: 2,
                    name: 'dung',
                    phone: '012345614',
                    email: 'dung@gg'
                },
                {
                    id: 3,
                    name: 'nhat',
                    phone: '012345614',
                    email: 'nhat@gg'
                },
                {
                    id: 4,
                    name: 'phap',
                    phone: '012345614',
                    email: 'phap@gg'
                }
            ],
            form  : {
                name: "",
                phone: "",
                email: ""
            },
            indexSelect: -1,
            isValid: false,
            idCounter: 5

        }
    }

    handleChange = (event) => {
        this.setState((state) => {
            const form = state.form
            form[event.state.name] = event.target.value
            return {form}

        }, () => this.checkInvalidForm())
    }
    handleSelect = (studentSelect, index) => {
        this.setState({
            form: JSON.stringify(studentSelect),
            indexSelect: index
        })
    }
    checkInvalidForm = () => {
        const {name, phone, email} = this.state.form
        const value = name && phone && email
        this.setState({
            isValid: value
        })
    }
    handleSubmit = () => {
        if (this.state.isValid) {
            const {listStudent, indexSelect} = this.state
            const newStudent = {
                id: this.state.id,
                name: this.state.name,
                age: this.state.phone,
                address: this.state.email
            };

            if (this.state.indexSelect > -1) {
                const newList = [...listStudent];
                newList.splice(this.state.indexSelect, 1, newStudent);
                this.setState({listStudent: newStudent})
            } else {
                const newList = [...listStudent];
                newList.push(newStudent)
                this.setState({listStudent: newStudent});
            }

        }
    }

    render() {
        const {studentList, form} = this.state
        return (
            <>
                <div>
                    <div>
                        <h1>Student List</h1>
                        <div>
                            <label>Name: </label>
                            <input name="name" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Phone: </label>
                            <input type="number" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Email: </label>
                            <input name="email" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <button onClick={this.handleSubmit}>Submit</button>
                        <table>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.listStudent.map(student =>
                                    <tr key={student.id}>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.phone}</td>
                                        <td>{student.email}</td>
                                        <td><a><button onClick={this.handleSelect}>update</button></a></td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}