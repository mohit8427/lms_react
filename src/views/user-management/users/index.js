import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import CardFormAction from 'ui-component/cards/CardFormAction';

// Constants
const API_URL = 'https://cerebro.codspecial.com/api/users';

const columns = [
  { field: 'id', headerName: 'S. No', width: 90 },
  {
    field: 'profile',
    headerName: 'Profile',
    width: 100,
    renderCell: (params) => <Avatar alt={params.row.fullName || ''} src="/asstes/images/users/user-round.svg" />
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 200,
    renderCell: (params) => (
      <div>
        {params.row.fullName || ''}
        <br />
        <small>mohit@gmail.com</small>
      </div>
    )
  },
  {
    field: 'userName',
    headerName: 'Username',
    width: 150
  },
  {
    field: 'role',
    headerName: 'Role',
    width: 250
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    renderCell: (params) => <Chip label={params.row.status} color={params.row.status == 'Active' ? 'success' : 'warning'} />
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => (
      <div>
        <Stack direction="row">
          <IconButton aria-label="Edit">
            <EditIcon sx={{ color: 'primary.dark' }} style={{ fontSize: 18 }} />
          </IconButton>
          {params.row.status == 'Inactive' ? (
            <IconButton aria-label="Activate">
              <RocketLaunchIcon sx={{ color: 'success.dark' }} style={{ fontSize: 18 }} />
            </IconButton>
          ) : (
            <IconButton aria-label="Inactive">
              <BlockIcon sx={{ color: 'warning.dark' }} style={{ fontSize: 18 }} />
            </IconButton>
          )}
          <IconButton aria-label="Delete">
            <DeleteIcon sx={{ color: 'error.dark' }} style={{ fontSize: 18 }} />
          </IconButton>
        </Stack>
      </div>
    )
  }
];

const UserList = () => {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      const users = jsonData.users.map((user) => ({
        id: user.id,
        profile: 'Image',
        fullName: `${user.firstname} ${user.lastname}`,
        userName: user.username,
        role: 'Admin | Manager',
        status: 'Active',
        action: 'Edit'
      }));
      setRows(users);
      console.log(rows);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <MainCard
      title="User List"
      secondary={<CardFormAction icon={<PersonAddAltIcon fontSize="small" />} link="/user-management/users/create" title="Create User" />}
    >
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 }
            }
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection={false}
        />
      </div>
    </MainCard>
  );
};

export default UserList;
