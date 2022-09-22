import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
const Portfolio = () => {
  const projectsInfo = [
    {
      title: "my-project",
      image: "",
      description: "First project",
      githubrepolink: "github.com",
      deploylink: "github.com",
    },
    {
      title: "my-project",
      image: "",
      description: "First project",
      githubrepolink: "github.com",
      deploylink: "github.com",
    },
    {
      title: "my-project",
      image: "",
      description: "First project",
      githubrepolink: "github.com",
      deploylink: "github.com",
    },
    {
      title: "my-project",
      image: "",
      description: "First project",
      githubrepolink: "github.com",
      deploylink: "github.com",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.description}</Card.Text>
          <Button variant="primary">{card.githubrepolink}</Button>
          <Button variant="primary">{card.deploylink}</Button>
        </Card.Body>
      </Card>
    );
  };

  return <div className="App">
    {projectsInfo.map(renderCard)}</div>;
};

export default Portfolio;
