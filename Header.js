import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div class="header">
          <div class="container">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col logo_section">
                <div class="full">
                  <div class="center-desk">
                    <div class="logo">
                      <a href="index.html">
                        <img src="images/logo.png" alt="#" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <div class="location_icon_bottum_tt">
                  <ul>
                    <li>
                      <img src="icon/loc1.png" />
                      Location
                    </li>
                    <li>
                      <img src="icon/email1.png" />
                      demo@gmail.com
                    </li>

                    <li>
                      <img src="icon/call1.png" />
                      (+71)9876543109
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 location_icon_bottum">
                <div class="row">
                  <div class="col-md-8 ">
                    <div class="menu-area">
                      <div class="limit-box">
                        <nav class="main-menu">
                          <ul class="menu-area-main">
                            <li class="active">
                              {" "}
                              <a href="index.html">Home</a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a href="#about">About</a>{" "}
                            </li>
                            <li>
                              <a href="#product">Products</a>
                            </li>
                            <li>
                              <a href="#testimonial">Testimonial</a>
                            </li>
                            <li>
                              <a href="#contact">Contact Us</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <form class="search">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Search"
                      />
                      <button>
                        <img src="images/search_icon.png" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
