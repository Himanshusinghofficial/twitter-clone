import React from 'react';
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
import '../../styles/Profile.css'
import twitterLogo from '../../twitter.svg';

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


const Profile = () => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <div>
        <section class="text-gray-700 body-font">
        <div class="container-fluid flex flex-col">
            <div class="lg:w-100 mx-auto">
            <div class="rounded-lg h-70 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="https://i0.wp.com/cartologytravel.com/wp-content/uploads/2017/11/Header-Image-1800-x-600.png?ssl=1"/>
            </div>
            <div class="flex flex-col sm:flex-row -mt-20">
                <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                    <img src="https://i0.wp.com/cartologytravel.com/wp-content/uploads/2017/11/Header-Image-1800-x-600.png?ssl=1"></img>
                </div>
                <div class="flex flex-col items-left text-left ml-16">
                    <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Jone Doe</h2>
                    <p class="text-base text-gray-600">JohnDoe</p>
                    <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                    <div class="inline-flex inline-flex-col items-left text-left">
                    <p class="text-base text-gray-600">25 Followers</p><p class="text-base text-gray-600 ml-16">100 Followings</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <Card style={{maxWidth:"1000px", margin:"35px auto"}} className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
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
      </div>
    )
}

export default Profile;