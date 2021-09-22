// import react from "react";

const Navbar = () => {
  return (
    <div class="top-navbar">
      <nav class="navbar navbar-expand-lg navbar-light ">
        {/* <img src="" alt=""> */}
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        {/* <img style="width:40px;" src="https://www.pinclipart.com/picdir/middle/16-161764_lesson-hacker-free-computer-science-logo-computer-science.png" alt=""> */}
        {/* LOGO */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <h5>Department of Computer Science and Engineering</h5>
            </li>
          </ul>
        </div>
      </nav>
      <nav class="site-header sticky-top py-1">
        <div class="container d-flex flex-column flex-md-row justify-content-between">
          <a class="py-2" href="#"></a>
          <a class="py-2 navbar-text d-none d-md-inline-block" href="#">
            Academics
          </a>
          {/* <!-- <a class="py-2 d-none navbar-text d-md-inline-block" href="#">Faculty</a> --> */}
          <a class="py-2 d-none d-md-inline-block navbar-text" href="#">
            Student
          </a>
          {/* <!-- <a class="py-2 d-none d-md-inline-block navbar-text" href="#">Alumini</a> --> */}
          <a class="py-2 d-none d-md-inline-block navbar-text" href="#">
            Placement
          </a>
          <a class="py-2 d-none d-md-inline-block navbar-text" href="#">
            Research
          </a>
          <a class="py-2 d-none d-md-inline-block navbar-text" href="#">
            Magazine
          </a>
          {/* <!-- <a class="py-2 d-none d-md-inline-block navbar-text" href="#">Activities</a> --> */}
          <a class="py-2 d-none d-md-inline-block navbar-text" href="#">
            Newsletter
          </a>
          {/* <!-- <a class="py-2 d-none d-md-inline-block navbar-text" href="#">Gallery</a> --> */}
          {/* <!-- <a class="py-2 d-none d-md-inline-block navbar-text" href="#">Events</a> --> */}
          <a class="py-2 d-none d-md-inline-block navbar-text" href="#">
            Professional Activity
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
