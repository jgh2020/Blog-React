import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Row, Col, Button, Form, Image, Tab, Tabs } from 'react-bootstrap';
import './App.scss';
import {Route, useHistory, useLocation } from 'react-router-dom';
import moment from 'moment'; 
import { ColorPicker, useColor } from "react-color-palette";
import Input from './input';
import Update from './update';
import Search from './search';
import Login from './login';
import "react-color-palette/lib/css/styles.css";
import Marquee from "react-fast-marquee";
import {start_posts, start_comms} from './start_post_comm';
import book from './img/Book.gif';
import kitty from './img/kitty.gif';
import logo from './img/logo.png';
import plant from './img/plant.gif';
import stencil from './img/stencil.jpg';
import user from './img/User.gif';
import search from './img/search.gif';
import getEmoji from 'get-random-emoji';

let showLists = document.getElementsByClassName('showList');
let showSpans = document.getElementsByClassName('showSpan');

function App() {
  let [commentArray, setCommentArray] = useState(start_comms);
  let [post, setPost] = useState(start_posts);
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
  let [nowColor, setNowColor] = useState("#ffc107");
  let [color, setColor] = useColor("hex", "#ffc107");
  let [expanded, setExpanded] = useState(false);
  let [titleEmoji, setTitleEmoji] = useState('');
  let gifImg = [book, kitty, plant, search, user];
  let input_form = {id : "", title : "", image : "", content : "", date : "", update_date : "" , thumb : 0};
  let comment_form = {visitor : "", date : "", comment : ""};
  let history = useHistory();
  let today = moment().format("MMM DD, YYYY");
  let loginIntro = ['Now you are the owner of this blog. You can add, update, or delete posts. If you refresh the page, it returns to its original state.',
                    'Now you are a guest. You can read posts and post comments. If you refresh the page, it returns to its original state.']
  let [greeting, setGreeting] = useState(loginIntro[0]) 

  useEffect(() => {
    var titleemoji = getEmoji();
    setTitleEmoji(titleemoji);
  }, [currentPage])
  
  return (
    <div className="App">
      <Navbar expand="lg" expanded={expanded} id="navbar">
        <Container>
          <Navbar.Brand id="blogtitle" >
            <button onClick={()=>{
              window.location.href="http://kimportfollio.dothome.co.kr/blog";
            }}><img src={logo} alt="reactlogo" loading="lazy"/> React Blog</button>
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
                  history.push('/blog');
                  setExpanded(false);
                }}>📖<span className = "iconbtn"> Read posts</span></Button></Nav.Link>
                : null
              }
              {
                loginAs === 'James'
                ? <Nav.Link><Button variant="warning" onClick={()=>{
                  setImageUrl('');
                  history.push('/blog/input');
                  setExpanded(false);
                }}>➕<span className = "iconbtn"> Add a post</span></Button></Nav.Link>
                : null
              }
              <Nav.Link><Button variant="outline-secondary" onClick={()=>{
                history.push('/blog/search');
                setExpanded(false);
              }}>🔍<span className = "iconbtn"> Search</span></Button></Nav.Link>
              <Nav.Link><Button variant="outline-secondary" onClick={()=>{
                history.push('/blog/login');
                setExpanded(false);
              }}>🔒<span className = "iconbtn"> Login : {loginAs}</span></Button></Nav.Link>
              <Nav.Link id="colorFrame">
                <Button variant="outline-secondary" onClick={()=>{
                    var colorpick = document.getElementById('colorPicker');
                    if (colorpick.style.display === "block"){
                      colorpick.style.display = "none";
                    } else colorpick.style.display = "block";
                    Change_Color(nowColor);
                  }}><span style={{color:color.hex, backgroundColor:color.hex}} id="colorCircle">OK</span><span className = "iconbtn"> Color</span></Button>
                <div id="colorPicker">
                  <ColorPicker width={280} height={150} color={color} onChange={setColor} hideHSV/>
                  <Button variant="outline-secondary" onClick={()=>{
                    var curHex = color.hex;
                    var newHex = curHex+'66';
                    document.documentElement.style.setProperty('--mainColor', curHex);
                    document.documentElement.style.setProperty('--mainColor_opa', newHex);
                    Change_Color(curHex);
                    setNowColor(curHex);
                    document.getElementById('colorPicker').style.display = "none";
                    setExpanded(false);
                  }}>Choose</Button>
                  <Button variant="outline-secondary" onClick={()=>{
                    document.getElementById('colorPicker').style.display = "none";
                    Change_Color(nowColor);
                    setExpanded(false);
                  }}>Cancel</Button>
                </div>
              </Nav.Link>
              <Nav.Link href="http://kimportfollio.dothome.co.kr/"><Button variant="dark">P<span className = "iconbtn">ort</span>f<span className = "iconbtn">olio</span></Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="frame">
        <Row>
            <Col className="list" lg={4} xl={3}>
              <div id="userPage">
                <h5><Image src={stencil} alt="stencil" loading="lazy" roundedCircle /> James</h5>
                <p>{greeting}</p>
              </div>
              <div id="movingimg">            
                <MovingImg gifImg={gifImg}/><br/><h6>Today : {today}</h6><hr/>
              </div>
              <div id="postList">
                <h4 onMouseEnter={() => setEmoji('🤣')} onMouseLeave={() => setEmoji('😎')}>{emoji} Post List
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
                </h4>
                  <div className="showList">
                      <h5><span className="showSpan">▶ </span>(No previous page)</h5>
                      <p>Please add a new post.</p>
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
                    <p>No post!</p>
                  </div>
                  <hr/>
              </div> {/* postList */}
            </Col> {/* list */}

          <Route exact path="/blog">  
            <Col className="content" lg={8} xl={7}>
              {
                post.length === 0
                ? <h4>"No Posts!"</h4>
                : <div>
                    <h4>{titleEmoji} {post[currentPage].title}</h4>
                    <h6>{post[currentPage].date} {post[currentPage].update_date}</h6>
                    <h6>
                    { loginAs === 'James'
                      ? <div id="updel">
                          <Button variant="outline-warning" onClick={()=>{
                            setImageUrl(post[currentPage].image);
                            history.push('/blog/update');
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
                                  <p>{c.visitor} / {c.date}<button onClick={()=>{
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
                      } else alert("This is the first post.");
                      window.scrollTo(0,0);
                    }}>◀ Prev</Button> &nbsp; &nbsp; <Button variant="warning" onClick={()=>{
                      if(currentPage < (post.length - 1)){ 
                        setCurrentPage(currentPage + 1);
                        Reset_List(isListShort={isListShort}, currentPage + 1);
                      } else alert("This is the last post.");
                      window.scrollTo(0,0);
                    }}>Next ▶</Button> </div>
                  </div>
              }
            </Col>
          </Route> {/* // Basic */}
          <Input post={post} titleEmoji={titleEmoji} imageUrl={imageUrl} input_form={input_form} InputTitle={InputTitle} inputContent={inputContent} today={today} commentArray={commentArray}  history={history} isListShort={isListShort}
                  setPost={setPost} setInputTitle={setInputTitle} setInputContent={setInputContent} setImageUrl={setImageUrl}  Add_Reset_List={Add_Reset_List} setCommentArray={setCommentArray} setCurrentPage={setCurrentPage}/>
          <Update post={post}  titleEmoji={titleEmoji} currentPage={currentPage} imageUrl={imageUrl}  today={today} history={history} InputTitle={InputTitle} input_form={input_form} inputContent={inputContent}
                  setPost={setPost} setImageUrl={setImageUrl} setInputTitle={setInputTitle} setInputContent={setInputContent}/>
          <Search post={post} titleEmoji={titleEmoji} history={history} setCurrentPage={setCurrentPage}/>
          <Login titleEmoji={titleEmoji} loginAs={loginAs} setLoginAs={setLoginAs} history={history} loginIntro={loginIntro} setGreeting = {setGreeting}/>
          <Col className="topthree" xl={2}>
            <div id="t3innerframe">
              <Tabs defaultActiveKey="thumb" id="uncontrolled-tab-example" className="mt-3">
                <Tab id="topthumb" eventKey="thumb" title="👍 Top3">
                  <Thumb_Top3 post={post} setCurrentPage={setCurrentPage} setImageUrl={setImageUrl} isListShort={isListShort} history={history}></Thumb_Top3>
                </Tab>
                <Tab eventKey="comment" title="💬 Top3">
                  <Comment_Top3 post={post} commentArray={commentArray} setCurrentPage={setCurrentPage} setImageUrl={setImageUrl} isListShort={isListShort} history={history}></Comment_Top3>
                </Tab>
              </Tabs>
            </div>
            <div id="gotoTop">
              <Button variant="outline-secondary" onClick={()=>{
                  window.scrollTo(0,0)
                  let rocket = document.getElementById('rocket');
                  let fullheight = (-1)*window.innerHeight;
                  if (window.innerWidth < 1200) fullheight = (-1)*(window.innerHeight + window.pageYOffset);
                  rocket.style.marginTop = ""+fullheight+"px";
                  rocket.style.transform = 'rotate(-45deg)';
                  setTimeout(() => {
                    rocket.style.visibility = "hidden";
                    rocket.style.marginTop = 'unset';
                    rocket.style.transform = 'unset';
                  }, 1500);
                  setTimeout(() => {
                    rocket.style.visibility = "unset";
                  }, 2600);
                }}><div id="topLetter">Top</div><div id="rocket">🚀</div></Button>
            </div>
            
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
      <h5>"No Posts!"</h5>
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
              ? <Image className = "thumbTop3" src={logo} alt="reactlogo" loading="lazy"></Image>
              : <Image className = "thumbTop3" src={a.image} alt="postimage" loading="lazy"></Image>
            }
            <h2>OPEN</h2>
            <Marquee gradient={false} play={false} pauseOnHover={false} className="thumbTitle">👍 {a.thumb} : {a.title}&nbsp;&nbsp;</Marquee>
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
      <h5>"No Posts!"</h5>
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
              ? <Image className = "thumbTop3" src={logo} alt="reactlogo" loading="lazy"></Image>
              : <Image className = "thumbTop3" src={a.image} alt="postimage" loading="lazy"></Image>
            }
            <h2>OPEN</h2>
            <Marquee gradient={false} play={false} pauseOnHover={false} className="thumbTitle">💬 {topthree[i].length} : {a.title}&nbsp;&nbsp;</Marquee>
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

function Change_Color(newColor){
  document.getElementById('colorCircle').style.color = newColor;
  document.getElementById('colorCircle').style.backgroundColor = newColor;
}

function MovingImg(props){
  const location = useLocation();
  let routeName = location.pathname;
  let elNum = 0;
  if (routeName === '/blog') elNum = 0;
  else if (routeName === '/blog/update') elNum = 1;
  else if (routeName === '/blog/input') elNum = 2;
  else if (routeName === '/blog/search') elNum = 3;
  else if (routeName === '/blog/login') elNum = 4;
  return(
    <img src={props.gifImg[elNum]} alt="gifimage"loading="lazy"/>
  )
}

export default App;
export {Add_Reset_List};


