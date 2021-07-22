// import logo from './logo.svg';
import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col, Button, Form } from 'react-bootstrap';
import './App.css';
import {Link, Route, Switch, useHistory} from 'react-router-dom';
import moment from 'moment'; 
// import jquery from 'jquery';
// import $ from 'jquery';

function App() {

  let [comment_array, comment_array_change] = useState([
    [{visitor : "visitor12", date : "Jan 0, 2021", comment : "Good posting12"}],
    [{visitor : "visitor11", date : "Jan 0, 2021", comment : "Good posting11"}],
    [{visitor : "visitor10", date : "Jan 0, 2021", comment : "Good posting10"}],
    [{visitor : "visitor9", date : "Jan 0, 2021", comment : "Good posting9"}],
    [{visitor : "visitor8", date : "Jan 0, 2021", comment : "Good posting8"}],
    [{visitor : "visitor7", date : "Jan 0, 2021", comment : "Good posting7"}],
    [{visitor : "visitor6", date : "Mar 3, 2021", comment : "Good posting6"}, {visitor : "visitor6-2", date : "Feb 2, 2021", comment : "Good posting6-2"}, {visitor : "visitor6-3", date : "Jan 1, 2021", comment : "Good posting6-3"}],
    [{visitor : "visitor5", date : "Feb 2, 2021", comment : "Good posting5"}, {visitor : "visitor5-2", date : "Jan 21 2021", comment : "Good posting5-2"}],
    [{visitor : "visitor4", date : "Jan 1, 2021", comment : "Good posting4"}],
    [{visitor : "visitor3", date : "Jan 1, 2021", comment : "Good posting3"}],
    [{visitor : "visitor2", date : "Jan 1, 2021", comment : "Good posting2"}], 
    [{visitor : "visitor1", date : "Jan 1, 2021", comment : "Good posting1"}]
  ]);

  let [post, post_change] = useState([
    {id : 11, title : "twelveth posting", content : "12. 이것은 열두번째 포스팅 내용입니다.", date : "Jan 16, 2021", update_date : "", thumb : 0},
    {id : 10, title : "eleventh posting", content : "11. 이것은 열한번째 포스팅 내용입니다.", date : "Jan 16, 2021", update_date : "", thumb : 0},
    {id : 9, title : "tenth posting", content : "10. 이것은 열번째 포스팅 내용입니다.", date : "Jan 16, 2021", update_date : "", thumb : 0},
    {id : 8, title : "ninth posting", content : "9. 이것은 아홉번째 포스팅 내용입니다.", date : "Jan 16, 2021", update_date : "", thumb : 0},
    {id : 7, title : "eighth posting", content : "8. 이것은 여덟번째 포스팅 내용입니다.", date : "Jan 16, 2021", update_date : "", thumb : 0},
    {id : 6, title : "seventh posting", content : "7. 이것은 일곱번째 포스팅 내용입니다.", date : "Jan 16, 2021", update_date : "", thumb : 0},
    {id : 5, title : "sixth posting", content : "6. 이것은 여섯번째 포스팅 내용입니다. 이것은 세번째 포스팅 내용입니다.이것은 세번째 포스팅 내용입니다.이것은 세번째 포스팅 내용입니다.이것은 세번째 포스팅 내용입니다.이것은 세번째 포스팅 내용입니다.이것은 세번째 포스팅 내용입니다.이것은 세번째 포스팅 내용입니다.이것은 세번째 포스팅 내용입니다.이것은 세번째 포스팅 내용입니다.이것은 세번째 포스팅 내용입니다.", date : "May 18, 2021", update_date : "", thumb : 0}, 
    {id : 4, title : "fifth posting", content : "5. 이것은 다섯번째 포스팅 내용입니다.", date : "Mar 17, 2021", update_date : "", thumb : 0}, 
    {id : 3, title : "fourth posting", content : "4. 이것은 네번째 포스팅 내용입니다.", date : "Jan 16, 2021", update_date : "", thumb : 0},
    {id : 2, title : "third posting", content : "3. 이것은 세번째 포스팅 내용입니다.", date : "Jan 16, 2021", update_date : "", thumb : 0},
    {id : 1, title : "second posting", content : "2. 이것은 두번째 포스팅 내용입니다.", date : "Jan 16, 2021", update_date : "", thumb : 0},
    {id : 0, title : "first posting", content : "1. 이것은 첫번째 포스팅 내용입니다.", date : "Jan 16, 2021", update_date : "", thumb : 0}
  ]);

  let [postshow_page, postshow_page_change] = useState(0);

  let [listshow_num, listshow_num_change] = useState(3);
  let [liststart_page, liststart_page_change] = useState(0);
  let [listshow, listshow_change] = useState(post.slice(0, 3));

  let [islistshort, islistshort_change] = useState(true);
  let [listbutton_name, listbutton_name_change] = useState('More')

  let [input_title, input_title_change] = useState('');
  let [input_content, input_content_change] = useState('');
  let [comment_visitor, comment_visitor_change] = useState('visitor');
  let [comment_content, comment_content_change] = useState('');
  let [comment_open, comment_open_change] = useState(false);
  let [comment_input_open, comment_input_open_change] = useState(false);
  
  let input_form = {id : "", title : "", content : "", date : "", update_date : "" , thumb : 0};
  let comment_form = {visitor : "", date : "", comment : ""};
  let history = useHistory();
  let today = moment().format("MMM DD, YYYY");

  
  let [listcolor, listcolor_change] = useState({color : "black"});

  return (
    <div className="App">
      <Navbar expand="lg" id="navbar">
        <Container>
          <Navbar.Brand href="#home">My Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/"><Button variant="warning">Home</Button></Nav.Link>
              {/* <Nav.Link to="/">List</Nav.Link> */}
              <Nav.Link as={Link} to="/input"><Button variant="warning">New posting</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="frame">
        <Row>
            <Col className="list" xl={3} lg={4}>


              <h4>😎 List <span>({today}) </span> 
                <Button variant="outline-warning" onClick={()=>{



                    if (islistshort == true){
                      liststart_page_change(0);
                      listshow_change(post);
                      listshow_num_change(post.length);
                      listbutton_name_change('Less')
                      islistshort_change(!islistshort);
                      // console.log(document.getElementsByClassName('select').length);
                      // document.getElementsByClassName('select')[2].style.color = '#ffc107';
                      // document.getElementsByClassName('selectspan')[postshow_page].style.color = 'black';
                    } else {
                      listshow_num_change(3);
                      liststart_page_change(postshow_page);
                      listshow_change(post.slice(postshow_page, postshow_page + 3));
                      listbutton_name_change('More')
                      islistshort_change(!islistshort);
                      // console.log(document.getElementsByClassName('select').length);
                    }
                  }}>{listbutton_name}</Button>
              </h4>
                {
                  listshow.map(function(a){
                    return(
                      <div onClick={()=>{ 

                        var showNum = post.indexOf(a);


                        postshow_page_change(showNum); 

                        if (islistshort == true){
                          liststart_page_change(showNum);
                          listshow_num_change(3);
                          listshow_change(post.slice(showNum, showNum + listshow_num));
                         
                        } else {
                          liststart_page_change(0);
                          listshow_num_change(post.length);
                          listshow_change(post);
                          List_change_color(post={post}, showNum);
                        }
                        comment_open_change(false); 
                        comment_input_open_change(false); 
                      }}>
                       
                        <h5 className="select"><span className="selectspan">▶ </span>{a.title}</h5>
                        <p>{a.date} {a.update_date}</p> 


                      </div>
                    )
                  })
                  
                  
                
                }
               
            </Col>
 
          <Route exact path="/">  
            <Col className="content" xl={7} lg={8}>
              {
                post.length === 0
                ? <h4>"No Postings!"</h4>
                : <div>
                    <h4>{post[postshow_page].title}</h4><br/>
                    <h6>{post[postshow_page].date} {post[postshow_page].update_date}</h6>
                    <h6>
                      <Button variant="outline-primary" as={Link} to="/Update">Update</Button>
                      <Button variant="outline-danger" onClick={()=>{
                        if (window.confirm('Are you sure you want to delete this post?')){
                          var Copy_post = [...post];
                          Copy_post.splice(postshow_page, 1);
                          post_change(Copy_post);
                          listshow_change(Copy_post.slice(0,  0 + listshow_num));
                          postshow_page_change(0);
                          var Copy_comment = [...comment_array];
                          Copy_comment.splice(postshow_page, 1);
                          comment_array_change(Copy_comment);
                          List_change_color(post={post}, 0);
                        } 
                      }}>Delete</Button>
                    </h6>
                    <br/><br/>
                    <p>{post[postshow_page].content}</p>
                    {/* <hr/> */}
                    <button onClick={()=>{
                      var Copy_post = [...post];
                      Copy_post[postshow_page].thumb++;
                      post_change(Copy_post);
                      }}>👍 {post[postshow_page].thumb}</button>
                      <hr/>
                    <p>
                      <Button onClick={()=>{ comment_open_change(!comment_open)}} variant="secondary">Comment : {comment_array[postshow_page].length}</Button>
                      <Button onClick={()=>{ comment_input_open_change(!comment_input_open)}} variant="secondary">+</Button>
                    </p>
                    {
                      comment_input_open === true
                      ? <Form>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control placeholder="Your nickname here." onChange={ (e)=>{ comment_visitor_change(e.target.value) } }/>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="Your comment here." onChange={ (e)=>{ comment_content_change(e.target.value) } }/>
                          </Form.Group>
                          <Button variant="outline-primary" onClick={ ()=>{

                            comment_form.visitor = comment_visitor;
                            comment_form.comment = comment_content;          
                            comment_form.date = today;

                            console.log(comment_array);

                            var Copy_comment = [...comment_array];
                            
                            if (comment_visitor === "" || comment_content === ""){
                              alert('Please fill all two fields!');    
                            } else {
                              Copy_comment[postshow_page].unshift(comment_form); 
                              comment_array_change(Copy_comment);
                              comment_visitor_change("");
                              comment_content_change("");
                              comment_open_change(true);
                              comment_input_open_change(false);
                            }
                          } }>Submit</Button>
                          <Button variant="outline-danger" onClick={()=>{ comment_input_open_change(false)}}>Cancel</Button>
                          <hr/>
                        </Form>
                      : null  
                    }
                    {
                      comment_open === true
                      ? <div>
                          <hr/>
                          {
                            comment_array[postshow_page].map(function(c, i){
                              return(
                                <div className="comment" key={i}>
                                  <h6>{c.comment}</h6>
                                  <p>{c.visitor} {c.date}</p>
                                  <hr/>
                                </div>
                              )
                            })
                          }  
                        </div>  
                      : null
                    } 
                    <br/>
                    <div><Button variant="outline-warning" onClick={()=>{
                      if(postshow_page > 0) {
                        postshow_page_change(postshow_page - 1);
                        if (islistshort == true) listshow_change(post.slice(postshow_page - 1, postshow_page - 1 + listshow_num));
                        else listshow_change(post);
                      } else alert("This is the first posting.");
                    }}>◀ Prev</Button> &nbsp; &nbsp; <Button variant="outline-warning" onClick={()=>{
                      if(postshow_page < (post.length - 1)){ 
                        postshow_page_change(postshow_page + 1);
                        if (islistshort == true) listshow_change(post.slice(postshow_page + 1, postshow_page + 1 + listshow_num));
                        else listshow_change(post);
                      } else alert("This is the last posting.");
                    }}>Next ▶</Button> </div>
                  </div>
              }
            </Col>
          </Route>

          <Route path="/input">
            <Col className="content" xl={7} lg={8}>
            <p>New posting</p>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Title</Form.Label>
                  <Form.Control placeholder="Title here." onChange={ (e)=>{ input_title_change(e.target.value) } }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Content</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Content here." onChange={ (e)=>{ input_content_change(e.target.value) } }/>
                </Form.Group>
                <Button variant="outline-primary" onClick={ ()=>{

                  input_form.id = post.length;
                  input_form.title = input_title;
                  input_form.content = input_content;
                  input_form.date = today;
                  var Copy_post = [...post];
                  var Copy_comment = [...comment_array];
                  
                  if (input_title === "" || input_content === ""){
                    alert('Please fill all two fields!');    
                  } else {
                    Copy_post.unshift(input_form); 
                    post_change(Copy_post);
                    
                    Copy_comment.unshift([]);
                    comment_array_change(Copy_comment);

                    postshow_page_change(0);
                    input_title_change("");
                    input_content_change("");
                    history.push('/');
                  }
                } }>Submit</Button>
                <Button variant="outline-danger" as={Link} to="/">Cancel</Button>
              </Form>
            </Col>
          </Route>

          <Route path="/Update">
            <Col className="content" xl={7} lg={8}>
              <p>Update posting</p>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Title</Form.Label>
                  <Form.Control key={post[postshow_page].title} defaultValue={post[postshow_page].title} onChange={ (e)=>{ input_title_change(e.target.value) } }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Content</Form.Label>
                  <Form.Control as="textarea" rows={5} key={post[postshow_page].content} defaultValue={post[postshow_page].content} onChange={ (e)=>{ input_content_change(e.target.value) } }/>
                </Form.Group>
                {/* {input_title == ""
                ? <p>true</p>
                : <p>false</p>
                } */}
                <Button variant="outline-primary" onClick={ ()=>{
                  
                  if (input_title === ""){
                    input_form.title = post[postshow_page].title;
                  } else input_form.title = input_title;
                  
                  if (input_content === ""){
                    input_form.content = post[postshow_page].content;
                  } else input_form.content = input_content;

                  input_form.id = post[postshow_page].id;

                  input_form.date = post[postshow_page].date;

                  input_form.update_date = "(Update : "+today+" )";

                  input_form.thumb = post[postshow_page].thumb;

                  // input_form.comment_num = post[postshow_page].comment_num;

                  // input_form.comment = post[postshow_page].comment;

                  var Copy_post = [...post];
                  // var Copy_listshow = [...listshow];
                  
                  if (input_title === "" && input_content === ""){
                    alert('Nothing has been changed!');    
                  } else {
                    Copy_post[postshow_page] = input_form;
                    post_change(Copy_post); 
                    listshow_change(Copy_post.slice(liststart_page, liststart_page + listshow_num));
                    input_title_change("");
                    input_content_change("");
                    history.push('/');
                  }
                } }>Submit</Button>
                <Button variant="outline-danger" as={Link} to="/">Cancel</Button>
              </Form>
            </Col>
          </Route>











          <Col className="extra" xl={2}>기타</Col>
        </Row>
        <hr/>
        <div>감사합니다. 이부분은 장식을 위해서 써보자구</div>
        {/* <List_page postshow_page={postshow_page}></List_page> */}

      </Container>
    </div>
  );
} // App

// function Title_Compo(props) {
    
     
//   return(    
//         )
    
//       // <p>{props.title[0]}<span> {props.date[0]}</span></p> 
    
// }

function List_page(props){
  var start = (Math.ceil((props.postshow_page+1)/5)-1)*5 +1;
  let page_array = [];
  for (var i = 0; i < 5 ; i++){
    page_array.push(start+i);
  }
    return(
      <div>{page_array}</div>
    )
}

function List_change_color(props, num){
  for (var index = 0; index < props.post.length; index++){
    if (index == num) {
      document.getElementsByClassName('select')[index].style.color = '#ffc107';
      document.getElementsByClassName('selectspan')[index].style.color = 'black';
    }
    else {
      document.getElementsByClassName('select')[index].style.color = 'black';
      document.getElementsByClassName('selectspan')[index].style.color = 'transparent';
    }
  }
}



export default App;
