import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import Content from './Content'
import './stylus/index.styl'

Vue.use(Router)

const router = new Router()
routes(router)
router.start(content, 'content')




