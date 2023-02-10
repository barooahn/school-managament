"use client";
import React, { useState } from "react";

interface Payment {
	name: string;
	amount: number;
	date: string;
}

const PaymentProcessing: React.FC = () => {
	const [payments, setPayments] = useState<Payment[]>([]);
	const [newPayment, setNewPayment] = useState<Payment>({
		name: "",
		amount: 0,
		date: "",
	});

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setNewPayment({ ...newPayment, [name]: value });
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setPayments([...payments, newPayment]);
		setNewPayment({
			name: "",
			amount: 0,
			date: "",
		});
	};

	return (
		<div>
			<h1>Payment Processing System</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						name='name'
						value={newPayment.name}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='amount'>Amount:</label>
					<input
						type='number'
						name='amount'
						value={newPayment.amount}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='date'>Date:</label>
					<input
						type='date'
						name='date'
						value={newPayment.date}
						onChange={handleInputChange}
					/>
				</div>
				<button type='submit'>Add Payment</button>
			</form>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Amount</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{payments.map((payment, index) => (
						<tr key={index}>
							<td>{payment.name}</td>
							<td>{payment.amount}</td>
							<td>{payment.date}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PaymentProcessing;
