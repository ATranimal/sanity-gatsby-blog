import React from "react";

const GamesPortfolio = () => {
  return (
    <>
      <div class="header box">
        <div class="header-text">
          <h1> andt.io </h1>
          <h2> andrew tran </h2>
        </div>
      </div>

      <div class="projects box">
        <div class="flex-area">
          <div class="column left">
            <div class="item">
              <img src="/static/gamesportfolio/watermelons.png" />
              <div class="hidden">
                <div class="hidden-text">
                  <h3>growing watermelons</h3>
                  <p> puzzle game released on the playstore and itch </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://patran.itch.io/growing-watermelons"
                  >
                    link
                  </a>
                </div>
              </div>
            </div>
            <div class="item">
              <p> project </p>
            </div>
          </div>

          <div class="column middle">
            <div class="item">
              <img src="/static/gamesportfolio/traveller.png" />
              <div class="hidden">
                <div class="hidden-text">
                  <h3>traveller ep</h3>
                  <p> music ep recorded in montreal canada </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://soundcloud.com/patransaint/sets/traveller"
                  >
                    link
                  </a>
                </div>
              </div>
            </div>
            <div class="item">
              <p> project </p>
            </div>
          </div>

          <div class="column right">
            <div class="item">
              <img src="/static/gamesportfolio/accessiblemobilemenu.png" />x{" "}
              <div class="hidden">
                <div class="hidden-text">
                  <h3> accessible mobile menu </h3>
                  <p>
                    {" "}
                    senior design project at McGill, a web based restaurant menu for low vision
                    users{" "}
                  </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.google.com/presentation/d/1jzRaRKnO8u0yAchgR9PwLsR6g4kBgpOunLuJS5Cfgj4/edit?usp=sharing"
                  >
                    overview
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/ATranimal/AccessibleMobileMenu"
                  >
                    repo
                  </a>
                </div>
              </div>
            </div>
            <div class="item">
              <img src="/static/gamesportfolio/crossbrained.png" />
              <div class="hidden">
                <div class="hidden-text">
                  <h3> cross-brained </h3>
                  <p> unity project experimenting with alternative control methods </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://patran.itch.io/cross-brained"
                  >
                    link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamesPortfolio;
