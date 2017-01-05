import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import Content from './Content'
import {markdown} from './filters/index'

Vue.use(Router)
Vue.filter('markdown', markdown);

const router = new Router()
routes(router)
router.start(Content, 'conte')




