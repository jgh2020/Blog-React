// import logo from './logo.svg';
import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col, Button, Form, Image, InputGroup, FormControl, Tab, Tabs } from 'react-bootstrap';
import './App.scss';
import {Route, useHistory} from 'react-router-dom';
import moment from 'moment'; 
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { twelfth_content, eleventh_content, tenth_content,ninth_content, eighth_content, seventh_content, sixth_content, fifth_content, fourth_content, third_content, second_content, first_content } from './blogContent';

var showLists = document.getElementsByClassName('showList');
var showSpans = document.getElementsByClassName('showSpan');

function App() {
  let [comment_array, comment_array_change] = useState([
    [{visitor : "visitor12", date : "Dec 12, 2020", comment : "interesting!"}],
    [{visitor : "visitor11", date : "Nov 11, 2020", comment : "I like it."}],
    [{visitor : "visitor10", date : "Oct 10, 2020", comment : "Funny story!"}],
    [{visitor : "visitor9", date : "Sep 9, 2020", comment : "Sad story!"}],
    [{visitor : "visitor8", date : "Aug 8, 2020", comment : "interesting!"}],
    [{visitor : "visitor7", date : "Jul 7, 2020", comment : "I like it."}, {visitor : "Wes", date : "Jul 7, 2021", comment : "interesting!"}],
    [{visitor : "visitor6", date : "Jun 6, 2020", comment : "interesting!"}, {visitor : "James", date : "Jun 6, 2021", comment : "Funny story!"}],
    [{visitor : "visitor5", date : "May 5, 2020", comment : "Smooth like butter!"}, {visitor : "Army", date : "May 5, 2021", comment : "BTS"}, {visitor : "Brisket", date : "Jun 6, 2021", comment : "I like it."}],
    [{visitor : "visitor4", date : "Apr 4, 2020", comment : "interesting!"}],
    [{visitor : "visitor3", date : "Mar 3, 2020", comment : "What a love!"}],
    [{visitor : "visitor2", date : "Feb 2, 2020", comment : "I like it."}], 
    [{visitor : "visitor1", date : "Jan 1, 2020", comment : "Beautiful!"}]
  ]);

  let [post, post_change] = useState([
    {id : 11, title : "The Group of Frogs", image : "./img/frog.png", content : twelfth_content, date : "Dec 12, 2020", update_date : "", thumb : 5},
    {id : 10, title : "A Pound of Butter", image : "./img/butter.jpg", content : eleventh_content, date : "Nov 11, 2020", update_date : "", thumb : 3},
    {id : 9, title : "Control Your Temper", image : "./img/nail.jpg", content : tenth_content, date : "Oct 10, 2020", update_date : "", thumb : 2},
    {id : 8, title : "The Blind Girl", image : "./img/blind.jpg", content : ninth_content, date : "Sep 9, 2020", update_date : "", thumb : 9},
    {id : 7, title : "The Obstacle In Our Path", image : "./img/obstacle.jpg", content : eighth_content, date : "Aug 8, 2020", update_date : "", thumb : 8},
    {id : 6, title : "The Butterfly", image : "./img/butterfly.jpg", content : seventh_content, date : "Jul 7, 2020", update_date : "", thumb : 2},
    {id : 5, title : "The Group of Frogs", image : "./img/frog.png", content : sixth_content, date : "Jun 6, 2020", update_date : "", thumb : 0}, 
    {id : 4, title : "A Pound of Butter", image : "./img/butter.jpg", content : fifth_content, date : "May 5, 2020", update_date : "", thumb : 0}, 
    {id : 3, title : "Control Your Temper", image : "./img/nail.jpg", content : fourth_content, date : "Apr 4, 2020", update_date : "", thumb : 3},
    {id : 2, title : "The Blind Girl", image : "./img/blind.jpg", content : third_content, date : "Mar 3, 2020", update_date : "", thumb : 2},
    {id : 1, title : "The Obstacle In Our Path", image : "./img/obstacle.jpg", content : second_content, date : "Feb 2, 2020", update_date : "", thumb : 5},
    {id : 0, title : "The Butterfly", image : "./img/butterfly.jpg", content : first_content, date : "Jan 1, 2020", update_date : "", thumb : 7}
  ]);

  let [currentPage, setCurrentPage] = useState(0);
  let [isListShort, setIsListShort] = useState(true);
  let [listButtonName, setListButtonName] = useState('More')
  let [InputTitle, setInputTitle] = useState('');
  let [inputContent, setInputContent] = useState('');
  let [imageUrl, setImageUrl] = useState('');
  let [commentVisitor, setCommentVisitor] = useState('visitor');
  let [commentContent, setCommentContent] = useState('');
  let [isCommentOpen, setIsCommentOpen] = useState(false);
  let [isCommentInputOpen, setIsCommentInputOpen] = useState(false);
  let [loginAs,  setLoginAs] = useState('James');
  let [emoji, setEmoji] = useState('😎');
  let [gifImg, setGifImg] = useState('./img/Book.gif');
  let [nowColor, setNowColor] = useState("#ffc107");
  let [color, setColor] = useColor("hex", "#ffc107");

  let input_form = {id : "", title : "", image : "", content : "", date : "", update_date : "" , thumb : 0};
  let comment_form = {visitor : "", date : "", comment : ""};
  let history = useHistory();
  let today = moment().format("MMM DD, YYYY");
  
  return (
    <div className="App">
      <Navbar expand="lg" id="navbar">
        <Container>
          <Navbar.Brand id="blogtitle" >
            <button onClick={()=>{
              window.location.href="http://kimportfollio.dothome.co.kr/blog";
            }}><img src="./img/logo192.png"/> React Blog
            </button>
          </Navbar.Brand>
          <Button id="phoneList" variant="warning" onClick={()=>{
            var updownList = document.getElementById('postList');
            updownList.classList.toggle('listOpen');
            window.scrollTo(0,0);
          }}>List</Button>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {
                loginAs === 'James'
                ? <Nav.Link><Button variant="warning" onClick={()=>{
                  setGifImg('./img/Book.gif');
                  history.push('/');
                }}>See postings</Button></Nav.Link>
                : null
              }
              {
                loginAs === 'James'
                ? <Nav.Link><Button variant="warning" onClick={()=>{
                  setImageUrl('');
                  history.push('/input');
                  setGifImg('./img/plant.gif');
                }}>Add a posting</Button></Nav.Link>
                : null
              }
              <Nav.Link><Button variant="outline-secondary" onClick={()=>{
                setGifImg('./img/User.gif');
                history.push('/login');
              }}>Login : {loginAs}</Button></Nav.Link>
              <Nav.Link id="colorFrame">
                <Button variant="outline-secondary" onClick={()=>{
                    var colorpick = document.getElementById('colorPicker');
                    if (colorpick.style.display === "block"){
                      colorpick.style.display = "none";
                    } else colorpick.style.display = "block";
                    change_Color(nowColor);
                  }}>Color <span style={{color:color.hex, backgroundColor:color.hex}} id="colorCircle">OK</span></Button>
                <div id="colorPicker">
                  <ColorPicker width={280} height={150} color={color} onChange={setColor} hideHSV/>
                  <Button variant="outline-secondary" onClick={()=>{
                    var curHex = color.hex;
                    var newHex = curHex+'66';
                    document.documentElement.style.setProperty('--mainColor', curHex);
                    document.documentElement.style.setProperty('--mainColor_opa', newHex);
                    change_Color(curHex);
                    setNowColor(curHex);
                    document.getElementById('colorPicker').style.display = "none";
                  }}>Choose</Button>
                  <Button variant="outline-secondary" onClick={()=>{
                    document.getElementById('colorPicker').style.display = "none";
                    change_Color(nowColor);
                  }}>Cancel</Button>
                </div>
              </Nav.Link>
              <Nav.Link href="http://kimportfollio.dothome.co.kr/"><Button variant="dark">Portfolio</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="frame">
        <Row>
            <Col className="list" lg={4} xl={3}>
              <div id="userPage">
                <h5><Image src="./img/stencil.jpg" roundedCircle /> James</h5>
                <p>Thank you for visiting my blog! <br/>Have a wonderful day!</p>
              </div>
              <div id="movingimg"><img src={gifImg}/><hr/></div>
              
              <div id="postList">
                <h4  onMouseEnter={() => setEmoji('🤣')} onMouseLeave={() => setEmoji('😎')}>{emoji} Posting List <span>({today}) </span></h4>
                <br/>
                  <p id="moreButton">
                      <Button variant="outline-warning" onClick={()=>{
                        for(var i=0; i<showLists.length; i++){
                          showLists[i].style.maxHeight = 'none';
                        }   
                        setIsListShort(!isListShort);
                        if (isListShort === true) {
                          setListButtonName('Less')
                          for(var j=0; j<showLists.length; j++){
                            showLists[j].style.maxHeight = 'none';
                          }
                        } else {
                          setListButtonName('More')
                          for(var k=0; k<showLists.length; k++){
                            showLists[k].style.maxHeight = 0;
                            if (k === currentPage || k === currentPage+1 || k === currentPage+2) {
                              showLists[k].style.maxHeight = 'none'; 
                            }
                          }
                        }
                      }}>{listButtonName}</Button>
                    </p>
                  <div className="showList">
                      <h5><span className="showSpan">▶ </span>(No previous page)</h5>
                      <p>Please create a new posting.</p>
                  </div>
                  {
                    post.map(function(a){
                      return(
                        <div className="showList" onClick={()=>{ 
                          var showNum = post.indexOf(a);
                          if (showNum !== currentPage){
                            setCurrentPage(showNum); 
                            setImageUrl(post[showNum].image);
                            Reset_List(isListShort={isListShort}, showNum);

                            var updownList = document.getElementById('postList');
                            updownList.classList.toggle('listOpen');
                          }
                        }}>
                          <h5><span className="showSpan">▶ </span>{a.title}</h5>
                          <p>{a.date} {a.update_date}</p> 
                        </div>
                      )
                    })
                  }
                  <div className="showList">
                    <h5><span className="showSpan">▶ </span>(No next page)</h5>
                    <p>This is the first posting!</p>
                  </div>
                  {/* <hr/> */}
              </div>      
            </Col> {/* list */}
            
          <Route exact path="/">  
            <Col className="content" lg={8} xl={7}>
              {
                post.length === 0
                ? <h4>"No Postings!"</h4>
                : <div>
                    <h4>{post[currentPage].title}</h4><br/>
                    <h6>{post[currentPage].date} {post[currentPage].update_date}</h6>
                    <h6>
                    { loginAs === 'James'
                      ? <div id="updel">
                          <Button variant="outline-warning" onClick={()=>{
                            setImageUrl(post[currentPage].image);
                            setGifImg('./img/kitty.gif');
                            history.push('/Update');
                          }}>Update</Button>
                          <Button variant="outline-warning" onClick={()=>{
                            if (window.confirm('Are you sure you want to delete this post?')){
                              var Copy_post = [...post];
                              Copy_post.splice(currentPage, 1);
                              post_change(Copy_post);
                              var Copy_comment = [...comment_array];
                              Copy_comment.splice(currentPage, 1);
                              comment_array_change(Copy_comment);
                            } 
                          }}>Delete</Button>
                        </div>
                      : null 
                    }   
                    </h6>
                    <br/><br/>
                    <img className = "content_Img" src={post[currentPage].image}></img>
                    {
                      post[currentPage].content.split('\n').map(function(line){
                        return(
                          <p>{line}<br/></p>
                        )
                      })
                    }  
                    <button onClick={()=>{
                      var Copy_post = [...post];
                      Copy_post[currentPage].thumb++;
                      post_change(Copy_post);
                      }}>👍 {post[currentPage].thumb}</button>
                      <hr/>
                    <p>
                      <Button onClick={()=>{ setIsCommentOpen(!isCommentOpen)}} variant="secondary">💬 : {comment_array[currentPage].length}</Button>
                      <Button onClick={()=>{ setIsCommentInputOpen(!isCommentInputOpen)}} variant="secondary">+</Button>
                    </p>
                    {
                      isCommentInputOpen === true
                      ? <Form id="commform">
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control placeholder="Your nickname here." onChange={ (e)=>{ setCommentVisitor(e.target.value) } }/>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="Your comment here." onChange={ (e)=>{ setCommentContent(e.target.value) } }/>
                          </Form.Group>
                          <Button variant="outline-dark" onClick={ ()=>{

                            comment_form.visitor = commentVisitor;
                            comment_form.comment = commentContent;          
                            comment_form.date = today;

                            console.log(comment_array);

                            var Copy_comment = [...comment_array];
                            
                            if (commentVisitor === "" || commentContent === ""){
                              alert('Please fill all two fields!');    
                            } else {
                              Copy_comment[currentPage].unshift(comment_form); 
                              comment_array_change(Copy_comment);
                              setCommentVisitor("");
                              setCommentContent("");
                              setIsCommentOpen(true);
                              setIsCommentInputOpen(false);
                            }
                          } }>Submit</Button>
                          <Button variant="outline-dark" onClick={()=>{ setIsCommentInputOpen(false)}}>Cancel</Button>
                          {/* <hr/> */}
                        </Form>
                      : null  
                    }
                    {
                      isCommentOpen === true
                      ? <div>
                          <hr/>
                          {
                            comment_array[currentPage].map(function(c, i){
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
                    <div><Button variant="warning" onClick={()=>{
                      if(currentPage > 0) {
                        setCurrentPage(currentPage - 1);
                        Reset_List(isListShort={isListShort}, currentPage - 1);
                      } else alert("This is the first posting.");
                      window.scrollTo(0,0);
                    }}>◀ Prev</Button> &nbsp; &nbsp; <Button variant="warning" onClick={()=>{
                      if(currentPage < (post.length - 1)){ 
                        setCurrentPage(currentPage + 1);
                        Reset_List(isListShort={isListShort}, currentPage + 1);
                      } else alert("This is the last posting.");
                      window.scrollTo(0,0);
                    }}>Next ▶</Button> </div>
                  </div>
              }
              {/* <hr/> */}
            </Col>
            
          </Route> {/* // Basic */}

          <Route path="/input">
            <Col className="content" lg={8} xl={7}>
            <p>New posting</p>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Title</Form.Label>
                  <Form.Control placeholder="Title here." onChange={ (e)=>{ setInputTitle(e.target.value) } }/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Content</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Content here." onChange={ (e)=>{ setInputContent(e.target.value) } }/>
                </Form.Group>
                <Form.Group id="imgFile" className="mb-3" accept="image/*" onChange={ (e)=>{ setImageUrl(window.URL.createObjectURL(e.target.files[0]))}}>
                  <Form.Label>Add an Image : &nbsp;</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <br/>

                <Button variant="outline-warning" onClick={ ()=>{
                  input_form.id = post.length;
                  input_form.title = InputTitle;
                  input_form.image = imageUrl;
                  input_form.content = inputContent;
                  input_form.date = today;
                  var Copy_post = [...post];
                  var Copy_comment = [...comment_array];
                  
                  if (InputTitle === "" || inputContent === ""){
                    alert('Please fill all two fields!');    
                  } else {
                    Copy_post.unshift(input_form); 
                    post_change(Copy_post);
                    Copy_comment.unshift([]);
                    comment_array_change(Copy_comment);
                    setCurrentPage(0);
                    setInputTitle("");
                    setInputContent("");
                    setGifImg('./img/Book.gif');
                    history.push('/');
                    Add_Reset_List(isListShort={isListShort}, 0);
                  }
                } }>Add</Button>
                <Button variant="outline-warning" onClick={()=>{
                  setGifImg('./img/Book.gif');
                  history.push('/');
                }}>Cancel</Button>
              </Form>
            </Col>
          </Route> {/* // Input */}

          <Route path="/Update">
            <Col className="content" lg={8} xl={7}>
              {
                post.length === 0
                ? null
                : <div>
                    <p>Update posting</p>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control key={post[currentPage].title} defaultValue={post[currentPage].title} onChange={ (e)=>{ setInputTitle(e.target.value) } }/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows={5} key={post[currentPage].content} defaultValue={post[currentPage].content} onChange={ (e)=>{ setInputContent(e.target.value) } }/>
                      </Form.Group>
                      <Image id = "imgForUpdate" src={imageUrl} rounded/>
                      <Form.Group id="imgFile" className="mb-3" accept="image/*" onChange={ (e)=>{ setImageUrl(window.URL.createObjectURL(e.target.files[0]))}}>
                        <Form.Label>Update Image : &nbsp;</Form.Label>
                        <Form.Control type="file" />
                      </Form.Group>
                      <br/>
                      <Button variant="outline-warning" onClick={ ()=>{
                        if (InputTitle === ""){
                          input_form.title = post[currentPage].title;
                        } else input_form.title = InputTitle;
                        
                        if (inputContent === ""){
                          input_form.content = post[currentPage].content;
                        } else {
                            input_form.content = inputContent;
                            document.getElementById('imgForUpdate').src = imageUrl;
                        }

                        input_form.image = imageUrl;
                        input_form.id = post[currentPage].id;
                        input_form.date = post[currentPage].date;
                        input_form.update_date = "(Update : "+today+" )";
                        input_form.thumb = post[currentPage].thumb;

                        var Copy_post = [...post];
                        Copy_post[currentPage] = input_form;
                        post_change(Copy_post); 
                        setInputTitle("");
                        setInputContent("");
                        setGifImg('./img/Book.gif');
                        history.push('/');
                      } }>Update</Button>
                      <Button variant="outline-warning" onClick={()=>{
                        setGifImg('./img/Book.gif');
                        history.push('/');
                      }}>Cancel</Button>
                    </Form>
                  </div>
              }
            </Col>
          </Route> {/* // Update */}
          
          <Route path="/login">
            <Col className="content" lg={8} xl={7}>
            <p>Login As : </p>
            <br/>
            <InputGroup>
              <InputGroup.Radio id="user_Radio" name="login_Radio" checked/>
              <FormControl value="Login as a USER (James)"  />
            </InputGroup>
            <br/>
            <InputGroup>
              {
                loginAs === 'Guest'
                ? <InputGroup.Radio id="guest_Radio" name="login_Radio" checked/>
                : <InputGroup.Radio id="guest_Radio" name="login_Radio" />
              }
              <FormControl value="Login as a GUEST" />
            </InputGroup>
            <br/><br/>
            
              <Button variant="outline-warning" onClick={ ()=>{
                if (document.getElementById('user_Radio').checked === true){
                  setLoginAs('James')
                  document.getElementById('user_Radio').checked = true;
                  history.push('/');
                } else if (document.getElementById('guest_Radio').checked === true){
                  setLoginAs('Guest')
                  document.getElementById('guest_Radio').checked = true;
                  history.push('/');
                }
                setGifImg('./img/Book.gif');
              } }>Log In</Button>
              <Button variant="outline-warning" onClick={()=>{
                setGifImg('./img/Book.gif');
                history.push('/');
              }}>Cancel</Button>
            
            </Col>
          </Route> {/* // login */}

          <Col className="topthree" xl={2}>
            <Tabs defaultActiveKey="thumb" id="uncontrolled-tab-example" className="mt-3">
              
              <Tab id="topthumb" eventKey="thumb" title="👍 Top3">
                <Thumb_Top3 post={post} setCurrentPage={setCurrentPage} setImageUrl={setImageUrl} isListShort={isListShort}></Thumb_Top3>
              </Tab>
              
              <Tab eventKey="comment" title="💬 Top3">
                <Comment_Top3 post={post} comment_array={comment_array} setCurrentPage={setCurrentPage} setImageUrl={setImageUrl} isListShort={isListShort}></Comment_Top3>
              </Tab>
              
            </Tabs>
          </Col>  {/* topthree */}
         
        </Row>
      </Container>
    </div>
  );
} // App

function Thumb_Top3(props){
  var Copy_post = [...props.post];
  if (Copy_post.length > 1){
    Copy_post.sort(function(a, b) { 
      return b.thumb - a.thumb;
    });
  } 
  var topthree = Copy_post.slice(0, 3);
  if (topthree.length === 0){
    return(
      <h5>"No Postings!"</h5>
    )
  } else {
    return(
      topthree.map(function(a){
        return(
          <div className = "thumbDiv" onClick={()=>{
            var showNum = props.post.indexOf(a);
            props.setCurrentPage(showNum); 
            props.setImageUrl(props.post[showNum].image);
            var shortOrlong = props.isListShort;
            Thumb_Reset_List(shortOrlong={shortOrlong} ,showNum);
            window.scrollTo(0,0);
          }}>
            {
              a.image === ''
              ? <Image className = "thumbTop3" src="./img/logo192.png"></Image>
              : <Image className = "thumbTop3" src={a.image}></Image>
            }
            <h2>OPEN</h2>
            <p className = "thumbTitle">👍 {a.thumb} : {a.title}</p>
          </div>
        )
      })
    )
  }
}

function Comment_Top3(props){
  var Copy_comment_array = [...props.comment_array];
  if (Copy_comment_array.length > 1){
    Copy_comment_array.sort(function(a, b) { 
      return b.length - a.length;
    });
  } 
  var topthree = Copy_comment_array.slice(0, 3);
  var comment_top3_in_post = [];
  for(var i = 0; i < topthree.length; i++){
    comment_top3_in_post.push( props.post[props.comment_array.indexOf(topthree[i])]);
  }

  if (comment_top3_in_post.length === 0){
    return(
      <h5>"No Postings!"</h5>
    )
  } else {
    return(
      comment_top3_in_post.map(function(a, i){
        return(
          <div className = "thumbDiv" onClick={()=>{
            var showNum = props.post.indexOf(a);
            props.setCurrentPage(showNum); 
            props.setImageUrl(props.post[showNum].image);

            var shortOrlong = props.isListShort;
            Thumb_Reset_List(shortOrlong={shortOrlong} ,showNum);
            window.scrollTo(0,0);
          }}>
            {
              a.image === ''
              ? <Image className = "thumbTop3" src="./img/logo192.png"></Image>
              : <Image className = "thumbTop3" src={a.image}></Image>
            }
            <h2>OPEN</h2>
            <p className = "thumbTitle">💬 {topthree[i].length} : {a.title}</p>
          </div>
        )
      })
    )
  }
}

function Reset_List(props, showNum){

  for(var i=0; i<showLists.length; i++){
    showLists[i].style.color = 'darkgray';
    showSpans[i].style.color = 'white';
    showLists[i].style.maxHeight = 0;
    if (props.isListShort === true){
      if (i === showNum || i === showNum+1 || i === showNum+2) {
        showLists[i].style.maxHeight = 'none';
      }
    } else {
      showLists[i].style.maxHeight = 'none';
    }
  } 
  showSpans[showNum+1].style.color = 'black';
  showLists[showNum+1].style.color = 'black';

  console.log(props.isListShort);
}

function Thumb_Reset_List(props, showNum){

  for(var i=0; i<showLists.length; i++){
    showLists[i].style.color = 'darkgray';
    showSpans[i].style.color = 'white';
    showLists[i].style.maxHeight = 0;
    if (props.shortOrlong === true){
      if (i === showNum || i === showNum+1 || i === showNum+2) {
        showLists[i].style.maxHeight = 'none';
      }
    } else {
      showLists[i].style.maxHeight = 'none';
    }
  } 
  showSpans[showNum+1].style.color = 'black';
  showLists[showNum+1].style.color = 'black';
}

function Add_Reset_List(props, showNum){
  for(var i=0; i<showLists.length; i++){
    showLists[i].style.color = 'darkgray';
    showSpans[i].style.color = 'white';
    showLists[i].style.maxHeight = 0;
      if (props.isListShort === true){
        if (i === showNum || i === showNum+1 || i === showNum+2) {
          showLists[i].style.maxHeight = 'none';
        }
        if (showLists.length === 3) showLists[2].style.maxHeight = 0;
      } else {
        showLists[i].style.maxHeight = 'none';
      }
  } 
  if (showLists.length > 2){
    showSpans[showNum+1].style.color = 'black';
    showLists[showNum+1].style.color = 'black';
  }
}

function change_Color(newColor){
  document.getElementById('colorCircle').style.color = newColor;
  document.getElementById('colorCircle').style.backgroundColor = newColor;
}

export default App;

