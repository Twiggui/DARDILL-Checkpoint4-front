import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import { useToasts } from 'react-toast-notifications';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import { useHistory } from 'react-router-dom';
import addCatLogo from '../../images/addCat.png';
import './AddAnnonce.scss';

import API from '../../services/API';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #f68585 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: '40px',
    padding: '0 30px',
    margin: '5px 0px',
    marginTop: '20px',
  },

  paper: {
    marginTop: '30px',
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddAnnonce() {
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [birthday, setBirthday] = useState('');
  const [color, setColor] = useState('');
  const [race, setRace] = useState('');
  const [vaccine, setVaccine] = useState('');
  const [tatoo, setTatoo] = useState('');
  const [health1, setHealth1] = useState('');
  const [health2, setHealth2] = useState('');
  const [temper1, setTemper1] = useState('');
  const [temper2, setTemper2] = useState('');
  const [temper3, setTemper3] = useState('');
  const [temper4, setTemper4] = useState('');

  //   const history = useHistory();
  const classes = useStyles();

  const { addToast } = useToasts();

  const schema = Joi.object({
    name: Joi.string().max(50).required(),
    sex: Joi.string().max(50).required(),
    birthday: Joi.date().required(),
    color: Joi.string().max(50).required(),
    race: Joi.string().max(50).required(),
    vaccine: Joi.string().max(50).required(),
    tatoo: Joi.string().max(50).required(),
    health1: Joi.string().max(50).allow('').optional(),
    health2: Joi.string().max(50).allow('').optional(),
    temper1: Joi.string().max(50).allow('').optional(),
    temper2: Joi.string().max(50).allow('').optional(),
    temper3: Joi.string().max(50).allow('').optional(),
    temper4: Joi.string().max(50).allow('').optional(),
  });

  const { errors, register, handleSubmit } = useForm({
    resolver: joiResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = (animalDatas) => {
    console.log(animalDatas);
    API.post('/animals/addAnimal', animalDatas)
      .then(() => {
        addToast(`${name} a bien été ajouté !`, {
          appearance: 'success',
          autoDismiss: true,
        });
        // handleRedirect();
      })
      .catch(() => console.log('error'));
  };
  //   const handleRedirect = () => {
  //     history.push('/signIn');
  //   };

  return (
    <div>
      <img alt='cat logo' src={addCatLogo} className='cat-logo' />

      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component='h1' variant='h5'>
            Ajouter une annonce d'adoption
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.form}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete='fname'
                  name='name'
                  variant='outlined'
                  required
                  fullWidth
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id="Nom de l'animal"
                  label="Nom de l'animal"
                  value={name}
                  inputRef={register}
                  error={!!errors.name}
                  helperText={errors.name && 'Un nom est obligatoire'}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  name='birthday'
                  variant='outlined'
                  id='Date de naissance'
                  label='Date de naissance'
                  type='date'
                  fullWidth
                  className='textField'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={birthday}
                  onChange={(e) => {
                    setBirthday(e.target.value);
                  }}
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <InputLabel htmlFor='select'>Sexe</InputLabel>
                <NativeSelect
                  name='sex'
                  id='Sexe'
                  onChange={(e) => {
                    setSex(e.target.value);
                  }}
                  value={sex}
                  inputRef={register}
                  required
                  error={!!errors.sex}
                >
                  <option value=''></option>
                  <option value='Femelle'>Femelle</option>
                  <option value='Mâle'>Mâle</option>
                </NativeSelect>
              </Grid>
              <Grid item xs={12} sm={4}>
                <InputLabel htmlFor='select'>Couleur</InputLabel>
                <NativeSelect
                  name='color'
                  id='Couleur'
                  onChange={(e) => {
                    setColor(e.target.value);
                  }}
                  value={color}
                  inputRef={register}
                  required
                  error={!!errors.color}
                >
                  <option value=''></option>
                  <option value='Noir'>Noir</option>
                  <option value='Blanc'>Blanc</option>
                  <option value='Noir et blanc'>Noir & blanc</option>
                  <option value='Roux'>Roux</option>
                  <option value='Ecaille'>Ecaille de tortue</option>
                  <option value='Tigré'>Tigré</option>
                  inputRef={register}
                </NativeSelect>
              </Grid>

              <Grid item xs={12} sm={4}>
                <InputLabel htmlFor='select'>Race</InputLabel>
                <NativeSelect
                  name='race'
                  id='Race'
                  onChange={(e) => {
                    setRace(e.target.value);
                  }}
                  value={race}
                  inputRef={register}
                  required
                  error={!!errors.race}
                >
                  <option value=''></option>
                  <option value='Europeen'>Européen</option>
                  <option value='Siamois'>Siamois</option>
                  inputRef={register}
                </NativeSelect>
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel htmlFor='select'>Vacciné</InputLabel>
                <NativeSelect
                  name='vaccine'
                  id='Vaccine'
                  onChange={(e) => {
                    setVaccine(e.target.value);
                  }}
                  value={vaccine}
                  inputRef={register}
                  required
                  error={!!errors.vaccine}
                >
                  <option value=''></option>
                  <option value='Oui'>Oui</option>
                  <option value='Non'>Non</option>
                  inputRef={register}
                </NativeSelect>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='tatoo'
                  label='Identification'
                  id='Identification'
                  inputRef={register}
                  value={tatoo}
                  error={!!errors.tatoo}
                  helperText={errors.tatoo && 'Obligatoire'}
                  onChange={(e) => {
                    setTatoo(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant='outlined'
                  fullWidth
                  name='health1'
                  label='Problème de santé 1 ? Ne pas remplir si RAS'
                  //   id='Problème de santé 1 ?'
                  inputRef={register}
                  value={health1}
                  onChange={(e) => {
                    setHealth1(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant='outlined'
                  fullWidth
                  name='health2'
                  label='Problème de santé 1 ? Ne pas remplir si RAS'
                  id='Problème de santé 2 ?'
                  inputRef={register}
                  value={health2}
                  onChange={(e) => {
                    setHealth2(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant='outlined'
                  fullWidth
                  name='temper1'
                  label='Trait de caractère 1'
                  id='Trait de caractère 1 ?'
                  inputRef={register}
                  value={temper1}
                  onChange={(e) => {
                    setTemper1(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant='outlined'
                  fullWidth
                  name='temper2'
                  label='Trait de caractère 2'
                  id='Trait de caractère 2 ?'
                  inputRef={register}
                  value={temper2}
                  onChange={(e) => {
                    setTemper2(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant='outlined'
                  fullWidth
                  name='temper3'
                  label='Trait de caractère 3'
                  id='Trait de caractère 3 ?'
                  inputRef={register}
                  value={temper3}
                  onChange={(e) => {
                    setTemper3(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant='outlined'
                  fullWidth
                  name='temper4'
                  label='Trait de caractère 4'
                  id='Trait de caractère 4 ?'
                  inputRef={register}
                  value={temper4}
                  onChange={(e) => {
                    setTemper4(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              heigth='400px'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.root}
            >
              Ajouter un animal
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
