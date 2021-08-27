import { Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import {Route} from 'react-router-dom';
import book from './img/Book.gif';

function Login(props) {
    return(
        <Route path="/blog/login">
            <Col className="content" lg={8} xl={7}>
                <h4>{props.titleEmoji} Login</h4>
                <h5>Current Login : {props.loginAs}</h5>
                <br/>
                <InputGroup>
                    <InputGroup.Radio id="james_Radio" name="login_Radio" />
                    <FormControl value="James (Default)"  />
                </InputGroup>
                <br/>
                <InputGroup>
                    <InputGroup.Radio id="guest_Radio" name="login_Radio" />
                    <FormControl value="Guest" />
                </InputGroup>
                <br/><br/>
                <Button variant="outline-warning" onClick={ ()=>{
                    if (document.getElementById('james_Radio').checked === true){
                        props.setLoginAs('James')
                        props.setGreeting(props.loginIntro[0])
                    } else if (document.getElementById('guest_Radio').checked === true){
                        props.setLoginAs('Guest')
                        props.setGreeting(props.loginIntro[1])
                    }
                    props.history.push('/blog');
                } }>Submit</Button>
                <Button variant="outline-warning" onClick={()=>{
                    props.history.push('/blog');
                }}>Cancel</Button>
            </Col>
        </Route>
    )
}

export default Login;