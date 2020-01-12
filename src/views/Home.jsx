import React from "react";
import data from "../static/data/data";

import Card from "../components/Card";
import MainCard from "../components/MainCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: data
    };
  }

  buildCards() {
    return this.state.people.data.map((person, key) => {
      if (!person.main) {
        const likePercent = (70 * 100) / (50 + 50);
        const dislikePercent = (50 * 100) / (50 + 50);
        return (
          <Card
            key={key}
            title={person.name}
            image={person.image}
            description={person.description}
            comment={person.comment}
            dislikepoints={Math.round(dislikePercent * 100) / 100}
            likepoints={Math.round(likePercent * 100) / 100}
          ></Card>
        );
      }
    });
  }

  render() {
    const pope = this.state.people.data.filter(person => person.main);

    return (
      <div className="home">
        <NavBar></NavBar>
        <MainCard
          title={pope[0].name}
          image={pope[0].image}
          comment={pope[0].comment}
        ></MainCard>
        <div className="container">
          <div className="messagebox">
            <div className="speakout">Speak out. Be heard. Be Counted</div>
            <div className="thumb">
              Rule of Thumb is a crowd sourced court of public opinion where
              anyone and everyone can speak out and speak freely. It’s easy: You
              share your opinion, we analyze and put the data in a public
              report.
            </div>
            <div className="closemessage">
              <button>X</button>
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Votes</h2>
          <div className="grid">{this.buildCards()}</div>
        </div>
        <div className="container">
          <div className="register">
            <h1>Is there anyone else you would want us to add?</h1>
            <button className="regbutton">Submit Name</button>
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
