import './userList.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Delete, Edit } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Alert,
  Button,
  Checkbox,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function UserList() {
  // User list
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'full_name', headerName: 'Full Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'status', headerName: 'Status', width: 120 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={'/user/' + params.row.id}> */}
            <Edit
              className='userListEdit'
              onClick={() => handleDialogOpen(params.row.id)}
            />
            {/* </Link> */}
            <Delete
              className='userListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  useEffect(() => {
    async function fetchData() {
      const result = await fetch('http://127.0.0.1:8000/api/list');
      let data = await result.json();
      setData(data);
    }
    fetchData();
  }, []);

  // User delete
  const [alertOpen, setAlertOpen] = useState(true);
  const handleDelete = async (id) => {
    const result = await fetch('http://127.0.0.1:8000/api/delete/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

    result.status == 200
      ? setMessage('User deleted.')
      : setError('Unable to delete user.');

    setTimeout(() => {
      // is a fix for "Uncaught Error: No row with id #9 found"
      setData(data.filter((item) => item.id !== id));
    });
  };

  // User update
  const initialFieldValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    status: '',
  };
  const [values, setValues] = useState(initialFieldValues);
  const [dialogOpen, setDialogOpen] = useState(false);
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
    const result = await fetch('http://127.0.0.1:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(values),
    });

    result.status == 200
      ? setMessage('User updated.')
      : setError('Unable to update user.');
  };
  const handleDialogOpen = (id) => {
    // console.log(id);
    setDialogOpen(true);
  };
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div className='userList'>
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
      {message && (
        <Collapse in={alertOpen}>
          <Alert
            severity='success'
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
            {message}
          </Alert>
        </Collapse>
      )}
      <Typography variant='h6' gutterBottom>
        User List
      </Typography>

      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
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
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleDialogClose}>
            Cancel
          </Button>
          <Button variant='contained' onClick={handleFormSubmit}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
