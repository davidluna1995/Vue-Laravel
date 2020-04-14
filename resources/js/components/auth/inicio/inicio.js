
export default {

  data() {

    return {
     
    }
  },

  methods: {

    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },

    url(ruta) {
      this.$router.push({ path: ruta }).catch(error => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    },

  },

  mounted() {

  },

}