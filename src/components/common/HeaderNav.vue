<template>
  <div>
    <header class="top-nav-container">
      <nav class="top-nav">
        <a v-link="{ path: '/list', activeClass: 'active' }" class="vertical-center nav-logo">
        test
        </a>
        <ul class="nav-link-container">
          <li class="nav-link-item"><a class="nav-link" v-link="{ path: '/list', activeClass: 'active' }" >文章</a></li>
          <li class="nav-link-item"><a class="nav-link" v-link="{ path: '/me', activeClass: 'active' }">关于我</a></li>
        </ul>
      </nav>
    </header>
    <div class="nav-mask" :class="[asideNavShow? 'open':'']" @click="asideNavShow = false">
      <aside class="nav-aside" >
        <ul class="nav-aside-list">
          <li ><a class="nav-link" v-link="{ path: '/list', activeClass: 'active' }" >文章</a></li>
          <li ><a class="nav-link" v-link="{ path: '/me', activeClass: 'active' }">关于我</a></li>
        </ul>
      </aside>
    </div>

  </div>

</template>
<script>
  export default{
    data () {
      return {
        asideNavShow: false
      }
    }
  }
</script>
