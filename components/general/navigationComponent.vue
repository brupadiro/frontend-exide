<template>
  <div>
    <v-navigation-drawer :value="true" color="primary" app class="navigation-drawer">
      <template v-slot:prepend>
        <div class="d-flex justify-center my-12">
          <v-img src="/logo.png" width="100%" contain></v-img>

        </div>
        <v-divider></v-divider>
      </template>
      <v-list dense>
        <template v-for="(item, i) in items">
          <v-list-group v-if="item.subItems" :key="i"  :value="i==0"  no-action>
            <template v-slot:activator>
              <v-list-item-icon>
                <v-icon color="black">{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content >
                  <span class="black--text">{{item.title}}</span>
              </v-list-item-content>
            </template>
            <template v-for="(subItem,si) in item.subItems">
              <v-list-item class="pl-6 primary lighten-1 subitem-tab item" link  @click="redirectTo(subItem.type,subItem.to)"  :key="'s'+si">
              <v-list-item-content>
                    <span class="black--text py-3">{{subItem.title}}</span>
  
              </v-list-item-content>
            </v-list-item>
            <v-divider :key="'d'+si"></v-divider>
            </template>
          </v-list-group>
          <v-list-item :key="i+'n'" v-else>
            <v-list-item-content>
              <v-btn text color="white" block height="50" class="btn-navigation font-weight-bold"
                active-class="btn-navigation-active secondary  black--text" @click="redirectTo(item.type,item.to)">
                <img :src="`/icons/${item.icon}.png`" width="30px">
                <span>{{item.title}}</span>
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <!--
    <v-bottom-navigation app v-show="mobileMenu" background-color="primary" class="rounded-t-xl">
      <template v-for="(item, i) in adminItems">

        <v-bottom-sheet v-if="item.subItems" :key="i" class="rounded-t-xl">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs"  class="black--text font-weight-bold" v-on="on">
              <span class="black--text">{{ item.title }}</span>
            </v-btn>
          </template>
          <v-list color="primary">
            <v-list-item v-for="(subItem,i) in item.subItems" :key="i">
              <v-list-item-content>
                <v-btn color="white" outlined block height="50" class="btn-navigation"
                  active-class="btn-navigation-active secondary  black--text" @click="redirectTo(subItem.type,subItem.to)" exact>
                  <span>{{subItem.title}}</span>
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-bottom-sheet>
        <template v-else>
          <v-btn :key="i+'n'" color="primary" icon @click="redirectTo(item.type,item.to)">
            <img :src="`/icons/${item.icon}.png`" width="30px">
          </v-btn>
        </template>
      </template>
    </v-bottom-navigation>

    -->

  </div>
</template>

<script>
  import navigationMixin from '~/plugins/mixins/navigationMixin'
  export default {
    mixins: [navigationMixin],
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    },
    methods: {
      redirectTo(type, route) {
        if(!route) return
        if (type === 'link') {
          window.location.href = 'https://exide.gear.host'+route;
        } else {
          this.$router.push(route);
        }
      },
      checkTabType(item) {
        if (item.subItems) {
          return 'v-list-group'
        } else {
          return 'v-list-item'
        }
      },
      logout() {
        this.$auth.logout()
          .then(()=>{
            this.$router.push('/accounts/login')
          })
      }

    },
    computed: {
      mobileMenu() {
        return this.$vuetify.breakpoint.mdAndDown
      }
    }
  }

</script>

<style lang="scss">
  .btn-navigation {
    border: 1px solid #ffffffd9;
    border-radius: 15px !important;
    padding: 0 !important;

    .v-btn__content {
      justify-content: start;
      height: 100%;
      align-items: center;
    }

    span {
      text-transform: capitalize;
      font-weight: 500;
    }
  }
  .btn-navigation-active secondary {
    span {
      color: black;
    }
  }
  .subitem-tab{
    border-bottom:1px solid white;
  }
  .v-list-group__header {
    border: 1px solid #00000078;
    margin: 5px;
    border-radius: 15px;
    padding: 5px;
  }

</style>
