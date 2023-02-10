"use client";
import React, { useState } from "react";

const CommunicationTools = () => {
	const [selectedTool, setSelectedTool] = useState<
		"email" | "chat" | "discussionForum"
	>("email");
	const [message, setMessage] = useState("");

	const handleToolSelection = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSelectedTool(
			event.target.value as "email" | "chat" | "discussionForum"
		);
	};

	const handleMessageChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setMessage(event.target.value);
	};

	return (
		<div>
			<h1>Communication and Collaboration Tools</h1>
			<div>
				<label htmlFor='tool'>Select Tool:</label>
				<select
					id='tool'
					value={selectedTool}
					onChange={handleToolSelection}>
					<option value='email'>Email</option>
					<option value='chat'>Chat</option>
					<option value='discussionForum'>
						Discussion Forum
					</option>
				</select>
			</div>
			<div>
				<label htmlFor='message'>Message:</label>
				<textarea
					id='message'
					value={message}
					onChange={handleMessageChange}
				/>
			</div>
			<button>Send</button>
		</div>
	);
};

export default CommunicationTools;
