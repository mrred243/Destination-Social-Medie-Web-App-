import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles(theme => ({
	appBar: {
		borderRadius: 15,
		margin: "30px 0",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "10px 50px",
	},
	heading: {
		color: "#4e54c8",
		textDecoration: "none",
	},
	image: {
		marginLeft: "15px",
	},
	toolbar: {
		display: "flex",
		justifyContent: "flex-end",
		width: "300px",
	},
	profile: {
		display: "flex",
		justifyContent: "space-between",
		width: "400px",
	},
	userName: {
		display: "flex",
		alignItems: "center",
	},
	brandContainer: {
		display: "flex",
		alignItems: "center",
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	},
	[theme.breakpoints.down("sm")]: {
		appBar: {
			flexDirection: "column",
		},
		toolbar: {
			justifyContent: "center",
			marginTop: "20px",
		},
	},

	[theme.breakpoints.down("xs")]: {
		profile: {
			width: "auto",
		},
		purple: {
			marginRight: "10px",
		},
		userName: {
			marginRight: "10px",
		},
		heading: {
			display: "none",
		},
	},
}));