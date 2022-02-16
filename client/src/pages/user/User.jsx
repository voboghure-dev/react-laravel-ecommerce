import './user.scss';
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Alert,
  IconButton,
  Collapse,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function User() {
  const initialFieldValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    status: '',
  };
  const [values, setValues] = useState(initialFieldValues);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name } = e.target;
    const value = e.target.checked ? 'active' : 'inactive';
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const result = await fetch('http://127.0.0.1:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(values),
    });

    result.status == 200
      ? setMessage('New user created.')
      : setError('Having issues with user create.');

    // setValues(initialFieldValues);
  };

  return (
    <div className='user'>
      {error && (
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label='close'
                color='inherit'
                size='small'
                onClick={() => {
                  setOpen(false);
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
      {message && (
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label='close'
                color='inherit'
                size='small'
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize='inherit' />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {message}
          </Alert>
        </Collapse>
      )}
      <Typography variant='h6' gutterBottom>
        Create New User
      </Typography>

      <div className='userEntry'>
        <form autoComplete='off' className='userEntryForm'>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id='fullName'
                name='fullName'
                label='Full Name'
                fullWidth
                autoComplete='off'
                variant='standard'
                value={values.fullName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id='email'
                name='email'
                label='Email address'
                fullWidth
                autoComplete='off'
                variant='standard'
                value={values.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id='password'
                name='password'
                label='Password'
                type='password'
                fullWidth
                autoComplete='off'
                variant='standard'
                value={values.password}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id='confirmPassword'
                name='confirmPassword'
                label='Confirm Password'
                type='password'
                fullWidth
                autoComplete='off'
                variant='standard'
                value={values.confirmPassword}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    color='secondary'
                    name='status'
                    value={values.status}
                    onChange={handleCheckboxChange}
                  />
                }
                label='Active'
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' onClick={handleFormSubmit}>
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}
