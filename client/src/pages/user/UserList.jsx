import './userList.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Delete, Edit } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const rows = [
  { id: 1, name: 'Snow', email: 'Jon', status: 'active' },
  { id: 2, name: 'Lannister', email: 'Cersei', status: 'active' },
  { id: 3, name: 'Lannister', email: 'Jaime', status: 'active' },
  { id: 4, name: 'Stark', email: 'Arya', status: 'active' },
  { id: 5, name: 'Targaryen', email: 'Daenerys', status: 'active' },
  { id: 6, name: 'Melisandre', email: null, status: 'active' },
  { id: 7, name: 'Clifford', email: 'Ferrara', status: 'active' },
  { id: 8, name: 'Frances', email: 'Rossini', status: 'active' },
  { id: 9, name: 'Roxie', email: 'Harvey', status: 'active' },
];

export default function UserList() {
  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Full Name', width: 200 },
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
      <div className='userTitle'>User List</div>
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
