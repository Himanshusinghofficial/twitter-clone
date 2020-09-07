import React, {useState, useEffect, useContext} from 'react';
import {userContext} from '../../App'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Explore() {

  const [data, setData] = useState([])
    const {state, dispatch} = useContext(userContext)
    useEffect(() => {
        fetch('http://localhost:5000/post/allpost', {
            headers: {
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            }
        })
        .then(res => res.json())
        .then(result => {
            // console.log(result)
            setData(result.posts)
        })
    },[])


    const likePost = (id) => {
      fetch('http://localhost:5000/post/likes', {
          method:"put",
          headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer "+localStorage.getItem("jwt")
          },
          body:JSON.stringify({
              postId: id
          })
      })
      .then(res => res.json())
      .then(result => {
          // console.log(result)
          const newData = data.map(item => {
              if(item._id === result._id) {
                  return result;
              } else {
                  return item
              }
          })
          setData(newData)
      })
      .catch(err => {
          console.log(err)
      })
  }

  const putComment = (text, postId) => {
      fetch('http://localhost:5000/post/comment', {
          method:"put",
          headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer "+localStorage.getItem("jwt")
          },
          body:JSON.stringify({
              text,
              postId
          })
      })
      .then(res => res.json())
      .then(result => {
          // console.log(result)
          const newData = data.map(item => {
              if(item._id === result._id) {
                  return result;
              } else {
                  return item
              }
          })
          setData(newData)
      })
      .catch(err => {
          console.log(err)
      })
  }

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    {
      data.map(item => {
        return (
          <Card style={{maxWidth:"1000px", margin:"35px auto"}} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {item.postedBy.name[0]}
                </Avatar>
              }
              title={item.postedBy.name}
              subheader="September 14, 2016"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.body}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                {item.likes.length} <FavoriteIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        )
      })
    }
    </>
  );
}
