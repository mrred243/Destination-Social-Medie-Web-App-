import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from 'react-redux'

import Post from "./Post/Post";

import useStyles from "./styles";

const Posts = ({ setCurrentId, }) => {
  const classes = useStyles(); 
  const posts = useSelector(state =>  state.posts)

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems='stretch' spacing={3}>
        {
          posts.map((item) => (
            <Grid key={item._id} item xs={12} sm={6}>
              <Post setCurrentId={setCurrentId} post={item}/>
            </Grid>
          ))
        }
      </Grid>
    )
  );
};

export default Posts;
