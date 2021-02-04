import React, { useContext, useEffect, useState } from 'react';
import FicheAnnonce from './template/FicheAnnonce';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import { UserContext } from '../../context/UserContext';

import './Annonces.scss';
import API from '../../services/API';

const Annonces = () => {
  const { allAnimals, setAllAnimals } = useContext(UserContext);

  // const [allAnimals, setAllAnimals] = useState([]);
  const [filter, setFilter] = useState({
    sex: '',
    age: '',
    color: '',
    race: '',
    medical: '',
  });

  useEffect(() => {
    let url = '/animals';
    const filterArray = [];
    for (const key in filter) {
      if (filter[key] !== '') {
        filterArray.push(key);
      }
    }

    if (filterArray.length === 0) {
      API.get('/animals').then((res) => {
        setAllAnimals(res.data);
      });
    } else {
      url += '?';
    }

    if (filterArray.length !== 0) {
      url += `${filterArray[0]}=${filter[filterArray[0]]}`;
      for (let i = 1; i < filterArray.length; i += 1) {
        url += `&${filterArray[i]}=${filter[filterArray[i]]}`;
      }
    }

    API.get(url).then((res) => {
      setAllAnimals(res.data);
    });
  }, [filter]);

  const filterHandler = (e) => {
    if (e.target.id === 'Sexe') {
      setFilter({ ...filter, sex: e.target.value });
    } else if (e.target.id === 'Age') {
      setFilter({ ...filter, age: e.target.value });
    } else if (e.target.id === 'Color') {
      setFilter({ ...filter, color: e.target.value });
    } else if (e.target.id === 'Race') {
      setFilter({ ...filter, race: e.target.value });
    } else {
      setFilter({ ...filter, medical: e.target.value });
    }
  };

  return (
    <div className='annonces'>
      <div className='filtres'>
        <div className='filtreCategories'>
          <InputLabel htmlFor='select'>Sexe</InputLabel>
          <NativeSelect id='Sexe' onChange={filterHandler}>
            <option value=''></option>
            <option value='Femelle'>Femelle</option>
            <option value='Mâle'>Mâle</option>
          </NativeSelect>
        </div>
        <div className='filtreCategories'>
          <InputLabel htmlFor='select'>Age max</InputLabel>
          <NativeSelect id='Age' onChange={filterHandler}>
            <option value=''></option>
            <option value='1'>1 an</option>
            <option value='5'>5 ans</option>
            <option value='10'>plus de 5 ans</option>
          </NativeSelect>
        </div>
        <div className='filtreCategories'>
          <InputLabel htmlFor='select'>Couleur</InputLabel>
          <NativeSelect id='Color' onChange={filterHandler}>
            <option value=''></option>
            <option value='Noir'>Noir</option>
            <option value='Blanc'>Blanc</option>
            <option value='Noir et blanc'>Noir & blanc</option>
            <option value='Roux'>Roux</option>
            <option value='Ecaille'>Ecaille de tortue</option>
            <option value='Tigré'>Tigré</option>
          </NativeSelect>
        </div>
        <div className='filtreCategories'>
          <InputLabel htmlFor='select'>Race</InputLabel>
          <NativeSelect id='Race' onChange={filterHandler}>
            <option value=''></option>
            <option value='Europeen'>Européen</option>
            <option value='Siamois'>Siamois</option>
          </NativeSelect>
        </div>
        <div className='filtreCategories'>
          <InputLabel htmlFor='select'>Médical</InputLabel>
          <NativeSelect id='Medical' onChange={filterHandler}>
            <option value=''></option>
            <option value='Avec'>Avec pathologie</option>
            <option value='Sans'>Sans pathologie</option>
          </NativeSelect>
        </div>
      </div>
      <div className='annonces-list'>
        {allAnimals.map((animal) => (
          <div key={animal.nom} className='annonce'>
            <FicheAnnonce animal={animal} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Annonces;
