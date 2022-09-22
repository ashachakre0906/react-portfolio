import React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
const Portfolio = () => {

    // const projects = [
    //     {
    //         title: "",
    //         description:
    //         link:""
    //     }
    // ]
    return(

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Git hub link</Button>
        <Button variant="primary">Deploy link</Button>
      </Card.Body>
    </Card>
    )
}

export default Portfolio;