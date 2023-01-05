import React from "react";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
// import { MDBIcon } from 'mdb-react-ui-kit';
const Contactus = () => {
  return (
    <section id="contactus">
      <div className="container-item">
        <p>Food Court</p>
        <div className="media">
          <span className="melement">
            <BsFacebook />
          </span>
          <span className="melement">
            <BsTwitter />
          </span>
          <span className="melement">
            <BsYoutube />
          </span>
          <span className="melement">
            <BsInstagram />
          </span>
        </div>
      </div>
      <div className="copyright">
        Copyright &copy; www.foodcourt.com. All rights reserved!
      </div>
    </section>
  );
};

export default Contactus;
