"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ReportingAndAnalytics = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		setLoading(true);
		axios.get("https://my-api.com/reports")
			.then((res) => {
				setData(res.data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<h1>Reporting and Analytics</h1>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			{/* {data.length > 0 && (
				<table>
					<thead>
						<tr>
							<th>Student Name</th>
							<th>Course Completed</th>
							<th>Score</th>
						</tr>
					</thead>
					<tbody>
						{data.map((d) => (
							<tr key={d.student_id}>
								<td>{d.student_name}</td>
								<td>{d.course_completed}</td>
								<td>{d.score}</td>
							</tr>
						))}
					</tbody>
				</table>
			)} */}
		</div>
	);
};

export default ReportingAndAnalytics;
