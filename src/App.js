import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col, Button, Form, Image, InputGroup, FormControl, Tab, Tabs } from 'react-bootstrap';
import './App.scss';
import {Route, useHistory} from 'react-router-dom';
import moment from 'moment'; 
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import Marquee from "react-fast-marquee";
import { twelfth_content, eleventh_content, tenth_content,ninth_content, eighth_content, seventh_content, sixth_content, fifth_content, fourth_content, third_content, second_content, first_content } from './blogContent';
import blind from './img/blind.jpg';
import book from './img/Book.gif';
import butter from './img/butter.jpg';
import butterfly from './img/butterfly.jpg';
import frog from './img/frog.png';
import kitty from './img/kitty.gif';
import logo from './img/logo.png';
import nail from './img/nail.jpg';
import obstacle from './img/obstacle.jpg';
import plant from './img/plant.gif';
import stencil from './img/stencil.jpg';
import user from './img/User.gif';

var showLists = document.getElementsByClassName('showList');
var showSpans = document.getElementsByClassName('showSpan');

function App() {
  let [commentArray, setCommentArray] = useState([
    [{visitor : "visitor12", date : "Dec 12, 2020", comment : "Interesting!"}],
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

  let [post, setPost] = useState([
    {id : 11, title : "The Group of Frogs", image : frog, content : twelfth_content, date : "Dec 12, 2020", update_date : "", thumb : 5},
    {id : 10, title : "A Pound of Butter", image : butter, content : eleventh_content, date : "Nov 11, 2020", update_date : "", thumb : 3},
    {id : 9, title : "Control Your Temper", image : nail, content : tenth_content, date : "Oct 10, 2020", update_date : "", thumb : 2},
    {id : 8, title : "The Blind Girl", image : blind, content : ninth_content, date : "Sep 9, 2020", update_date : "", thumb : 9},
    {id : 7, title : "The Obstacle In Our Path", image : obstacle, content : eighth_content, date : "Aug 8, 2020", update_date : "", thumb : 8},
    {id : 6, title : "The Butterfly", image : butterfly, content : seventh_content, date : "Jul 7, 2020", update_date : "", thumb : 2},
    {id : 5, title : "The Group of Frogs", image : frog, content : sixth_content, date : "Jun 6, 2020", update_date : "", thumb : 0}, 
    {id : 4, title : "A Pound of Butter", image : butter, content : fifth_content, date : "May 5, 2020", update_date : "", thumb : 0}, 
    {id : 3, title : "Control Your Temper", image : nail, content : fourth_content, date : "Apr 4, 2020", update_date : "", thumb : 3},
    {id : 2, title : "The Blind Girl", image : blind, content : third_content, date : "Mar 3, 2020", update_date : "", thumb : 2},
    {id : 1, title : "The Obstacle In Our Path", image : obstacle, content : second_content, date : "Feb 2, 2020", update_date : "", thumb : 5},
    {id : 0, title : "The Butterfly", image : butterfly, content : first_content, date : "Jan 1, 2020", update_date : "", thumb : 7}
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
  let [gifImg, setGifImg] = useState(book);
  let [nowColor, setNowColor] = useState("#ffc107");
  let [color, setColor] = useColor("hex", "#ffc107");

  let input_form = {id : "", title : "", image : "", content : "", date : "", update_date : "" , thumb : 0};
  let comment_form = {visitor : "", date : "", comment : ""};
  let history = useHistory();
  let today = moment().format("MMM DD, YYYY");

  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="App">
      <Navbar expand="lg" expanded={expanded} id="navbar">
        <Container>
          <Navbar.Brand id="blogtitle" >
            <button onClick={()=>{
              window.location.href="http://kimportfollio.dothome.co.kr/blog";
            }}><img src={logo} loading="lazy"/> React Blog
            </button>
          </Navbar.Brand>
          <Button id="phoneList" variant="warning" onClick={()=>{
            var updownList = document.getElementById('postList');
            updownList.classList.toggle('listOpen');
            window.scrollTo(0,0);
          }}>List</Button>

          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {
                loginAs === 'James'
                ? <Nav.Link><Button variant="warning" onClick={()=>{
                  setGifImg(book);
                  history.push('/blog');
                  setExpanded(false);
                }}>See postings</Button></Nav.Link>
                : null
              }
              {
                loginAs === 'James'
                ? <Nav.Link><Button variant="warning" onClick={()=>{
                  setImageUrl('');
                  history.push('/blog/input');
                  setGifImg(plant);
                  setExpanded(false);
                }}>Add a posting</Button></Nav.Link>
                : null
              }
              <Nav.Link><Button variant="outline-secondary" onClick={()=>{
                setGifImg(user);
                history.push('/blog/login');
                setExpanded(false);
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
                    setExpanded(false);
                  }}>Choose</Button>
                  <Button variant="outline-secondary" onClick={()=>{
                    document.getElementById('colorPicker').style.display = "none";
                    change_Color(nowColor);
                    setExpanded(false);
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
                <h5><Image src={stencil} loading="lazy" roundedCircle /> James</h5>
                <p>Thank you for visiting my blog! <br/>Have a wonderful day!</p>
              </div>
              <div id="movingimg"><img src={gifImg} loading="lazy"/><br/><span>Today : {today}</span><hr/></div>
              
              <div id="postList">
                <h4  onMouseEnter={() => setEmoji('🤣')} onMouseLeave={() => setEmoji('😎')}>{emoji} Posting List</h4>
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
                            history.push('/blog');
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
                  <hr/>
              </div>      
            </Col> {/* list */}
            
          <Route exact path="/blog">  
            <Col className="content" lg={8} xl={7}>
              {
                post.length === 0
                ? <h4>"No Postings!"</h4>
                : <div>
                    <h4>🍀 {post[currentPage].title}</h4>
                    <h6>{post[currentPage].date} {post[currentPage].update_date}</h6>
                    <h6>
                    { loginAs === 'James'
                      ? <div id="updel">
                          <Button variant="outline-warning" onClick={()=>{
                            setImageUrl(post[currentPage].image);
                            setGifImg(kitty);
                            history.push('/blog/Update');
                          }}>Update</Button>
                          <Button variant="outline-warning" onClick={()=>{
                            if (window.confirm('Are you sure you want to delete this post?')){
                              var Copy_post = [...post];
                              Copy_post.splice(currentPage, 1);
                              setPost(Copy_post);
                              var Copy_comment = [...commentArray];
                              Copy_comment.splice(currentPage, 1);
                              setCommentArray(Copy_comment);
                            } 
                          }}>Delete</Button>
                        </div>
                      : null 
                    }   
                    </h6>
                    <br/><br/>
                    <img className = "content_Img" src={post[currentPage].image} loading="lazy"></img>
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
                      setPost(Copy_post);
                      }}>👍 {post[currentPage].thumb}</button>
                      <hr/>
                    <p>
                      <Button onClick={()=>{ setIsCommentOpen(!isCommentOpen)}} variant="secondary">💬 : {commentArray[currentPage].length}</Button>
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

                            console.log(commentArray);

                            var Copy_comment = [...commentArray];
                            
                            if (commentVisitor === "" || commentContent === ""){
                              alert('Please fill all two fields!');    
                            } else {
                              Copy_comment[currentPage].unshift(comment_form); 
                              setCommentArray(Copy_comment);
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
                            commentArray[currentPage].map(function(c, index){
                              return(
                                <div className="comment" key={index}> {/* This is one comment */}
                                  {
                                    c.comment.split('\n').map(function(line){
                                      return(
                                        <h6>{line}<br/></h6>
                                      )
                                    })
                                  }
                                  <p>{c.visitor} {c.date}<button onClick={()=>{
                                    if (window.confirm('Are you sure you want to delete this comment?')){
                                      var Copy_comment = [...commentArray];
                                      Copy_comment[currentPage].splice(index, 1);
                                      setCommentArray(Copy_comment);
                                    }
                                  }}>❌</button></p>
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

          <Route path="/blog/input">
            <Col className="content" lg={8} xl={7}>
            <h4>New posting</h4>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Title</Form.Label>
                  <Form.Control placeholder="Title here." onChange={ (e)=>{ setInputTitle(e.target.value) } }/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Content</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Content here." onChange={ (e)=>{ setInputContent(e.target.value) } }/>
                </Form.Group>
                <Image id = "imgForUpdate" src={imageUrl} loading="lazy" rounded/>
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
                  var Copy_comment = [...commentArray];
                  
                  if (InputTitle === "" || inputContent === ""){
                    alert('Please fill all two fields!');    
                  } else {
                    Copy_post.unshift(input_form); 
                    setPost(Copy_post);
                    Copy_comment.unshift([]);
                    setCommentArray(Copy_comment);
                    setCurrentPage(0);
                    setInputTitle("");
                    setInputContent("");
                    setGifImg(book);
                    history.push('/blog');
                    Add_Reset_List(isListShort={isListShort}, 0);
                  }
                } }>Add</Button>
                <Button variant="outline-warning" onClick={()=>{
                  setGifImg(book);
                  history.push('/blog');
                }}>Cancel</Button>
              </Form>
            </Col>
          </Route> {/* // Input */}

          <Route path="/blog/Update">
            <Col className="content" lg={8} xl={7}>
              {
                post.length === 0
                ? null
                : <div>
                    <h4>Update posting</h4>
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control key={post[currentPage].title} defaultValue={post[currentPage].title} onChange={ (e)=>{ setInputTitle(e.target.value) } }/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows={5} key={post[currentPage].content} defaultValue={post[currentPage].content} onChange={ (e)=>{ setInputContent(e.target.value) } }/>
                      </Form.Group>
                      <Image id = "imgForUpdate" src={imageUrl} loading="lazy" rounded/>
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
                        }

                        input_form.image = imageUrl;
                        input_form.id = post[currentPage].id;
                        input_form.date = post[currentPage].date;
                        input_form.update_date = "(Update : "+today+" )";
                        input_form.thumb = post[currentPage].thumb;

                        var Copy_post = [...post];
                        Copy_post[currentPage] = input_form;
                        setPost(Copy_post); 
                        setInputTitle("");
                        setInputContent("");
                        setGifImg(book);
                        history.push('/blog');
                      } }>Update</Button>
                      <Button variant="outline-warning" onClick={()=>{
                        setGifImg(book);
                        history.push('/blog');
                      }}>Cancel</Button>
                    </Form>
                  </div>
              }
            </Col>
          </Route> {/* // Update */}
          
          <Route path="/blog/login">
            <Col className="content" lg={8} xl={7}>
            <h4>Login As : </h4>
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
                  history.push('/blog');
                } else if (document.getElementById('guest_Radio').checked === true){
                  setLoginAs('Guest')
                  document.getElementById('guest_Radio').checked = true;
                  history.push('/blog');
                }
                setGifImg(book);
              } }>Log In</Button>
              <Button variant="outline-warning" onClick={()=>{
                setGifImg(book);
                history.push('/blog');
              }}>Cancel</Button>
            
            </Col>
          </Route> {/* // login */}

          <Col className="topthree" xl={2}>
            <Tabs defaultActiveKey="thumb" id="uncontrolled-tab-example" className="mt-3">
              
              <Tab id="topthumb" eventKey="thumb" title="👍 Top3">
                <Thumb_Top3 post={post} setCurrentPage={setCurrentPage} setImageUrl={setImageUrl} isListShort={isListShort} history={history}></Thumb_Top3>
              </Tab>
              
              <Tab eventKey="comment" title="💬 Top3">
                <Comment_Top3 post={post} commentArray={commentArray} setCurrentPage={setCurrentPage} setImageUrl={setImageUrl} isListShort={isListShort} history={history}></Comment_Top3>
              </Tab>
              
            </Tabs>
          </Col>  {/* topthree */}
         
        </Row>
      </Container>
    </div>
  );
} // App

