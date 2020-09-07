import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import "../styles/TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
require('dotenv').config();

function TweetBox() {
  // const [tweetMessage, setTweetMessage] = useState("");
  const history = useHistory()
  const [body, setBody] = useState("")
  const [tweet, setTweet] = useState("")
  useEffect(() => {
    if(body) {
        fetch("http://localhost:5000/post/createpost", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            },
            body: JSON.stringify({body})
        })
        .then(res => res.json())
        .then(data => {
            //check for error show toast
            console.log('post created successfully')
            history.push('/')
        })
        .catch(err => console.log(err)) 
    }
},[tweet])


  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder="What's happening?" />
        </div>
        <Button onClick={() => setTweet({body})} type="submit" className="tweetBox__tweetButton" >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
