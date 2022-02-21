import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Alert,
  Avatar,
  Button,
  CssBaseline,
  Collapse,
  TextField,
  FormControlLabel,
  Checkbox,
  Link as MUILink,
  Grid,
  Box,
  IconButton,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from '../../contexts/AuthContext';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <MUILink color='inherit' component={RouterLink} to='https://mui.com/'>
        Your Website
      </MUILink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [alertOpen, setAlertOpen] = useState(true);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let result = await login(email, password);
    if (result.status === 200) {
      setMessage('Login successfully.');
      navigate('/dashboard');
    } else {
      setError('Invalid user details.');
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        {error && (
          <Collapse in={alertOpen}>
            <Alert
              severity='error'
              action={
                <IconButton
                  aria-label='close'
                  color='inherit'
                  size='small'
                  onClick={() => {
                    setAlertOpen(false);
                  }}
                >
                  <CloseIcon fontSize='inherit' />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {error}
            </Alert>
          </Collapse>
        )}
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <form autoComplete='off' className='userLoginForm'>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              onClick={handleFormSubmit}
            >
              Sign In
            </Button>
          </form>
          <Grid container>
            <Grid item xs>
              <MUILink
                component={RouterLink}
                to='/forgot-password'
                variant='body2'
              >
                Forgot password?
              </MUILink>
            </Grid>
            <Grid item>
              <MUILink component={RouterLink} to='/register' variant='body2'>
                {"Don't have an account? Sign Up"}
              </MUILink>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
