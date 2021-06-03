import React, { useEffect, useState } from "react";
import { Grow, Container, Grid } from "@material-ui/core";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

import { getPosts } from "../../actions/posts";

import useStyle from "./styles";
import { useDispatch } from "react-redux";

const Home = () => {
	const [currentId, setCurrentId] = useState(null);
	const dispatch = useDispatch();
	const classes = useStyle();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<Grow in>
			<Container>
				<Grid
					className={classes.mainContainer}
					container
					justify='space-between'
					alignItems='stretch'
					spacing={3}>
					<Grid item xs={12} sm={9} md={7}>
						<Posts setCurrentId={setCurrentId} />
					</Grid>
					<Grid item xs={12} sm={9} md={4}>
						<Form currentId={currentId} setCurrentId={setCurrentId} />
					</Grid>
				</Grid>
			</Container>
		</Grow>
	);
};

export default Home;
