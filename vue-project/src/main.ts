import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodWithProps from './components/FoodWithProps.vue'
import FoodArray from './components/FoodArray.vue'
import CompOne from './components/CompOne.vue'
import CompTwo from './components/CompTwo.vue'
import { createRouter, createWebHistory } from 'vue-router'
import NavOne from './components/NavOne.vue'
import NavTwo from './components/NavTwo.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/one', component: NavOne },
        { path: '/two', component: NavTwo },
    ]
});
const app = createApp(App)
app.component('foods', FoodItem)/*here first one is the tag name present in 
App.vue, next is the file name. for such a thing, first create the component file. add scripts there.
include the tag.and write this line.*/
app.component('foodprops', FoodWithProps)
app.component('foodarray', FoodArray)
app.component('comp-one', CompOne)
app.component('comp-two', CompTwo)
app.use(router);
app.mount('#app')
