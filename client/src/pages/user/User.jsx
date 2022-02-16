import './user.scss';
import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';

export default function User() {
  return (
    <div className='user'>
      <Typography variant='h6' gutterBottom>
        Create New User
      </Typography>

      <div className='userEntryForm'>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='fullName'
              label='Full Name'
              fullWidth
              autoComplete='off'
              variant='standard'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='email'
              label='Email address'
              fullWidth
              autoComplete='off'
              variant='standard'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='password'
              label='Password'
              fullWidth
              autoComplete='off'
              variant='standard'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='confirmPassword'
              label='Confirm Password'
              fullWidth
              autoComplete='off'
              variant='standard'
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color='secondary' name='active' value='yes' />}
              label='Active'
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained'>Create</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
