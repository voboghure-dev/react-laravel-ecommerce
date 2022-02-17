import './userList.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Delete, Edit } from '@mui/icons-material';
import { useEffect, useState } from 'react';
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
  const [rows, setRows] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const [userId, setUserId] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [alertOpen, setAlertOpen] = useState(true);

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
            <Edit
              className='userListEdit'
              onClick={() => handleDialogOpen(params.row.id)}
            />
            <Delete
              className='userListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  // User list load
  useEffect(() => {
    async function fetchData() {
      const result = await fetch('http://127.0.0.1:8000/api/user/list');
      let data = await result.json();
      setRows(data);
      console.log(dialogOpen);
    }
    fetchData();
  }, [dialogOpen]);

  // User delete
  const handleDelete = async (id) => {
    const result = await fetch('http://127.0.0.1:8000/api/user/delete/' + id, {
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
      setRows(rows.filter((item) => item.id !== id));
    });
  };

  // User update
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let data = {userId, fullName, email, password, status};
    const result = await fetch('http://127.0.0.1:8000/api/user/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },

      body: JSON.stringify(data),
    });

    result.status == 200
      ? setMessage('User updated.')
      : setError('Unable to update user.');

    setDialogOpen(false);
  };

  const handleDialogOpen = (id) => {
    async function fetchData() {
      const result = await fetch('http://127.0.0.1:8000/api/user/' + id);
      let data = await result.json();
      setFullName(data.user.full_name);
      setEmail(data.user.email);
      setStatus(data.user.status == 'active' ? true : false);
    }
    fetchData();
    setDialogOpen(true);
    setUserId(id);
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
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
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
                  variant='standard'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id='email'
                  name='email'
                  label='Email address'
                  fullWidth
                  variant='standard'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  variant='standard'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  variant='standard'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color='secondary'
                      name='status'
                      checked={status}
                      value={status}
                      onChange={(e) =>
                        setStatus(e.target.checked ? true : false)
                      }
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
