import React, { Component } from "react";

class Achievements extends Component {
  render() {
    const { badges } = this.props;
    return (
      <div className="badge-grid px-3 pt-4">
        <div className="text-center">
          <img
            className="badge-image"
            src={
              badges.includes("1")
                ? "https://i.ibb.co/gTQdLQY/Rex-Badge-2.png"
                : ""
            }
            alt="avatar01"
          />
          <p>Badge 1</p>
        </div>
        <div className="text-center">
          <img
            className="badge-image"
            src={
              badges.includes("2")
                ? "https://i.ibb.co/C17CFfB/Rex-Badge-1.png"
                : "https://cdna.artstation.com/p/assets/images/images/006/102/672/large/brice-laville-saint-martin-neytiri-01.jpg?1496079157"
            }
            alt="avatar01"
          />
          <p>Badge 2</p>
        </div>
        <div className="text-center">
          <img
            className="badge-image"
            src={
              badges.includes("3")
                ? "https://i.ibb.co/pJdLL5L/Rex-Badge-3.png"
                : "https://cdna.artstation.com/p/assets/images/images/006/102/672/large/brice-laville-saint-martin-neytiri-01.jpg?1496079157"
            }
            alt="avatar01"
          />
          <p>Badge 3</p>
        </div>
        <div className="text-center">
          <img
            className="badge-image"
            src={
              badges.includes("4")
                ? "https://i.ibb.co/m5BQr12/Rex-Badge4-1.png"
                : "https://cdna.artstation.com/p/assets/images/images/006/102/672/large/brice-laville-saint-martin-neytiri-01.jpg?1496079157"
            }
            alt="avatar01"
          />

          <p>Badge 4</p>
        </div>
        <div className="text-center">
          <img
            className="badge-image"
            src={
              badges.includes("5")
                ? "https://i.ibb.co/9pBpNnn/Asset-7.png"
                : "https://cdna.artstation.com/p/assets/images/images/006/102/672/large/brice-laville-saint-martin-neytiri-01.jpg?1496079157"
            }
            alt="avatar01"
          />
          <p>Badge 5</p>
        </div>
        <div className="text-center">
          <img
            className="badge-image"
            src={
              badges.includes("6")
                ? ""
                : "https://cdna.artstation.com/p/assets/images/images/006/102/672/large/brice-laville-saint-martin-neytiri-01.jpg?1496079157"
            }
            alt="avatar01"
          />
          <p>Badge 6</p>
        </div>
      </div>
    );
  }
}

export default Achievements;
