// import Card from "react-bootstrap/Card";
// import {Container,Col,Row} from 'react-bootstrap';
// import { Button } from "react-bootstrap";
import {
  codequiz,
  weatherdashboard,
  notetaker,
  workdayplanner,
  employeetracker,
  teamprofile,
  freakimono,
  pokemonbattle,
  boneBuddies,
} from "../../assets/images";
import "./portfolio.css";

const Portfolio = () => {
  const projectsInfo = [
    {
      title: "Bone Buddies",
      image: boneBuddies,
      description:
        "Bone Buddies is the ultimate web application to discover and interact with other dog lovers emphasizing the importance of finding the ideal dog playmate for your dog.Our site will easily guide you through the process of creating an account and then setting up your dog's profile.  And because we love dogs so much... of course",
      githuburl: "https://github.com/Unicorn-Barf/Doggy_Dating",
      deployurl: "https://dev-bone-buddies.herokuapp.com/",
    },
    {
      title: "Code Quiz",
      image: codequiz,
      description:
        "Code-Quiz application to test user's knowledge of javascript.User needs to answer the question based on the time given.Timer will deduct 10 secs for selecting every incorrect answer.User should see the final score at the end of the game",
      githuburl: "https://github.com/ashachakre0906/Code-Quiz",
      deployurl: "https://ashachakre0906.github.io/Code-Quiz",
    },
    {
      title: "Weather Dashboard",
      image: weatherdashboard,
      description:
        "The challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.The server-side API used to get response data object is retrieved from the Open Weather API.User should be able to search for any city name which would display current weather conditions,the temperature, the humidity, the wind speed, the UV index and five days forecast of that particular city.We are storing the previously searched cities in Local Storage and persistently displaying the same cities on the webpage",
      githuburl: "https://github.com/ashachakre0906/Weather-Dashboard",
      deployurl: "https://ashachakre0906.github.io/Weather-Dashboard",
    },
    {
      title: "Note taker",
      image: notetaker,
      description:
        "The goal is to build the backend application and connect it with the frontend application to the provided front end code and then deploy the entire application to Heroku.we need to create an application called Note Taker that can be used to retrieve, write, save and delete notes",
      githuburl: "https://github.com/ashachakre0906/note-taker",
      deployurl: "https://notes-keep-app.herokuapp.com",
    },
    {
      title: "Work Day Planner",
      image: workdayplanner,
      description:
        "Work-day scheduler allows user to save events for each hour of the day.The app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. moment.js link to an library to work with date and time.",
      githuburl: "https://github.com/ashachakre0906/Work-Day-Planner",
      deployurl: "https://ashachakre0906.github.io/Work-Day-Planner",
    },
    {
      title: "Employee Tracker",
      image: employeetracker,
      description:
        "Challenge is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.These interfaces are called content management systems (CMS) which allows non-developers to easily view and interact with information stored in databases",
      githuburl: "https://github.com/ashachakre0906/employee-tracker",
      deployurl: "https://github.com",
    },
    {
      title: "Team Profile Generator",
      image: teamprofile,
      description:
        "Challenge is to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays a nicely formatted team roster based on user input and summaries for each person.",
      githuburl: "https://github.com/ashachakre0906/team-Profile-Generator",
      deployurl: "https://ashachakre0906.github.io/team-Profile-Generator",
    },
    {
      title: "Freakimono",
      image: freakimono,
      description:
        "Welcome to Freakimono! This immersive app combines the joy of creating and caring for a loveable little creature and the fun of connecting with other users to battle it out in a dynamic battle environment",
      githuburl: "https://github.com/Team-Narwhal/My_Pet",
      deployurl: "https://freakimono.herokuapp.com",
    },
    {
      title: "Pokemon Battle",
      image: pokemonbattle,
      description:
        "Collaborate with fellow developers to build a front-end application that is interactive (i.e: accept and respond to user input) and utilizes at least two server-side APIs. The application will be live and deployed to Github pages",
      githuburl: "https://github.com/dnsnguy08/Pokemon-Battle",
      deployurl: "https://dnsnguy08.github.io/Pokemon-Battle",
    },
  ];

  // <div className="row">
  //   <Card style={{width: "18rem"}} key={index} className='box'>
  //   <Card.Img variant="top" src={card.image} className='card-img-top' />
  //   <Card.Body>
  //     <Card.Title>{card.title}</Card.Title>
  //     <Card.Text>{card.description}</Card.Text>
  //     <Button variant="primary">{card.githuburl}</Button>
  //     <Button variant="primary">{card.deployurl}</Button>
  //   </Card.Body>
  // </Card>
  //   </div>

  return (
    <div className="container-1">
      <div className="grid">
        {projectsInfo.map((project, i) => {
          return (
            <a className="card-link" href={project.githuburl} target="_blank">
              <div key={i} className="card">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt="project image"
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{`${project.description.substring(
                    0,
                    100
                  )}...`}</p>
                  {/* <a href={card.githuburl} className="btn btn-primary">Github</a>
    <a href={card.deployurl} className="btn btn-primary">Deployapp</a> */}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  ); //this will activate render card function six times for each project
};

export default Portfolio;
