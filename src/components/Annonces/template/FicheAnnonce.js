import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './FicheAnnonce.scss';
import male from '../../../images/homme.png';
import female from '../../../images/femme.png';
import { UserContext } from '../../../context/UserContext';

const FicheAnnonce = (props) => {
  const { setCurrentAnimalId } = useContext(UserContext);

  const { animal } = props;

  const getCurrentAnimalId = () => {
    setCurrentAnimalId(animal.id);
  };

  return (
    <div className='ficheAnnonce'>
      <div className='presentationAnimal'>
        <Link to={`/annonces/${animal.id}`} onClick={getCurrentAnimalId}>
          <div
            className='cat-profile'
            style={{
              backgroundImage: `url(${process.env.REACT_APP_API_BASE_URL}/uploads/${animal.image1})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '50%',
            }}
          ></div>
        </Link>
        <h2>
          {animal.sex === 'Mâle' ? (
            <img className='sex-profile' alt='male' src={male} />
          ) : (
            <img className='sex-profile' alt='female' src={female} />
          )}
          {animal.name}
        </h2>

        <div className='caracteristiques'>
          <div className='sexe'>{animal.sex}</div>
          <div className='age'>Age : {animal.age} ans</div>
          <div className='race'>Race : {animal.race}</div>
          <div className='adoptionDate'>
            Date de mise à l'adoption : {animal.adoptionDepositDate}
          </div>
        </div>
        <Link to={`/annonces/${animal.id}`} onClick={getCurrentAnimalId}>
          <button className='detailAnnonceBoutton'>Voir l'annonce ! </button>
        </Link>
      </div>
      <div className='aside'>
        <div className='detailAnnonce'></div>
      </div>
    </div>
  );
};

export default FicheAnnonce;
