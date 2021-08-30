
const About = { template: '<div>About</div>' }
const MySkills = { template: '<div>MySkills</div>' }

const routes = [
  { path: '/about', component: About },
  { path: '/myskills', component: MySkills }
]

const router = new VueRouter({
  routes 
})

const menu = new Vue({
  router
}).$mount('#menu')

