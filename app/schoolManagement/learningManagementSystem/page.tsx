"use client";
import React, { useState, useEffect } from "react";

interface Course {
	id: number;
	title: string;
	description: string;
	instructor: string;
	students: number;
}

const courses: Course[] = [
	{
		id: 1,
		title: "Introduction to JavaScript",
		description: "Learn the basics of JavaScript programming.",
		instructor: "John Doe",
		students: 200,
	},
	{
		id: 2,
		title: "React Fundamentals",
		description:
			"Learn how to build dynamic web applications using React.",
		instructor: "Jane Doe",
		students: 300,
	},
	{
		id: 3,
		title: "Advanced CSS",
		description: "Learn advanced CSS techniques for styling websites.",
		instructor: "Jim Smith",
		students: 400,
	},
];

const LMS = () => {
	const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

	const handleCourseSelection = (course: Course) => {
		setSelectedCourse(course);
	};

	return (
		<div>
			<h1>Learning Management System</h1>
			<h2>Available Courses</h2>
			<ul>
				{courses.map((course) => (
					<li key={course.id}>
						<button
							onClick={() =>
								handleCourseSelection(course)
							}>
							{course.title}
						</button>
					</li>
				))}
			</ul>
			{selectedCourse && (
				<div>
					<h2>{selectedCourse.title}</h2>
					<p>Instructor: {selectedCourse.instructor}</p>
					<p>Students: {selectedCourse.students}</p>
					<p>{selectedCourse.description}</p>
				</div>
			)}
		</div>
	);
};

export default LMS;
