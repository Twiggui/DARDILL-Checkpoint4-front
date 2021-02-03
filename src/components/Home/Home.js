import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import annonces from '../../images/Home-annonces.png';
import animaux from '../../images/Home-animaux.png';
import urgences from '../../images/Home-urgences.png';

const Home = () => {
  return (
    <div className='home'>
      <div className='annonces'>
        <Link to='/annonces'>
          <img className='image' alt='annonces' src={annonces} />
          <button className='button'>Les annonces</button>
        </Link>
      </div>
      <div className='animaux'>
        <Link to='/animaux'>
          <img className='image' alt='animaux' src={animaux} />
          <button className='button'>Mes animaux</button>
        </Link>
      </div>
      <div className='urgences'>
        <Link to='/urgences'>
          <img className='image' alt='urgences' src={urgences} />
          <button className='button'>Urgences</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
