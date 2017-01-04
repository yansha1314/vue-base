/**
 * Created by chuck7 on 16/8/22.
 */
import List from 'components/list.vue'
export default (router)=>{
  router.map({
    '/posts':{
      component: List
    },
    '/tags':{
      component: function (resolve) {
        require(['components/Tag.vue'], resolve)
      },
    },
    '/me':{
      component: function (resolve) {
        require(['components/Me.vue'], resolve)
      },
    },
  })
  router.redirect({
    '*': '/posts'
  })
}
