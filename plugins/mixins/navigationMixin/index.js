import adminMixin from './admin.js'
import providerMixin from './provider.js'
export default {
  mixins: [adminMixin, providerMixin],
  computed: {
    items() {
      return this.adminItems
    },
    bottomItems() {
      return this.bottomAdminItems
    }
  }
}
