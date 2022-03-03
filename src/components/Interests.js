import React from 'react';
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
const Interests = () => {
    return (
      <div className="skills">
        <h2 className="h2">Centres d'intérêts</h2>
        <ul>
          <li>Jeux</li>
          <li>Séries & Films</li>
          <li>Musique</li>
        </ul>
        <div className="interests">
          <SportsEsportsIcon style={{ fontSize: 40 }} />
          <LocalMoviesIcon style={{ fontSize: 40 }} />
          <MusicNoteIcon style={{ fontSize: 40 }} />
        </div>
      </div>
    );
};

export default Interests;