function Thumb_Top3(props){
  var marArray = document.getElementsByClassName('marquee');
  var runningStyle = '--play:running; --direction:normal; --duration:7s; --delay:0s; --iteration-count:infinite;';
  var pausedStyle = '--play:paused; --direction:normal; --duration:7s; --delay:0s; --iteration-count:0;';

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
      topthree.map(function(a,i){
        return(
          <div className = "thumbDiv" key={i}
            onClick={()=>{
              var showNum = props.post.indexOf(a);
              props.setCurrentPage(showNum); 
              props.setImageUrl(props.post[showNum].image);
              var shortOrlong = props.isListShort;
              Thumb_Reset_List(shortOrlong={shortOrlong} ,showNum);
              props.history.push('/blog');
              window.scrollTo(0,0);
            }} 
            onMouseEnter={()=>{
              marArray[i*2].setAttribute('style', runningStyle);
              marArray[i*2+1].setAttribute('style', runningStyle);
            }} 
            onMouseLeave={()=>{
              marArray[i*2].setAttribute('style', pausedStyle);
              marArray[i*2+1].setAttribute('style', pausedStyle);
            }} 
          >
            {
              a.image === ''
              ? <Image className = "thumbTop3" src={logo} loading="lazy"></Image>
              : <Image className = "thumbTop3" src={a.image} loading="lazy"></Image>
            }
            <h2>OPEN</h2>
            <Marquee gradient={false} play={false} pauseOnHover={true} className="thumbTitle">👍 {a.thumb} : {a.title}&nbsp;&nbsp;</Marquee>
          </div>
        )
      })
    )
  }
}

