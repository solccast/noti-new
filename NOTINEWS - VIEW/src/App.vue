<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';

</script>

<template>
  <div class="container" style="background-color: bisque;">
    <div class="row">
      <div class="col-12">
        <Header />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <Navbar />
      </div>
    </div>
    <div class="row">
      <div class="col-2">
        <Sidebar />
      </div>
      <div class="col-10">
        <HelloWorld msg="Hello Vue 3 + Vite" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <Footer />
      </div>
    </div>  
  </div>
  
</template>

<style scoped>

</style>
