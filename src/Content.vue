<template>
  <div id="app">
    <header-nav></header-nav>
    <main class="content">
      <router-view
        transition="fade"
        transition-mode="out-in"
        keep-alive
        >
      </router-view>
    </main>
    <footer class="copyright">
      Copyrights &copy; 2017.
    </footer>
  </div>
</template>

<script>
  import HeaderNav from 'components/common/HeaderNav.vue'
  export default {
    components:{
      HeaderNav
    }
  }
</script>
