// import logo from './logo.svg';
import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col, Button, Form } from 'react-bootstrap';
import './App.css';
import {Link, Route, Switch, useHistory} from 'react-router-dom';
import moment from 'moment'; 

function App() {

  let [post, post_change] = useState([
    {id : 2, title : "third posting", content : "3. 이것은 첫번째 포스팅 내용입니다.", date : "May 18, 2021"}, 
    {id : 1, title : "second posting", content : "2. 이것은 첫번째 포스팅 내용입니다.", date : "Mar 17, 2021"}, 
    {id : 0, title : "first posting", content : "1. 이것은 첫번째 포스팅 내용입니다.", date : "Jan 16, 2021"}
  ]);

  // let [title, title_change] = useState(['My third post', 'This is my second day blog title nice good ', 'This is my first day blog title nice good, This is my']);
  // let [content, content_change] = useState(
  //   ['3. 오늘은 나의 블로그를 세번째 만든 날이다. 리엑트를 이용해서 만들었다. 이 작업이 술술 풀리길 오늘은 나의 블로그를 처음으로 만든 날이다. 리엑트를 이용해서 만들었다. 이 작업이 술술 풀리길 오늘은 나의 블로그를 처음으로 만든 날이다. 리엑트를 이용해서 만들었다. 이 작업이 술술 풀리길', 
  //    '2. 오늘은 나의 블로그를 두번째로 만든 날이다. 리엑트를 이용해서 만들었다. 이 작업이 술술 풀리길 오늘은 나의 블로그를 처음으로 만든 날이다. 리엑트를 이용해서 만들었다. 이 작업이 술술 풀리길 오늘은 나의 블로그를 처음으로 만든 날이다. 리엑트를 이용해서 만들었다. 이 작업이 술술 풀리길',
  //    '1. 오늘은 나의 블로그를 처음 만든 날이다. 리엑트를 이용해서 만들었다. 이 작업이 술술 풀리길 오늘은 나의 블로그를 처음으로 만든 날이다. 리엑트를 이용해서 만들었다. 이 작업이 술술 풀리길 오늘은 나의 블로그를 처음으로 만든 날이다. 리엑트를 이용해서 만들었다. 이 작업이 술술 풀리길'
  //   ]);
  // let [date, date_change] = useState(['July 18, 2021', 'July 17, 2021', 'July 16, 2021']);
  let [postshow, postshow_change] = useState(0);
  let [input_title, input_title_change] = useState('');
  let [input_content, input_content_change] = useState('');
  let input_form = {id : 0, title : "", content : "", date : ""};
  let history = useHistory();
  let today = moment().format("MMM DD, YYYY");

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              {/* <Nav.Link to="/">List</Nav.Link> */}
              <Nav.Link as={Link} to="/input"><Button variant="warning">New posting</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Container className="frame"> */}
        <Row className="frame">
          <Col className="list" xl={3} lg={4}>
            <h4>😎 List <span>({today})</span></h4>
            {/* <Title_Compo title={title} date={date}></Title_Compo> */}
            {
              post.map(function(a, i){
                return(
                  <div onClick={()=>{ postshow_change(i) }}>
                    <h5>{a.title}</h5>
                    <p>{a.date}</p> 
                  </div>
                )
              })
            }
          </Col>

          <Route exact path="/">  
            <Col className="content" xl={7} lg={8}>
              <h4>{post[postshow].title}</h4>
              <h6>{post[postshow].date}</h6>
              <br/>
              <br/>
              <p>{post[postshow].content}</p>
            </Col>
          </Route>

          <Route path="/input">
            <Col className="content" xl={7} lg={8}>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Title</Form.Label>
                  <Form.Control placeholder="Title here." onChange={ (e)=>{ input_title_change(e.target.value) } }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Content</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Content here." onChange={ (e)=>{ input_content_change(e.target.value) } }/>
                </Form.Group>
                <Button variant="primary" onClick={ ()=>{

                  input_form.id = post[0].id + 1; 
                  input_form.title = input_title;
                  input_form.content = input_content;
                  input_form.date = today;
                  var Copy_post = [...post];
                  
                

                  if (input_title == "" || input_content == ""){
                    alert('Please fill all two fields!');    
                  } else {
                    Copy_post.unshift(input_form); 
                    post_change(Copy_post); 
                    history.push('/');
                  }
                } }>Submit</Button>
                <Button variant="primary" as={Link} to="/">Back</Button>
              </Form>
            </Col>
          </Route>











          <Col className="extra" xl={2}>기타</Col>
        </Row>
      {/* </Container> */}
    </div>
  );
} // App

// function Title_Compo(props) {
    
     
//   return(

//           props.title.map(function(a){
            
//           <p>post</p> 
          
//         })
      
//         )
    
//       // <p>{props.title[0]}<span> {props.date[0]}</span></p> 
    
// }



export default App;
