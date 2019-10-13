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
                : "https://i.ibb.co/v4jS0Jq/Rex-Badge-Overlay-4.png"
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
                : "https://i.ibb.co/1K5CZxD/Rex-Badge-Overlay-3.png"
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
                : "https://i.ibb.co/PmJ24rF/Rex-Badge-Overlay-2.png"
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
                ? "https://i.ibb.co/9pBpNnn/Asset-7.png"
                : "https://i.ibb.co/3FYKLqY/Rex-Badge-Overlay-5.png"
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
                ? "https://i.ibb.co/m5BQr12/Rex-Badge4-1.png"
                : "https://i.ibb.co/w6tSnFd/Rex-Badge-Overlay-1.png"
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
                ? "https://i.ibb.co/k5HV1fQ/Rex-Badge5.png"
                : "https://i.ibb.co/k07Mmpy/Rex-Badge-Overlay-6.png"
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
