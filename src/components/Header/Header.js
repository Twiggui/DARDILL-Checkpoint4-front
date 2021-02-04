import React, { useContext } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink, useHistory } from 'react-router-dom';
import './Header.scss';
import logo from '../../images/Fanimals logo.png';
import profil from '../../images/profil.png';

import { UserContext } from '../../context/UserContext';

const Header = () => {
  const history = useHistory();

  const { userDetails, loggedIn, setLoggedIn } = useContext(UserContext);

  return (
    <div className='header'>
      <div className='menu-burger'>
        <Menu width={300}>
          <div className='profil'>
            <img alt='profil' src={profil} />
            {loggedIn ? (
              <div className='welcome-user-message'>
                <div>{`Bienvenue`}</div>
                <div>{`${userDetails.firstname} ${userDetails.lastname} !`}</div>
                <button
                  onClick={() => {
                    setLoggedIn(false);
                    history.push('/');
                  }}
                >
                  Se déconnecter
                </button>
              </div>
            ) : (
              <button>
                <NavLink to='/signIn'>Se connecter</NavLink>
              </button>
            )}
          </div>

          <NavLink to='/'>Home</NavLink>
          <NavLink to='/annonces'>Les annonces</NavLink>
          <NavLink to='/animaux'>Mes animaux</NavLink>
          <NavLink to='/urgences'>Urgences</NavLink>
        </Menu>
      </div>
      <img className='logo' alt='logo' src={logo} />
      <div className='navigation'>
        <NavLink to='/' className='link'>
          Home
        </NavLink>
        {!loggedIn && (
          <div style={{ display: 'flex' }}>
            <NavLink to='/signIn' className='link'>
              Se connecter
            </NavLink>
            <NavLink to='/signUp' className='link'>
              S'inscrire
            </NavLink>
          </div>
        )}

        <NavLink to='/annonces' className='link'>
          Les annonces
        </NavLink>
        <NavLink to='/animaux' className='link'>
          Mes animaux
        </NavLink>
        <NavLink to='/urgences' className='link'>
          Urgences
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
