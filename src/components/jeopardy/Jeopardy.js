import React, { Component } from "react";
import JeopardyService from "../../jeopardyService";
import Display from "../display/Display";

class Jeopardy extends Component {
  client;

  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: { category: {} },
      score: 0,
    };
  }

  getNewQuestion = () => {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
      console.log(this.state.data.answer);
    });
  };

  componentDidMount = () => {
    this.getNewQuestion();
  };

  checkAnswer = (event) => {
    event.preventDefault();

    let userAnswer = event.target.answer.value;
    if (userAnswer === this.state.data.answer) {
      this.setState((state, props) => ({
        score: state.score + state.data.value,
      }));
    } else {
      this.setState((state, props) => ({
        score: state.score - state.data.value,
      }));
    }
    this.getNewQuestion();
    event.target.answer.value = "";
  };

  render() {
    return (
      <div>
        <Display
          scoreGame={this.checkAnswer}
          data={this.state.data}
          score={this.state.score}
        />
      </div>
    );
  }
}

export default Jeopardy;
