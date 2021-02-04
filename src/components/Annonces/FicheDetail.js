import './FicheDetail.scss';
import React, { useContext, useEffect, useState } from 'react';
import chat from '../../images/chat.jpg';
import API from '../../services/API';
import { UserContext } from '../../context/UserContext';

const FicheDetail = () => {
  const { currentAnimalId } = useContext(UserContext);
  const [currentAnimal, setCurrentAnimal] = useState({});

  useEffect(() => {
    API.get(`/animals/${currentAnimalId}`).then((res) =>
      setCurrentAnimal(res.data[0])
    );
  }, [currentAnimalId]);

  return (
    <div className='ficheDetail'>
      {/* {currentAnimal && (
        <div> */}
      <div className='recapitulatif'>
        <div className='presentationAnimal'>
          <h2> Nom de l'animal</h2>
          <img
            className='imageAnimal'
            src={chat}
            alt="profil de l'animal"
          ></img>
        </div>
        <div className='aside'>
          <div className='caracteristiques'>
            <div className='title'>Général</div>
            <div className='title'>Santé</div>
            <div className='title'>Comportement</div>

            <div className='sexe'>{currentAnimal.sex}</div>
            <div className='vaccin'>Vacciné : {currentAnimal.vaccine}</div>
            <div className='caractere1'>{currentAnimal.temper1}</div>
            <div className='age'>Age : {currentAnimal.age} ans</div>
            <div className='tatouage'>Tatouage : {currentAnimal.tatoo}</div>
            <div className='caractere2'>{currentAnimal.temper2}</div>
            <div className='couleur'>Couleur : {currentAnimal.color}</div>
            <div className='medical1'>{currentAnimal.health1}</div>
            <div className='caractere3'>{currentAnimal.temper3}</div>
            <div className='race'>Race : {currentAnimal.race}</div>
            <div className='medical2'>{currentAnimal.health2}</div>
            <div className='caractere4'>{currentAnimal.temper4}</div>
          </div>
          <div className='detailAnnonce'>
            <div>
              Date de mise à l'adoption : {currentAnimal.adoptionDepositDate}
            </div>
          </div>
        </div>
      </div>
      <div className='details'>
        <div className='histoire'>
          <h3>Association : </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in lorem
            nec neque congue fermentum at sed mauris. Quisque elementum, nisl
            sed mollis pulvinar, ipsum augue vestibulum ante, ut accumsan quam
            eros nec nibh. Mauris vel vestibulum sem. Nunc tristique rutrum
            neque, lobortis cursus augue cursus ut. Praesent blandit sed urna id
            iaculis. Suspendisse at sem et ex hendrerit semper ullamcorper nec
            est. Maecenas a ex suscipit, luctus risus at, fringilla risus..{' '}
          </p>
        </div>
        <div className='galeriePhotos'>
          <div className='photo'>
            <img src={chat} alt='animal' />
          </div>
          <div className='photo'>
            <img src={chat} alt='animal' />
          </div>
          <div className='photo'>
            <img src={chat} alt='animal' />
          </div>
          <div className='photo'>
            <img src={chat} alt='animal' />
          </div>
          <div className='photo'>
            <img src={chat} alt='animal' />
          </div>
          <div className='photo'>
            <img src={chat} alt='animal' />
          </div>
        </div>
      </div>
      {/* </div>
      )} */}
    </div>
  );
};

export default FicheDetail;
