// assets
import { IconUsers } from '@tabler/icons';

// constant
const icons = {
  IconUsers
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const userManagement = {
  id: 'userManagement',
  title: 'User Management',
  type: 'group',
  children: [
    {
      id: 'userManagement',
      title: 'User Management',
      type: 'collapse',
      icon: icons.IconUsers,

      children: [
        {
          id: 'users',
          title: 'Users',
          type: 'item',
          url: '/user-management/users',
          target: false,
          children: [
            {
              id: 'createUser',
              title: 'Create User',
              type: 'item',
              url: '/user-management/users/create',
              target: false,
              breadcrumbs: false
            }
          ]
        },
        {
          id: 'roles',
          title: 'Roles',
          type: 'item',
          url: '/user-management/roles',
          target: false
        }
      ]
    }
  ]
};

export default userManagement;
