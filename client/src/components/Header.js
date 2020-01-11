import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      // <nav>
      //   <div className="nav-wrapper">
      //     <a className="left-brand-logo">
      //       Emaily
      //     </a>
      //     <ul className="right">
      //       <li>
      //         <a>
      //           Login with Google
      //         </a>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
      <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" class="brand-logo">
            Logo
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#">Signin with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
