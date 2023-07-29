<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark navbarCustom fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="/images/logo/logo.png" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="navbarClass" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" :class="{ 'activeLink': activeLink == '/'}">
            <a class="nav-link" href="#/" @click="activeLink = '/'">Home</a>
          </li>
          <li class="nav-item" :class="{ 'activeLink': activeLink == 'service' }">
            <a class="nav-link" href="#service" @click="activeLink = 'service'">Our Service</a>
          </li>
          <li class="nav-item" :class="{ 'activeLink': activeLink == 'portfolio' }">
            <a class="nav-link" href="#portfolio" @click="activeLink = 'portfolio'">Our Portfolio</a>
          </li>
          <!-- <li class="nav-item" :class="{ 'activeLink': activeLink == 'quality' }">
            <a class="nav-link" href="#quality" @click="activeLink = 'quality'">Core Feature</a>
          </li> -->
          <li class="nav-item" :class="{ 'activeLink': activeLink == 'testimoni' }">
            <a class="nav-link" href="#testimoni" @click="activeLink = 'testimoni'">Testimoni</a>
          </li>
          <li class="nav-item" :class="{ 'activeLink': activeLink == 'clients' }">
            <a class="nav-link" href="#clients" @click="activeLink = 'clients'">Clients</a>
          </li>
          <li class="nav-item" :class="{ 'activeLink': activeLink == 'tech' }">
            <a class="nav-link" href="#tech" @click="activeLink = 'tech'">Technologies</a>
          </li>
          <li class="nav-item" :class="{ 'activeLink': activeLink == 'blog' }">
            <a class="nav-link" href="/blog" @click="activeLink = 'blog'">Blog</a>
          </li>
          <li class="nav-item">
            <a href="https://bit.ly/lumiraCS">
              <button type="button" class="btn btn-warning buttonCustom">Create Project</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeLink: null,
      isNavbarOpen: false
    };
  },
  computed: {
    navbarClass() {
      return {
        'collapse': !this.isNavbarOpen,
        'navbar-collapse': true
      };
    }
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    }
  }
};
</script>

<style scoped>
.nav-link{
  padding-right: 1rem !important;
}
.navbarCustom {
  background: linear-gradient(296.53deg, #1a52a9 -32.62%, #2b77eb 84.15%);
}

.buttonCustom {
  width: 193px;
  margin-left: 20px;
  border-radius: 20px;
}

.activeLink > .nav-link {
  font-weight: bold;
  color: white !important;
  border-bottom: 2px solid white;
}
</style>
