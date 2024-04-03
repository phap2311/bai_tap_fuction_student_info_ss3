import React, { Component } from 'react';

export default class FStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            formData: { name: '', phone: '', email: '' },
            isEditing: false,
            selectedIndex: -1
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            formData: { ...prevState.formData, [name]: value }
        }));
    };

    handleSubmit = () => {
        const { name, phone, email } = this.state.formData;
        const { students, isEditing, selectedIndex } = this.state;

        if (!name || !phone || !email) {
            alert('Vui lòng nhập đủ thông tin.');
            return;
        }

        if (!/^\d+$/.test(phone)) {
            alert('Số điện thoại chỉ được chứa chữ số.');
            return;
        }

        const newStudent = { name, phone, email };
        const updatedStudents = [...students];

        if (isEditing && selectedIndex !== -1) {
            updatedStudents[selectedIndex] = newStudent;
        } else {
            updatedStudents.push(newStudent);
        }

        this.setState({
            students: updatedStudents,
            formData: { name: '', phone: '', email: '' },
            isEditing: false,
            selectedIndex: -1
        });
    };

    handleEdit = (index) => {
        const { students } = this.state;
        const studentToEdit = students[index];
        this.setState({
            formData: { ...studentToEdit },
            isEditing: true,
            selectedIndex: index
        });
    };

    handleDelete = (index) => {
        const { students } = this.state;
        this.setState({ students: students.filter((student, i) => i !== index) });
    };

    render() {
        const { students, formData, isEditing } = this.state;

        return (
            <div className="App">
                <h1>Danh sách sinh viên</h1>
                <div className="form-container">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={this.handleChange} />
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" value={formData.phone} onChange={this.handleChange} />
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" value={formData.email} onChange={this.handleChange} />
                    {isEditing ? (
                        <button onClick={this.handleSubmit}>Update</button>
                    ) : (
                        <button onClick={this.handleSubmit}>Submit</button>
                    )}
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.phone}</td>
                            <td>{student.email}</td>
                            <td>
                                <button onClick={() => this.handleEdit(index)}>Edit</button>
                                <button onClick={() => this.handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
