"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Student {
	name: string;
	email: string;
	class: string;
	_id?: string;
}

const StudentManagement: React.FC = () => {
	const [students, setStudents] = useState<Student[]>([]);
	const [newStudent, setNewStudent] = useState<Student>({
		name: "",
		email: "",
		class: "",
	});

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get<Student[]>("/api/students");
			setStudents(result.data);
		};
		fetchData();
	}, []);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setNewStudent({ ...newStudent, [name]: value });
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const result = await axios.post<Student>("/api/students", newStudent);
		setStudents([...students, result.data]);
		setNewStudent({ name: "", email: "", class: "" });
	};

	return (
		<div>
			<h1>Student Management System</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						name='name'
						value={newStudent.name}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						name='email'
						value={newStudent.email}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='class'>Class:</label>
					<input
						type='text'
						name='class'
						value={newStudent.class}
						onChange={handleInputChange}
					/>
				</div>
				<button type='submit'>Add Student</button>
			</form>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Class</th>
					</tr>
				</thead>
				<tbody>
					{students.map((student) => (
						<tr key={student._id}>
							<td>{student.name}</td>
							<td>{student.email}</td>
							<td>{student.class}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default StudentManagement;
