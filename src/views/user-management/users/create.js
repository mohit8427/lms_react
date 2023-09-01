import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

// project imports
import MainCard from 'ui-component/cards/MainCard';

const roles = [
  {
    value: 'admin',
    label: 'Admin'
  },
  {
    value: 'mentor',
    label: 'Mentor'
  },
  {
    value: 'student',
    label: 'Student'
  },
  {
    value: 'affiliate',
    label: 'Affiliate'
  }
];

const CreateUser = () => {
  const [selectedRole, setSelectedRole] = React.useState('');
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const [selectedGender, setSelectedGender] = React.useState('');
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <MainCard title="Create User">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' }
        }}
        noValidate
        autoComplete="off"
      >
        {/* Basic Information */}
        <h4>Basic Information</h4>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField required id="firstName" label="First Name" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField id="lastName" label="Last Name" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required type="email" id="email" label="Email" />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '30px!important'
            }}
          >
            <FormControlLabel control={<Checkbox defaultChecked />} label="Is Active ?" />
          </Grid>
        </Grid>

        <br />

        {/* Role & Permission */}
        <h4>Role & Permission</h4>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField required id="username" label="Username" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField required id="password" type="password" label="Password" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField required type="confirmPassword" id="confirmPassword" label="Confirm Password" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField id="selectRole" select value={selectedRole} onChange={handleRoleChange} label="Role">
              {roles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '30px!important'
            }}
          >
            <FormControlLabel control={<Checkbox defaultChecked />} label="Allow Login" />
          </Grid>
        </Grid>

        <br />

        {/* More Information */}
        <h4>More Information</h4>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField required id="mobileNumber" label="Mobile Number" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField required id="alternateNumber" label="Alternate Number" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField id="selectGender" select value={selectedGender} onChange={handleGenderChange} label="Gender">
              <MenuItem key="male" value="male">
                Male
              </MenuItem>
              <MenuItem key="female" value="female">
                Female
              </MenuItem>
              <MenuItem key="others" value="others">
                Others
              </MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Box>
    </MainCard>
  );
};

export default CreateUser;
