<template>
  <div>
    <v-navigation-drawer :value="!mobileMenu" color="primary" app class="navigation-drawer">
      <template v-slot:prepend>
        <div class="d-flex justify-center">
          <v-avatar size="150">
              <v-img src="/logo-chico.png" contain></v-img>
            </v-avatar>

        </div>
        <v-divider></v-divider>
      </template>
      <v-list dense>
        <template v-for="(item, i) in items">
          <v-list-group v-if="item.subItems" :key="i"  :value="i==0"  no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-btn text color="primary" block height="50" class="btn-navigation"
                  active-class="btn-navigation-active secondary primary black--text font-weight-bold">
                  <v-icon>ion-md-arrow-dropdown</v-icon>
                  <span class="black--text">{{item.title}}</span>
                </v-btn>
              </v-list-item-content>
            </template>
            <template v-for="(subItem,si) in item.subItems">
              <v-list-item class="pl-6 primary lighten-1 subitem-tab" link :to="subItem.to"  :key="'s'+si">
              <v-list-item-content>
                <v-btn small text color="white" block height="30" class="btn-navigation py-6"
                  active-class="black--text" :to="subItem.to" exact>
                  <span class="black--text py-3">{{subItem.title}}</span>
                </v-btn>
              </v-list-item-content>
            </v-list-item>
            <v-divider :key="'d'+si"></v-divider>
            </template>
          </v-list-group>
          <v-list-item :key="i+'n'" v-else>
            <v-list-item-content>
              <v-btn text color="white" block height="50" class="btn-navigation font-weight-bold"
                active-class="btn-navigation-active secondary  black--text" :to="item.to">
                <img :src="`/icons/${item.icon}.png`" width="30px">
                <span>{{item.title}}</span>
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <template v-slot:append>
        <v-divider></v-divider>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-btn text color="white" block height="50" class="btn-navigation"
                active-class="btn-navigation-active secondary  black--text" @click="logout()">
                <img :src="`/icons/logout.png`" width="30px">
                <span>Salir</span>
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
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
                  active-class="btn-navigation-active secondary  black--text" :to="subItem.to" exact>
                  <span>{{subItem.title}}</span>
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-bottom-sheet>
        <template v-else>
          <v-btn :key="i+'n'" color="primary" icon :to="item.to">
            <img :src="`/icons/${item.icon}.png`" width="30px">
          </v-btn>
        </template>
      </template>
    </v-bottom-navigation>

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
  .navigation-drawer {
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
  }

  .btn-navigation {
    border: 1px solid #ffffffd9;
    border-radius: 15px !important;
    padding: 0 !important;

    .v-btn__content {
      width: 100%;
      justify-content: start;
      height: 100%;
      align-items: center;
      margin-left: 40px;
    }

    span {
      text-transform: capitalize;
      font-weight: 500;
      margin-left: 10px;
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

</style>
