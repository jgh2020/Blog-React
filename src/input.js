import { Col, Button, Form, Image } from 'react-bootstrap';
import {Route} from 'react-router-dom';
import book from './img/Book.gif';
import {Add_Reset_List} from './App'; 

function Input(props) {
    return(
        <Route path="/blog/input">
            <Col className="content" lg={8} xl={7}>
            <h4>{props.titleEmoji} New post</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Title here." onChange={ (e)=>{ props.setInputTitle(e.target.value) } }/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Content here." onChange={ (e)=>{ props.setInputContent(e.target.value) } }/>
                    </Form.Group>
                    <Image id = "imgForUpdate" src={props.imageUrl} loading="lazy" rounded/>
                    <Form.Group id="imgFile" className="mb-3" accept="image/*" onChange={ (e)=>{ props.setImageUrl(window.URL.createObjectURL(e.target.files[0]))}}>
                    <Form.Label>Add an Image : &nbsp;</Form.Label>
                    <Form.Control type="file" />
                    </Form.Group>
                    <br/>

                    <Button variant="outline-warning" onClick={ ()=>{
                    props.input_form.id = props.post.length;
                    props.input_form.title = props.InputTitle;
                    props.input_form.image = props.imageUrl;
                    props.input_form.content = props.inputContent;
                    props.input_form.date = props.today;
                    var Copy_post = [...props.post];
                    var Copy_comment = [...props.commentArray];
                    
                    if (props.InputTitle === "" || props.inputContent === ""){
                        alert('Please fill all two fields!');    
                    } else {
                        Copy_post.unshift(props.input_form); 
                        props.setPost(Copy_post);
                        Copy_comment.unshift([]);
                        props.setCommentArray(Copy_comment);
                        props.setCurrentPage(0);
                        props.setInputTitle("");
                        props.setInputContent("");
                        props.history.push('/blog');
                        Add_Reset_List(props, 0);
                    }
                    } }>Add</Button>
                    <Button variant="outline-warning" onClick={()=>{
                        props.history.push('/blog');
                    }}>Cancel</Button>
                </Form>
            </Col>
        </Route>
    )
}

export default Input;

