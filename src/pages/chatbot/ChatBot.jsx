import React from 'react'
import axios from 'axios'   
const ChatBot = () => {
    
let data = JSON.stringify({
  "prompt": "how to grow cabbage?"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://127.0.0.1:5000/generate',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
  return (
    <div>
      hello world!
    </div>
  )
}

export default ChatBot
