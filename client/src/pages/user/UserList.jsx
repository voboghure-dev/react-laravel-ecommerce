import './userList.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Delete, Edit } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Collapse, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function UserList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch('http://127.0.0.1:8000/api/list');
      let data = await result.json();
      setData(data);
    }
    fetchData();
  }, []);

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
            <Link to={'/user/' + params.row.id}>
              <Edit className='userListEdit' />
            </Link>
            <Delete
              className='userListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='userList'>
      {error && (
        <Collapse in={open}>
          <Alert
            severity='error'
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
            severity='success'
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
    </div>
  );
}
