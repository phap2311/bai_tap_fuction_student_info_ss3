import { useState } from "react";

export default function FunctionStudent() {
    const [list, setList] = useState([
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
    ]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [index, setIndex] = useState(-1);

    const handleEdit = (selectedIndex) => {
        const student = list[selectedIndex];
        setName(student.name);
        setPhone(student.phone);
        setEmail(student.email);
        setIndex(selectedIndex);
    };

    return (
        <>
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
                {list.map((student, idx) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.phone}</td>
                        <td>{student.email}</td>
                        <td>
                            <button onClick={() => handleEdit(idx)}>Update</button>
                        </td>
                    </tr>
                ))}
                <tr>
                    <td></td>
                    <td>
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                    </td>
                    <td>
                        <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />
                    </td>
                    <td>
                        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </td>
                    <td>
                        <button
                            onClick={() => {
                                if (index !== -1) {
                                    const updatedList = [...list];
                                    updatedList[index] = {
                                        ...updatedList[index],
                                        name: name,
                                        phone: phone,
                                        email: email
                                    };
                                    setList(updatedList);
                                    setName("");
                                    setPhone("");
                                    setEmail("");
                                    setIndex(-1);
                                }
                            }}
                        >
                            Save
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
}