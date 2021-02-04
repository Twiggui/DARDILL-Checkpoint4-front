import './FicheDetail.scss';
import React, { useContext, useEffect, useState } from 'react';
import API from '../../services/API';
import { UserContext } from '../../context/UserContext';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const FicheDetail = () => {
  const { currentAnimalId } = useContext(UserContext);
  const [currentAnimal, setCurrentAnimal] = useState({});

  useEffect(() => {
    API.get(`/animals/${currentAnimalId}`).then((res) => {
      setCurrentAnimal(res.data[0]);
    });
  }, [currentAnimalId]);

  return (
    <div className='ficheDetail'>
      <div className='recapitulatif'>
        <div className='presentationAnimal'>
          <h2> {currentAnimal.name}</h2>
          <img
            className='imageAnimal'
            src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${currentAnimal.image1}`}
            alt="profil de l'animal"
          ></img>
          <div>
            Date de mise à l'adoption : {currentAnimal.adoptionDepositDate}
          </div>
        </div>
        <div className='aside'>
          <div className='caracteristiques'>
            <div className='title'>Général</div>
            <div className='title'>Santé</div>
            <div className='title'>Comportement</div>
            <div className='sexe'>
              <li>{currentAnimal.sex}</li>
            </div>
            <div className='vaccin'>
              {currentAnimal.vaccine ? (
                <li>Vacciné : {currentAnimal.vaccine}</li>
              ) : (
                ''
              )}
            </div>
            <div className='caractere1'>
              {currentAnimal.temper1 ? <li>{currentAnimal.temper1}</li> : ''}
            </div>
            <div className='age'>
              <li>Age : {currentAnimal.age} ans</li>
            </div>
            <div className='tatouage'>
              {currentAnimal.tatoo ? (
                <li>Tatouage : {currentAnimal.tatoo}</li>
              ) : (
                ''
              )}
            </div>
            <div className='caractere2'>
              {currentAnimal.temper2 ? <li>{currentAnimal.temper2}</li> : ''}
            </div>
            <div className='couleur'>
              <li>Couleur : {currentAnimal.color}</li>
            </div>
            <div className='medical1'>
              {currentAnimal.health1 ? <li>{currentAnimal.health1}</li> : ''}
            </div>
            <div className='caractere3'>
              {currentAnimal.temper3 ? <li>{currentAnimal.temper3}</li> : ''}
            </div>
            <div className='race'>
              <li>Race : {currentAnimal.race}</li>
            </div>
            <div className='medical2'>
              {currentAnimal.health2 ? <li>{currentAnimal.health2}</li> : ''}
            </div>
            <div className='caractere4'>
              {currentAnimal.temper4 ? <li>{currentAnimal.temper4}</li> : ''}
            </div>
          </div>
          <div className='detailAnnonce'></div>
        </div>
      </div>
      <div className='details'>
        <div className='history'>
          <h3>Association : </h3>
          <p>{currentAnimal.Description} </p>
        </div>
        <Carousel className='galeriePhotos'>
          {currentAnimal && currentAnimal.gallery1 !== null ? (
            <div className='photo'>
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${currentAnimal.gallery1}`}
                alt='animal'
              />
            </div>
          ) : (
            <div></div>
          )}
          {currentAnimal && currentAnimal.gallery2 !== null ? (
            <div className='photo'>
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${currentAnimal.gallery2}`}
                alt='animal'
              />
            </div>
          ) : (
            <div></div>
          )}
          {currentAnimal && currentAnimal.gallery3 !== null ? (
            <div className='photo'>
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${currentAnimal.gallery3}`}
                alt='animal'
              />
            </div>
          ) : (
            <div></div>
          )}
          {currentAnimal && currentAnimal.gallery4 !== null ? (
            <div className='photo'>
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${currentAnimal.gallery4}`}
                alt='animal'
              />
            </div>
          ) : (
            <div></div>
          )}
          {currentAnimal && currentAnimal.gallery5 !== null ? (
            <div className='photo'>
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${currentAnimal.gallery5}`}
                alt='animal'
              />
            </div>
          ) : (
            <div></div>
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default FicheDetail;
