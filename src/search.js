import { useState } from 'react';
import { Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import {Route} from 'react-router-dom';
import book from './img/Book.gif';

function Search(props) {

    let [keyword, setKeyword] = useState('');
    let searchPost = props.post.filter(
        (el) => el.title.toString().toLowerCase().indexOf(keyword.toString().toLowerCase()) > -1 
        || el.content.toString().toLowerCase().indexOf(keyword.toString().toLowerCase()) > -1
        ); 

    return(
        <Route path="/blog/search">
            <Col className="content" lg={8} xl={7}>
                <h4>{props.titleEmoji} Search</h4>
                <h5>Result : {searchPost.length}</h5>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-default" >Post(s) including :</InputGroup.Text>
                    <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder={keyword} onChange={(e)=>{ setKeyword(e.target.value) }} />
                </InputGroup>
                <div id="searchResult">
                    {
                        searchPost.map(function(a){
                            return(
                                <div onClick={()=>{
                                    var showNum = props.post.indexOf(a);
                                    props.setCurrentPage(showNum);
                                    props.history.push('/blog');
                                }}>
                                    <h6>{a.title} <span> / {a.date} {a.update_date}</span></h6>
                                </div>
                            )
                        })
                    }
                </div>    
            </Col>
        </Route>
    )
}

export default Search;

