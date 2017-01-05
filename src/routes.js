/**
 * Created by chuck7 on 16/8/22.
 */
import List from 'components/List.vue'
export default (router)=>{
  router.map({
    '/list':{
      component: List
    },
    '/me':{
      component: function (resolve) {
        require(['components/Me.vue'], resolve)
      },
    },
  })
  router.redirect({
    '*': '/list'
  })
}
