<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img src="../../../public/assets/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">Moklet Kantin</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="../../../public/assets//img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview menu-open">
          <router-link to="/" class="nav-link">
                <a  class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
            </a>
          </router-link>
          </li>
     <li class="nav-item has-treeview menu-open">
          <router-link to="/DataKantin" class="nav-link">
                <a  class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Data Kantin
              </p>
            </a>
          </router-link>
          </li>
     <li class="nav-item has-treeview menu-open">
          <router-link to="/DataMakanan" class="nav-link">
                <a  class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>
                Data Makanan
              </p>
            </a>
          </router-link>
          </li>
     <li class="nav-item has-treeview menu-open">
          <router-link to="/Pembelian" class="nav-link">
                <a  class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Pembelian
              </p>
            </a>
          </router-link>
          </li>
          
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
    export default {
    name: 'sidebar'
}
</script>