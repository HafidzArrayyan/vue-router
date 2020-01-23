import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Navbar from '../views/layout/Navbar.vue'
import Sidebar from '../views/layout/Sidebar.vue'
import Footer from '../views/layout/Footer.vue'
import DataKantin from '../views/DataKantin.vue'
import DataMakanan from '../views/DataMakanan.vue'
import Pembelian from '../views/Pembelian.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {default: Home, header: Navbar, sidebar: Sidebar, footer: Footer}
  },
  {
    path: '/DataKantin',
    name: 'DataKantin',
    components: {default: DataKantin, header: Navbar, sidebar: Sidebar, footer: Footer}
  },
  {
    path: '/DataMakanan',
    name: 'DataMakanan',
    components: {default: DataMakanan, header: Navbar, sidebar: Sidebar, footer: Footer}
  },
  {
    path: '/Pembelian',
    name: 'Pembelian',
    components: {default: Pembelian, header: Navbar, sidebar: Sidebar, footer: Footer}
  }
]


const router = new VueRouter({
  routes
})

export default router