function Comment_Top3(props){
  var marArray = document.getElementsByClassName('marquee');
  var runningStyle = '--play:running; --direction:normal; --duration:7s; --delay:0s; --iteration-count:infinite;';
  var pausedStyle = '--play:paused; --direction:normal; --duration:7s; --delay:0s; --iteration-count:0;';

  var Copy_commentArray = [...props.commentArray];
  if (Copy_commentArray.length > 1){
    Copy_commentArray.sort(function(a, b) { 
      return b.length - a.length;
    });
  } 
  var topthree = Copy_commentArray.slice(0, 3);
  var comment_top3_in_post = [];
  for(var i = 0; i < topthree.length; i++){
    comment_top3_in_post.push( props.post[props.commentArray.indexOf(topthree[i])]);
  }

  if (comment_top3_in_post.length === 0){
    return(
      <h5>"No Postings!"</h5>
    )
  } else {
    return(
      comment_top3_in_post.map(function(a, i){
        return(
          <div className = "thumbDiv" key={i} 
            onClick={()=>{
              var showNum = props.post.indexOf(a);
              props.setCurrentPage(showNum); 
              props.setImageUrl(props.post[showNum].image);
              var shortOrlong = props.isListShort;
              Thumb_Reset_List(shortOrlong={shortOrlong} ,showNum);
              props.history.push('/blog');
              window.scrollTo(0,0);
            }}
            onMouseEnter={()=>{
              marArray[i*2+6].setAttribute('style', runningStyle);
              marArray[i*2+7].setAttribute('style', runningStyle);
            }} 
            onMouseLeave={()=>{
              marArray[i*2+6].setAttribute('style', pausedStyle);
              marArray[i*2+7].setAttribute('style', pausedStyle);
            }} 
          >
            {
              a.image === ''
              ? <Image className = "thumbTop3" src={logo} loading="lazy"></Image>
              : <Image className = "thumbTop3" src={a.image} loading="lazy"></Image>
            }
            <h2>OPEN</h2>
            <Marquee gradient={false} play={false} pauseOnHover={true} className="thumbTitle">💬 {topthree[i].length} : {a.title}&nbsp;&nbsp;</Marquee>
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

