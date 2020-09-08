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
        fetch('/post/allpost', {
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
      fetch('/post/likes', {
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
      fetch('/post/comment', {
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
    <Card style={{maxWidth:"1000px", margin:"35px auto", border: "1px solid black"}} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Rahul"
        subheader="September 5, 2020"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          10 <FavoriteIcon />
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

    <Card style={{maxWidth:"1000px", margin:"35px auto", border: "1px solid black"}} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            V
          </Avatar>
        }
        title="vikash"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.          </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          12 <FavoriteIcon />
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
    <Card style={{maxWidth:"1000px", margin:"35px auto", border: "1px solid black"}} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            V
          </Avatar>
        }
        title="vishal"
        subheader="August 14, 2020"
      />

      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
         But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
      </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          15 <FavoriteIcon />
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
  </>
  )
}
