import React from "react";

class UserList extends React.Component {
  render() {
    return (
      <div style={{ zIndex: "5" }}>
        <div className="leaderboard-container mt-5">
          <h3 className="section-head  pt-4 pb-3">LEADERBOARD</h3>
          <div className="leaderboard-padding">
            {this.props.list.map((listitem, index) => {
              return (
                <div
                  key={index}
                  className="d-flex justify-content-between align-items-center mt-3 "
                >
                  <div className="align-items-center d-flex">
                    <img
                      src="https://i.pinimg.com/originals/27/47/ed/2747edad39a6a4e9fbcfbf3c53822649.png"
                      alt=""
                      className="avatar"
                    />
                    <div className="d-flex flex-column padding-user">
                      <span className="user-column ">
                        {listitem.player_name}
                      </span>
                      <span className="user-email">
                        vishnoi.kunal0@gmail.com
                      </span>
                    </div>
                  </div>
                  <span className="score-column">{listitem.score}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;
