import React from 'react';
import {Card,Button} from "react-bootstrap";
import  image from './img1.jpg';


function CardComponent(props) {

  console.log(props);

  const {id,firstName,picture,email}=props.user;
  const onHide = props.onHide;
  
  return(
    <div style={{display:"inline-block"}}>
    <Card style={{ width: '18rem' }}>
    <Card.Img  height="200px" width="200px" variant="top" src={picture} />
  <Card.Body>
    <Card.Title> {firstName} </Card.Title>
    <Card.Text>
      {email}
    </Card.Text>
    <Button onClick={()=>onHide(id)}  variant="primary">Mark me Busy</Button>
  </Card.Body>
</Card>
    </div>
  );
}


export default CardComponent;