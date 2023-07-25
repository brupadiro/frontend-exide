export default {
  data() {
    return {
      adminItems: [{
          icon: 'apps',
          title: 'Testing',
          subItems: [{
            icon: 'apps',
            title: 'LOCATION',
            to: '/location'
          }, {
            icon: 'apps',
            title: 'ANALYSIS REQUEST',
            to: '/analysis'
          }, {
            icon: 'apps',
            title: 'DATA ANALYSIS',
          }, {
            icon: 'apps',
            title: 'INSTRUMENTS',
          }]
        },
        {
          icon: 'home',
          title: 'Normative',
          to: '/promotions',
          subItems: [{
            icon: 'apps',
            title: 'Manage',
            to: '/normative'
          }]
        },
        {
          icon: 'home',
          title: 'Security',
          subItems: [{
            icon: 'apps',
            title: 'Users',
            to: '/security/users'
          },{
            icon: 'apps',
            title: 'Rols',
            to: '/security/rols'
          }]
        },
      ],
      bottomAdminItems: [{
          icon: 'apps',
          title: 'Inicio',
          to: '/'
        },
        {
          icon: 'home',
          title: 'Promociones',
          to: '/promotions'
        },
        {
          icon: 'staff',
          title: 'Clientes',
          to: '/clients'
        },
      ],
    }
  }
}