import React, { Component } from "react";
import Header from "./header-footer/header";
import Footer from "./header-footer/footer";
class Rules extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="rules">
        <Header />
        <div className="spider-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="web-svg"
            viewBox="0 0 280 355"
          >
            <image
              id="web"
              width="250"
              height="255"
              xlinkHref="data:img/png;base64,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DADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMWDr/2B+/cw4Xsyaapvk79l+jYD9UlE8AAAAASUVORK5CYII="
            />
            <image
              id="thread"
              x="150"
              y="102"
              width="4"
              height="153"
              xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAADVCAYAAABwk1H0AAAAhUlEQVRIiWP4//9/yv///xlgGET8/P//vyWyAAg8/f//vxSyAAgc+///Pxvjf7AwHMxmYkAF19AFLqALMIwK4BcQQA9kMkLsIroZjqOhPiowKjAMBahRXHxENyMQXcWH0RQ0KjAqMCowKjAqMCowRAVA/bkDSH06sAAIB/z//1+BgYGBAQDYgWlyP/KLjwAAAABJRU5ErkJggg=="
            />
            <image
              id="spidy"
              x="133"
              y="250"
              width="39"
              height="35"
              xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAjCAYAAAAqoHJFAAAC7ElEQVRogdVZ0W3bMBC9FvmvRlAmqDJB1QniTmBtUG+QbBBvUG1gZ4LKE1iZIN7A8gRXXPsYnFlKIiWKQR5ASIAk8t7d4/FIfWJmSoCSiO5xLdRwLRE1aM+LmyFkF2wlM7+yH+S99ZL2LNVxxsy/PEna2OH76HYtIeOMiH5bcg2FyPsHEZ1iGhabbAyiBkL0joi6OKYRfY7VEbCLRFSQw3HRcDPSkRh+7HnWqKtE4RbZNiZk/K1Si+m/gIpsiPT3feOPyTjH/PkSmcQSuBDRSgUhmGwfcrQMXt4s7JALItxiDp+mJK8YCUoIv/bIKiZu52bnsTkrBL6qyidT0WwxPy4JiAoqqYEg1UJFt4Mt0l6GHGJHNlNlXQmpfjQIWVOCHjR5TTZH5rWjdFCe055cwdv3CZ1xwNxtVM4w+UOC883xzR3svSKbKUKNakPIMV9T4ftQtgXMElWq+7/R1XO2myDb1DL3Gc+ocGs/mFtBxS4ixjDLuT5kRQoPqGJE82fcrxNlYY0M4+5gB8OWJ58ydWidXaNYiFXrpoCR77NzA+HYhz4w81ntMTtmrpl5hecZ7vcT96tz0TBzpWyRA4It7DQ4g8fVvniIZItOhzbEq8REH0fsqeAMJ2ljsCbZwFs+u/8iMVlfu0oXaZpIUreUCD2uuSItCcqUhfXEBLJPVEW9zEiWwjG78ahIXCiwpTskJGs25aYkPAR8+49j4InhkzW/3xNnnGDmvhx8idpJ7IRs/R5orbHFrp8xyNrnvw0ysP3O0ktQ5Yhgbq31o+fNQ0SlsyM6kgV7M+KYx4WI1h6qMwXF0RGMUbKFkm071IHVYkv75Lnc5Gpssdu5hLo+rBTRJnBty62ybQ66ACeb6VSr8f6r/lxEfeUzpIq5hEOJ6tZL2Nb+XKIuWYUiZNr0NR20ykV2g4djiSikbQKi3CHJxfqDZwi/Bc51uhjtR5Lq0xzOFY7DdFOF1QuN/dZnqj/vNqRWnVKmTgcR/QHNFYFlrMGfCgAAAABJRU5ErkJggg=="
            />
          </svg>
        </div>
        <div style={{ zIndex: "2" }}>
          <div className="rules-container mt-5">
            <h3 className="section-head  pt-4 pb-3">RULES</h3>
            <div className="upper-list">
              <ul className="list-container">
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit recusandae porro non suscipit culpa sapiente
                  excepturi nulla nostrum ipsa, veniam voluptates! Beatae, minus
                  voluptate!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit recusandae porro non suscipit culpa sapiente
                  excepturi nulla nostrum ipsa, veniam voluptates! Beatae, minus
                  voluptate!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit recusandae porro non suscipit culpa sapiente
                  excepturi nulla nostrum ipsa, veniam voluptates! Beatae, minus
                  voluptate!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit recusandae porro non suscipit culpa sapiente
                  excepturi nulla nostrum ipsa, veniam voluptates! Beatae, minus
                  voluptate!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit recusandae porro non suscipit culpa sapiente
                  excepturi nulla nostrum ipsa, veniam voluptates! Beatae, minus
                  voluptate!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit recusandae porro non suscipit culpa sapiente
                  excepturi nulla nostrum ipsa, veniam voluptates! Beatae, minus
                  voluptate!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit recusandae porro non suscipit culpa sapiente
                  excepturi nulla nostrum ipsa, veniam voluptates! Beatae, minus
                  voluptate!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit recusandae porro non suscipit culpa sapiente
                  excepturi nulla nostrum ipsa, veniam voluptates! Beatae, minus
                  voluptate!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit recusandae porro non suscipit culpa sapiente
                  excepturi nulla nostrum ipsa, veniam voluptates! Beatae, minus
                  voluptate!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit recusandae porro non suscipit culpa sapiente
                  excepturi nulla nostrum ipsa, veniam voluptates! Beatae, minus
                  voluptate!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit recusandae porro non suscipit culpa sapiente
                  excepturi nulla nostrum ipsa, veniam voluptates! Beatae, minus
                  voluptate!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit recusandae porro non suscipit culpa sapiente
                  excepturi nulla nostrum ipsa, veniam voluptates! Beatae, minus
                  voluptate!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit recusandae porro non suscipit culpa sapiente
                  excepturi nulla nostrum ipsa, veniam voluptates! Beatae, minus
                  voluptate!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit recusandae porro non suscipit culpa sapiente
                  excepturi nulla nostrum ipsa, veniam voluptates! Beatae, minus
                  voluptate!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit recusandae porro non suscipit culpa sapiente
                  excepturi nulla nostrum ipsa, veniam voluptates! Beatae, minus
                  voluptate!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit recusandae porro non suscipit culpa sapiente
                  excepturi nulla nostrum ipsa, veniam voluptates! Beatae, minus
                  voluptate!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit recusandae porro non suscipit culpa sapiente
                  excepturi nulla nostrum ipsa, veniam voluptates! Beatae, minus
                  voluptate!
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit recusandae porro non suscipit culpa sapiente
                  excepturi nulla nostrum ipsa, veniam voluptates! Beatae, minus
                  voluptate!
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Rules;
