import React from "react";

import Card from "../components/Card";
import MainCard from "../components/MainCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { getAllPeople } from "../services/peopleService";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      pope: {}
    };
  }

  componentDidMount() {
    getAllPeople()
      .then(infoPeople => {
        console.log(infoPeople);
        const people = infoPeople.data.people;
        const pope = people.filter(person => person.main)[0];
        this.setState({ people, pope });
      })
      .catch(e => console.log(e));
  }

  buildCards() {
    if (this.state.people.length > 0) {
      const people = this.state.people.map((person, key) => {
        if (!person.main) {
          let likePointsPercent = 0;
          let dislikePointsPercent = 0;
          const { likepoints, dislikepoints } = person;
          const totalpoints = likepoints + dislikepoints;
          if (totalpoints === 0) {
            likePointsPercent = 50;
            dislikePointsPercent = 50;
          } else {
            likePointsPercent = Math.round((likepoints * 100) / totalpoints);
            dislikePointsPercent = 100 - likePointsPercent;
          }
          return (
            <Card
              key={key}
              id={person.id}
              title={person.name}
              image={person.image}
              description={person.description}
              comment={person.comment}
              likepoints={likepoints}
              likePointsPercent={likePointsPercent}
              dislikepoints={dislikepoints}
              dislikePointsPercent={dislikePointsPercent}
            ></Card>
          );
        }
      });
      return people;
    }
    return [];
  }

  render() {
    const { pope } = this.state;
    return (
      <div className="home">
        <NavBar></NavBar>
        <MainCard
          title={pope.name}
          image={pope.image}
          comment={pope.comment}
        ></MainCard>
        <div className="container">
          <div className="messagebox">
            <div className="speakout">
              Speak out. Be heard. <br />
              <h1>Be Counted</h1>
            </div>
            <div className="thumb">
              <p>
                Rule of Thumb is a crowd sourced court of public opinion where
                anyone and everyone can speak out and speak freely. It’s easy:
                You share your opinion, we analyze and put the data in a public
                report.
              </p>
            </div>
            <div className="closemessage">X</div>
          </div>
        </div>
        <div className="container">
          <h2>Votes</h2>
          <div className="grid">{this.buildCards()}</div>
        </div>
        <div className="container">
          <div className="register">
            <img
              src="./images/people.png"
              alt="people"
              className="imagepeople"
            />
            <div className="registercontent">
              <p>Is there anyone else you would want us to add?</p>
              <button className="regbutton">Submit Name</button>
            </div>
          </div>
        </div>
        <div className="container">
          <hr />
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default Home;
