import React from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap'

function App() {

const getData = () => {
  console.log("Get Request");
  // axios({
  //   method:'get',
  //   url:'https://jsonplaceholder.typicode.com/posts',
  //   params : {
  //     _limit:5
  //   }
  // })
  // .then((resp) => {
  //     console.log(resp.data)
  //     resp.data.map((item) => {
  //       console.log(item.id)
  //     })
    
  // })


  
  // axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5').then((resp) => resp.data.map((item) => 
  // console.log(item.id)))



  axios('https://jsonplaceholder.typicode.com/posts?_limit=5').then((resp) => console.log(resp))
}


const postData = () => {
  console.log("Post Request");
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title:"neha"
    }
  )
  .then((resp) => {
      console.log(resp)
      
    
  })

  



}
const putData = () => {
  console.log("Put Request");
  axios.put('https://jsonplaceholder.typicode.com/posts/1', 
  {
    title:" new put hello",
  }).then((resp) => console.log(resp.data))
}

const patchData = () => {
  console.log("Patch Request");
  axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
    title:'new title'
  }).then((resp) => console.log(resp.data))
}
const deleteData = () => {
  console.log("Delete Request");
  axios.delete('https://jsonplaceholder.typicode.com/posts/1')
}

axios.interceptors.request.use((request) => {
  console.log("interceptor request");
  if (request.method === "get"){
  request.headers.title = "neha joshi";
  }
  return request;
})
axios.interceptors.response.use((response) =>{
  console.log("interceptor response");
  return response;
})



  return(
    <div style={{textAlign:'center', paddingTop:'3rem', paddingBottom:'3rem' , backgroundColor:'black'}}>
      <Button type="button" style={{marginRight:'2rem', marginLeft:'2rem'}} variant="primary" onClick={() => getData()}>Get</Button>
      <Button type="button" style={{marginRight:'2rem', marginLeft:'2rem'}} variant="success" onClick={() => postData()}>Post</Button>
      <Button type="button" style={{marginRight:'2rem', marginLeft:'2rem'}} variant="warning" onClick={() => putData()}>Put</Button>
      <Button type="button" style={{marginRight:'2rem', marginLeft:'2rem'}} variant="info" onClick={() => patchData()}>Patch</Button>
      <Button type="button" style={{marginRight:'2rem', marginLeft:'2rem'}} variant="danger" onClick={() => deleteData()}>Delete</Button>
   
    </div>
  )
}

export default App;