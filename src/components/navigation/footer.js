import React, { Component } from "react";
import "../../CSS/footer.css";
import Button from "@material-ui/core/Button";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <h4>Copyright © Design by Irving Jose Duran 2019 </h4>
        <div className="loginButton">
                    <Button
         
          variant="contained"
          href="https://www.app.duranirving.com"
        >
          Login
        </Button>
        </div>

      </div>
    );
  }
}
