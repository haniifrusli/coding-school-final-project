<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navbar/>
    <Banner/>
    <Product/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Product from '@/views/Product.vue'
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld,
    Product,
    Navbar,
    Banner
  }
}
</script>
