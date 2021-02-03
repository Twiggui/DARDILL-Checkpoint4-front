import React from 'react';
import { useForm } from 'react-hook-form';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';

import API from '../../services/API';

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #f68585 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 50,
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

export default function SignUp() {
  const history = useHistory();
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const onSubmit = (data) => {
    API.post('/users/signUp', data)
      .then(() => handleRedirect())
      .catch(() => console.log('error'));
  };
  const handleRedirect = () => {
    history.push('/signIn');
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          S'enregistrer
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.form}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='firstname'
                variant='outlined'
                required
                fullWidth
                id='prénom'
                label='Prénom'
                autoFocus
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='nom'
                label='Nom'
                name='lastname'
                autoComplete='nom'
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='birthday'
                label='Date de naissance xx/xx/xxxx'
                name='birthday'
                autoComplete='birthday'
                inputRef={register({
                  required: true,
                  pattern: {
                    // eslint-disable-next-line no-useless-escape
                    value: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
                    message:
                      'Veuillez saisir un format de date valide JJ/MM/AAAA',
                  },
                })}
                error={!!errors.birthday}
                helperText={errors.birthday && errors.birthday.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='code'
                name='postal'
                variant='outlined'
                required
                fullWidth
                id='code'
                label='Code postal'
                inputRef={register({
                  required: true,
                  pattern: {
                    value: /^\d{2}[ ]?\d{3}$/,
                    message: 'Veuillez saisir un code postale valide',
                  },
                })}
                error={!!errors.code}
                helperText={errors.code && errors.code.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='ville'
                name='city'
                variant='outlined'
                required
                fullWidth
                id='ville'
                label='Ville'
                inputRef={register}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                inputRef={register({
                  required: true,
                  pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Veuillez saisir un email valide',
                  },
                })}
                error={!!errors.email}
                helperText={errors.email && errors.email.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password_confirmation'
                label='Confirmation password'
                type='password'
                id='password'
                autoComplete='current-password'
                inputRef={register}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.root}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='/login' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
