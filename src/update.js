import { Col, Button, Form, Image } from 'react-bootstrap';
import {Route} from 'react-router-dom';
import book from './img/Book.gif';

function Update(props) {
    return(  
        <Route path="/blog/update">
            <Col className="content" lg={8} xl={7}>
                {
                    props.post.length === 0
                    ? null
                    : <div>
                        <h4>{props.titleEmoji} Update post</h4>
                        <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control key={props.post[props.currentPage].title} defaultValue={props.post[props.currentPage].title} onChange={ (e)=>{ props.setInputTitle(e.target.value) } }/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={5} key={props.post[props.currentPage].content} defaultValue={props.post[props.currentPage].content} onChange={ (e)=>{ props.setInputContent(e.target.value) } }/>
                        </Form.Group>
                        <Image id = "imgForUpdate" src={props.imageUrl} loading="lazy" rounded/>
                        <Form.Group id="imgFile" className="mb-3" accept="image/*" onChange={ (e)=>{ props.setImageUrl(window.URL.createObjectURL(e.target.files[0]))}}>
                            <Form.Label>Update Image : &nbsp;</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <br/>
                        <Button variant="outline-warning" onClick={ ()=>{
                            if (props.InputTitle === ""){
                            props.input_form.title = props.post[props.currentPage].title;
                            } else props.input_form.title = props.InputTitle;
                            
                            if (props.inputContent === ""){
                                props.input_form.content = props.post[props.currentPage].content;
                            } else {
                                props.input_form.content = props.inputContent;
                            }

                            props.input_form.image = props.imageUrl;
                            props.input_form.id = props.post[props.currentPage].id;
                            props.input_form.date = props.post[props.currentPage].date;
                            props.input_form.update_date = "(Update : "+props.today+")";
                            props.input_form.thumb = props.post[props.currentPage].thumb;

                            var Copy_post = [...props.post];
                            Copy_post[props.currentPage] = props.input_form;
                            props.setPost(Copy_post); 
                            props.setInputTitle("");
                            props.setInputContent("");
                            props.history.push('/blog');
                        } }>Update</Button>
                        <Button variant="outline-warning" onClick={()=>{
                            props.history.push('/blog');
                        }}>Cancel</Button>
                        </Form>
                    </div>
                }
            </Col>
        </Route> 
    )
}

export default Update;


