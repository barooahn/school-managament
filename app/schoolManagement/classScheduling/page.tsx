"use client";
import React, { useEffect, useState } from "react";

interface Class {
	subject: string;
	instructor: string;
	startTime: string;
	endTime: string;
	location: string;
}

const ClassScheduling: React.FC = () => {
	const [classes, setClasses] = useState<Class[]>([]);
	const [newClass, setNewClass] = useState<Class>({
		subject: "",
		instructor: "",
		startTime: "",
		endTime: "",
		location: "",
	});

	const sampleClasses = [
		{
			subject: "Mathematics",
			instructor: "John Doe",
			startTime: "10:00 AM",
			endTime: "11:00 AM",
			location: "Room 101",
		},
		{
			subject: "English",
			instructor: "Jane Doe",
			startTime: "11:00 AM",
			endTime: "12:00 PM",
			location: "Room 102",
		},
	];

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setNewClass({ ...newClass, [name]: value });
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setClasses([...classes, newClass]);
		setNewClass({
			subject: "",
			instructor: "",
			startTime: "",
			endTime: "",
			location: "",
		});
	};

	useEffect(() => {
		setClasses(sampleClasses);
	}, []);

	return (
		<div>
			<h1>Class Scheduling System</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='subject'>Subject:</label>
					<input
						type='text'
						name='subject'
						value={newClass.subject}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='instructor'>Instructor:</label>
					<input
						type='text'
						name='instructor'
						value={newClass.instructor}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='startTime'>Start Time:</label>
					<input
						type='time'
						name='startTime'
						value={newClass.startTime}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='endTime'>End Time:</label>
					<input
						type='time'
						name='endTime'
						value={newClass.endTime}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='location'>Location:</label>
					<input
						type='text'
						name='location'
						value={newClass.location}
						onChange={handleInputChange}
					/>
				</div>
				<button type='submit'>Add Class</button>
			</form>
			<table>
				<thead>
					<tr>
						<th>Subject</th>
						<th>Instructor</th>
						<th>Start Time</th>
						<th>End Time</th>
						<th>Location</th>
					</tr>
				</thead>
				<tbody>
					{classes.map((classData, index) => (
						<tr key={index}>
							<td>{classData.subject}</td>
							<td>{classData.instructor}</td>
							<td>{classData.startTime}</td>
							<td>{classData.endTime}</td>
							<td>{classData.location}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default ClassScheduling;
