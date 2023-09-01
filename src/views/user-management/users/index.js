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

const rows = [
  {
    id: 1,
    profile: 'Image',
    fullName: 'Jon Snow',
    userName: 'Jon',
    role: 'Admin | Manager',
    status: 'Active',
    action: 'Edit'
  },
  {
    id: 2,
    profile: 'Image',
    fullName: 'Jaime Lannister',
    userName: 'Jaime',
    role: 'Admin | Manager',
    status: 'Active',
    action: 'Edit'
  },
  {
    id: 3,
    profile: 'Image',
    fullName: 'Arya Stark',
    userName: 'Arya',
    role: 'Admin | Manager',
    status: 'Active',
    action: 'Edit'
  },
  {
    id: 4,
    profile: 'Image',
    fullName: 'Rossini Frances',
    userName: 'Rossini',
    role: 'Admin | Manager',
    status: 'Active',
    action: 'Edit'
  },
  {
    id: 5,
    profile: 'Image',
    fullName: 'Harvey Roxie',
    userName: 'Harvey',
    role: 'Admin | Manager',
    status: 'Active',
    action: 'Edit'
  },
  {
    id: 6,
    profile: 'Image',
    fullName: 'Cersei Lannister',
    userName: 'Cersei',
    role: 'Admin | Manager',
    status: 'Inactive',
    action: 'Edit'
  },
  {
    id: 7,
    profile: 'Image',
    fullName: 'Daenerys Targaryen',
    userName: 'Daenerys',
    role: 'Admin | Manager',
    status: 'Active',
    action: 'Edit'
  },
  {
    id: 8,
    profile: 'Image',
    fullName: 'Melisandre Stark',
    userName: 'Melisandre',
    role: 'Admin | Manager',
    status: 'Active',
    action: 'Edit'
  },
  {
    id: 9,
    profile: 'Image',
    fullName: 'Ferrara Clifford',
    userName: 'Ferrara',
    role: 'Admin | Manager',
    status: 'Active',
    action: 'Edit'
  }
];

const UserList = () => {
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
