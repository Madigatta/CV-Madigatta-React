import React from "react";
import "./User.css";
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import EventIcon from "@material-ui/icons/Event";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const User = () => {
  return (
    <div className="user">
      <img src="./media/Madigatta.jpg" alt="" className="user__avatar" />
      <h1 className="user__name">DOUCOURE Madigatta</h1>
      <p className="user__profession">Développeur Full Stack</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon />
          28 Allée des peupliers Sevran
        </p>
        <p className="user__info">
          <PhoneIcon />
          <a href="te:+33651492794">06 51 49 27 94</a>
        </p>
        <p className="user__info">
          <MailIcon />
          <a href="mailto:doucouremadi5@gmail.com">doucouremadi5@gmail.com</a>
        </p>
        <p className="user__info">
          <EventIcon />
          Date de naissance : 15 Août 1994
        </p>
        <p className="user__info">
          <LocationOnIcon />
          Lieu de naissance : Kayes MALI
        </p>
      </div>
    </div>
  );
};

export default User;
