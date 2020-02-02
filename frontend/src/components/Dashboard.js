import React, { Component } from "react";
import Footer from "./header-footer/footer";
import Question from "./Question";
import Achievements from "./Achievements";
import Timer from "./timer";
import NonPaid from "./nonpaid";
import GameStart from "./gamestart";
import audioSound from "../assets/bgaudio.mp3";
import winner from "../assets/winner.mp3";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      errorMsg: [
        "Oops!! Try Again",
        "You are almost there",
        "Better Luck Next Time",
        "Wrong!!",
        "Try! Try! Try!",
        "Far from Bingo"
      ],
      successMsg: [
        "Bingo",
        "Congratulations",
        "Correct",
        "Target Accomplish",
        "One step ahead",
        "Level up",
        "Hurray!!!",
        "Yay"
      ],
      selectedError: "",
      selectedSuccess: "",
      currQ: "",
      score: "",
      question: "",
      isTimeLeft: false,
      remainingTime: 0,
      isPaid: "",
      badgeArray: [],
      startTime: 0
    };
  }

  componentDidMount() {
    // const time = new Date();
    // const hours = time.getHours();
    // const min = time.getMinutes();
    // const sec = time.getSeconds();
    // const TimeLeft = (23 - hours) * 3600 + (60 - min) * 60 + (60 - sec);
    // // this.setState({
    // //   startTime: TimeLeft
    // // });
    const localtoken = localStorage.getItem("logintoken");

    fetch(`${process.env.REACT_APP_URL}/questions/`, {
      method: "get",
      headers: { Authorization: `Bearer ${localtoken}` }
    })
      .then(response => response.json())
      .then(responseJson => {
        const ques =
          responseJson && responseJson.detail && responseJson.detail.question;
        let badges = [];
        if (responseJson.badges) {
          responseJson.badges.map(data => {
            badges.push(Object.values(data)[0]);
          });
        }
        this.setState({
          currQ: responseJson.player_info.current_question,
          score: responseJson.player_info.score,
          badgeArray: badges
        });
        this.setState({
          isPaid: responseJson.player_info.is_paid
        });

        if (responseJson.isTimeLeft === true) {
          this.setState({
            isTimeLeft: true,
            remainingTime: responseJson.detail.time_left
          });
        } else {
          this.setState({
            question: ques
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  onAnswerChange = e => {
    this.setState({ answer: e.target.value });
  };

  answerSubmit = e => {
    var music = new Audio(winner);
    e.preventDefault();
    const localtoken = localStorage.getItem("logintoken");

    fetch(`${process.env.REACT_APP_URL}/questions/`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${localtoken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        answer: this.state.answer
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.success === false && this.state.answer.length > 0) {
          this.setState({
            selectedSuccess: ""
          });
          this.getRandomErr();
        } else {
          this.getRandomSuccess();
          music.play();
          fetch(`${process.env.REACT_APP_URL}/questions/`, {
            method: "get",
            headers: { Authorization: `Bearer ${localtoken}` }
          })
            .then(response => response.json())
            .then(responseJson => {
              const ques =
                responseJson &&
                responseJson.detail &&
                responseJson.detail.question;
              let badges = [];
              if (badges) {
                responseJson.badges.map(data => {
                  badges.push(Object.values(data)[0]);
                });
              }
              this.setState({
                currQ: responseJson.player_info.current_question,
                score: responseJson.player_info.score,
                badgeArray: badges
              });

              if (responseJson.isTimeLeft === true) {
                this.setState({
                  isTimeLeft: true,
                  remainingTime: responseJson.detail.time_left
                });
              } else {
                this.setState({
                  question: ques
                });
              }
            })
            .catch(error => {
              console.log(error);
            });

          this.setState({
            selectedError: "",
            selectedSuccess: ""
          });
        }
      })
      .catch(error => {
        console.log(error);
      });

    this.refs.answer.value = "";
  };

  displayQuestion = () => {
    const localtoken = localStorage.getItem("logintoken");

    fetch(`${process.env.REACT_APP_URL}/questions/`, {
      method: "get",
      headers: { Authorization: `Bearer ${localtoken}` }
    })
      .then(response => response.json())
      .then(responseJson => {
        const ques =
          responseJson && responseJson.detail && responseJson.detail.question;
        if (responseJson.isTimeLeft === true) {
          this.setState({
            isTimeLeft: true,
            remainingTime: responseJson.detail.time_left
          });
        } else {
          this.setState({
            isTimeLeft: false,
            question: ques
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  getRandomSuccess = () => {
    var item = this.state.successMsg[
      Math.floor(Math.random() * this.state.successMsg.length)
    ];
    this.setState({
      selectedSuccess: item
    });
  };
  getRandomErr = () => {
    var item = this.state.errorMsg[
      Math.floor(Math.random() * this.state.errorMsg.length)
    ];
    this.setState({
      selectedError: item
    });
  };

  render() {
    return (
      <div className="dashboard">
        {/* <Header /> */}
        <audio autoPlay loop>
          <source src={audioSound} type="audio/mp3" />
        </audio>

        {this.state.isPaid === "False" ? (
          <NonPaid />
        ) : (
          <div>
            {this.state.startTime <= 0 ? (
              <div
                className="dashboard-content pt-3 mt-5"
                style={{ zIndex: "1" }}
              >
                <div className="question-container">
                  <div style={{ margin: "auto" }}>
                    <div className="input-group">
                      <h4 className="text-left ques-head">QUESTION</h4>
                      {this.state.isTimeLeft ? (
                        <>
                          <Question ques="Hold your Horses! next question is on the way !!" />
                          <div>
                            <input
                              className="answer-block"
                              type="text"
                              placeholder="Patience is power....."
                              disabled
                            />
                            <div className="btn-time btn py-2 px-2">
                              <Timer
                                displayQuestion={this.displayQuestion}
                                time={Math.ceil(this.state.remainingTime)}
                              />
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <Question ques={this.state.question} />
                          <form onSubmit={this.answerSubmit}>
                            <div>
                              <input
                                className="answer-block"
                                type="text"
                                placeholder="I seek an Answer...."
                                ref="answer"
                                onChange={this.onAnswerChange}
                                required
                              />
                              <button className="btn btn-primary check-btn py-2 px-2">
                                <b> CHECK</b>
                              </button>
                            </div>

                            <div style={{ color: "red" }} className="pt-1">
                              <p>{this.state.selectedError} &nbsp;</p>
                            </div>
                            <div style={{ color: "green" }}>
                              <p>{this.state.selectedSuccess}</p>
                            </div>
                          </form>
                        </>
                      )}
                    </div>

                    <br />
                  </div>
                </div>

                <div>
                  <h4
                    className="text-center font-weight-bold pb-4 mt-3"
                    style={{ borderBottom: "1px solid #fff" }}
                  >
                    LEVEL : {this.state.currQ} &nbsp; SCORE : {this.state.score}
                  </h4>

                  <h4 className="text-center font-weight-bold pt-4">
                    ACHIEVEMENTS
                  </h4>
                  <Achievements badges={this.state.badgeArray} />
                </div>
              </div>
            ) : (
              <GameStart time={this.state.startTime} />
            )}
          </div>
        )}

        <Footer />
      </div>
    );
  }
}
export default Dashboard;
