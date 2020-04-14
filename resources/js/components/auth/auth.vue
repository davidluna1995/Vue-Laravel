<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Neo-Work</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="url('index')"><i class="fas fa-home"></i> Panel de Control</b-nav-item>
          <b-nav-item @click="url('')"><i class="fas fa-indent"></i> Modulo 1</b-nav-item>
          <b-nav-item-dropdown text="Modulo 2">
            <b-dropdown-item @click="url('')"><i class="fas fa-edit"></i> sub Modulo 1</b-dropdown-item>
            <b-dropdown-item @click="url('')"><i class="fas fa-plus"></i> sub Modulo 2</b-dropdown-item>
          </b-nav-item-dropdown>
          
          <b-nav-item-dropdown text="Modulo 3">
            <b-dropdown-item @click="url('')"><i class="fas fa-search-dollar"></i> sub Modulo 1</b-dropdown-item>
            <b-dropdown-item @click="url('')"><i class="fas fa-paste"></i> sub Modulo 2</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item @click="url('')"><i class="fas fa-cart-plus"></i> Modulo 4</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>{{usuario.name}}</em>
            </template>
            <b-dropdown-item @click="url('perfil')"><i class="fas fa-user"></i> Perfil</b-dropdown-item>
            <b-dropdown-item @click="url('configuraciones')"><i class="fas fa-cog"></i> Configuracion</b-dropdown-item>
            <b-dropdown-item @click="logout()"><i class="fas fa-sign-in-alt"></i> Cerrar Sesion</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <transition name>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario:this.$auth.user(),
    };
  },

  methods: {
    url(ruta) {
      this.$router.push({ path: ruta }).catch(error => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    },

    logout: function() {
      this.$auth.logout({
        makeRequest: true,
        redirect: "/"
      });
    }
  }
};
</script>
