export default {
  data() {
    return {
      adminItems: [{
        icon: 'mdi-chart-bar',
        title: 'ANALYSIS',
          subItems: [{
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
            type:'link',
            to: '/Instruments/Index'

          }]
        },
        {
          icon: 'mdi-cog',
          title: 'NORMATIVE',
          to: '/promotions',
          subItems: [{
            icon: 'apps',
            title: 'Manage',
            to: '/normative'
          }]
        },
        {
          icon: 'mdi-lock',
          title: 'Security',
          subItems: [{
            icon: 'apps',
            title: 'USER',
            to: '/User/Index',
            type:'link'
          },{
            icon: 'apps',
            title: 'ROLES',
            to: '/Rol/Index',
            type:'link'
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