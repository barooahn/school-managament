"use client";
import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const PREFIX = "NavBar";

const classes = {
	root: `${PREFIX}-root`,
	title: `${PREFIX}-title`,
};

const Root = styled("div")(({ theme }) => ({
	[`&.${classes.root}`]: {
		flexGrow: 1,
	},
	[`&.${classes.title}`]: {
		flexGrow: 1,
		textAlign: "center",
	},
}));

const NavBar = () => {
	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						My Education Platform
					</Typography>
					<Link href='/schoolManagement/classScheduling'>
						<Button color='inherit'>
							Class Scheduling System
						</Button>
					</Link>
					<Link href='schoolManagement/communicationCollaboration'>
						<Button color='inherit'>
							Communication and Collaboration Tools
						</Button>
					</Link>
					<Link href='schoolManagement/learningManagementSystem'>
						<Button color='inherit'>
							Learning Management System
						</Button>
					</Link>
					<Link href='schoolManagement/paymentProcessing'>
						<Button color='inherit'>
							Payment Processing System
						</Button>
					</Link>
					<Link href='schoolManagement/reportingAnalytics'>
						<Button color='inherit'>
							Reporting and Analytics
						</Button>
					</Link>
					<Link href='schoolManagement/studentManagement'>
						<Button color='inherit'>
							Student Management System
						</Button>
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
