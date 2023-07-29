<template>
  <!-- Sidebar -->
  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
    :class="{ toggled: sidebarToggled }"
  >
    <!-- Sidebar - Brand -->
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="#"
    >
      <div class="sidebar-brand-icon mt-2">
        <img src="/images/KabupatenSukoharjo.png" alt="logo" width="50" />
      </div>
      <div class="sidebar-brand-text mx-3">Pengajuan <sup>Surat</sup></div>
    </a>

    <!-- Heading -->
    <div class="sidebar-heading mt-5">Menu</div>
    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <router-link class="nav-link" to="/admin-dashboard">
        <i class="bi bi-speedometer2"></i>
        <span>Dashboard</span>
      </router-link>
    </li>

    <!-- Nav Item - Barang -->
    <li class="nav-item">
      <router-link class="nav-link" to="/admin-surat">
        <i class="bi bi-journal-text"></i>
        <span>Surat</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">Others</div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapsePages"
        aria-expanded="true"
        aria-controls="collapsePages"
      >
        <i class="fas fa-fw fa-folder"></i>
        <span>Users</span>
      </a>
      <div
        id="collapsePages"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <h6 class="collapse-header">Management Users</h6>
          <router-link class="collapse-item" to="admin-list-user">
            Data User
          </router-link>
          <a class="collapse-item custom-disabled" href="#">Action</a>
        </div>
      </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />
  </ul>
  <!-- End of Sidebar -->
</template>
<script>
import { EventBus } from "../event-bus";
export default {
  data() {
    return {
      sidebarToggled: false,
    };
  },
  methods: {},
  created() {
    EventBus.$on('toggle-sidebar', () => {
      this.sidebarToggled = !this.sidebarToggled;
    });
  },
};
</script>

<style scoped>
.custom-disabled {
  /* Ganti properti CSS sesuai kebutuhan untuk menggantikan class 'disable' */
  pointer-events: none; /* contoh menggantikan 'disable' */
  cursor: not-allowed; /* contoh menggantikan 'disable' */
}
</style>