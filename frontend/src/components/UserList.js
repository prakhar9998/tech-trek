import React from "react";

class UserList extends React.Component {
  render() {
    const avtarCollection = {
      1: "https://i.ibb.co/TbRZ9b7/Group-11.png",
      2: "https://i.ibb.co/GnNz6rK/Group-14.png",
      3: "https://i.ibb.co/Y3jzNNV/Group-12.png",
      4: "https://i.ibb.co/9tNg7VW/Group-15.png",
      5: "https://i.ibb.co/r2pXhbD/Group-16.png",
      6: "https://i.ibb.co/pyYKwXL/A6.png"
    };

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
                      src={avtarCollection[listitem.avatar_no]}
                      alt=""
                      className="avatar"
                    />
                    <div className="d-flex flex-column padding-user">
                      <div className="d-flex">
                        <span className="user-column">
                          {listitem.player_name}
                        </span>
                      </div>
                      <span className="user-email">{listitem.email}</span>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center">
                      {listitem.badge_4 > 0 ? (
                        <>
                          <img
                            src="https://i.ibb.co/9pBpNnn/Asset-7.png"
                            width="30px"
                            height="30px"
                            alt="badge"
                          />
                          <div style={{ position: "relative" }}>
                            <span
                              style={{
                                fontSize: "0.7rem",
                                position: "absolute"
                              }}
                            >
                              x{listitem.badge_4}
                            </span>
                          </div>
                        </>
                      ) : null}
                      <span className="score-column ml-3">
                        {listitem.score === 0 ? "00" : listitem.score}
                      </span>
                    </div>
                  </div>
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
