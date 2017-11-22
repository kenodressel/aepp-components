# aeternity aepp components
aeternity aepp components aims to provide aepp developers with reusable Vue components. All elements are from our [styleguide](https://github.com/aeternity/aepp-prototypes). You need some kind of build process (webpack, browserify, ...) there is no bundled js file yet.

## Documentation

The docs can be found on [http://components.aepps.com](http://components.aepps.com)

## installation and usage
Install aeternity aepp components via npm
```
npm install @aeternity/aepp-components
```

Import Vue and aeternity aepp components:
``` javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
import AeppComponents, { AeButton } from '@aeternity/aepp-components'

Vue.use(VueRouter)
Vue.use(AeppComponents)

// OR single components

Vue.use(AeppComponents.AeButton)

// OR

new Vue({
  components: {
    AeButton
  }
});
```
```
<template>
  <div id="app">
    <ae-button @click="buttonPress()">My Button</ae-button>
  </div>
</template>
```
use the helperMixin
```javascript
import { aeHelperMixin } from '@aeternity/aepp-components'

{
  ...
  mixins: [aeHelperMixin],
}
```

## contributing
If you wrote a neat looking, reusable component matching our styleguide please fork this project and send us a merge request. Thanks!

### What is a good component
* ideally comes from our styleguide
* Is separated from the rest of your application code, all states are handled via props, logic is kept to a minimum, communicates via events
* Has a descriptive name
* Does more than one thing
  * good: e.g. An Icon-Button with different icons and backgrounds styled via props
  * bad: one grey close button component with an X-Symbol and one magenta add Button with a + Symbol

### How should the component be structured
* has a camelcased folder in /src/components like `aeComponentName`
* folder contains a `aeComponentName.vue` with template, script and style. Script and style may be separate files like `aeComponentName.js` and `aeComponentName.(s)css`
* component must have the name property set
* in the main folder should be an index.js which exports an install function
* component should be registered in the `src/index.js` for easy usage with `Vue.use()`
* component must be documented by jsdoc comments and a `aeComponentName.md`, readable by [vue-styleguidist](https://github.com/vue-styleguidist/vue-styleguidist/blob/master/docs/Documenting.md). [Markdown](https://github.com/vue-styleguidist/vue-styleguidist/blob/master/docs/Documenting.md#usage-examples-and-readme-files) should include a usage example. You can test the documentation by running `npm run styleguide`
* all props should be described as thoroughly as possible, define the type and provide useful default values

## example

![example](https://i.imgur.com/VNAKrqX.png "Example")


main.js
```javascript
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AeppComponents from '@aeternity/aepp-components'

Vue.use(VueRouter)
Vue.use(AeppComponents)

const routes = [
  // { path: '/foo', component: Foo },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
```

app.vue
```javascript
<template>
  <div id="app">
    <ae-main>
      <div class="example">
        <ae-amount :value="1.337" :isFullWidth="true"></ae-amount>
      </div>

      <div class="example">
        <ae-balance :value="1.337" :size="'large'" :color="'dark'"></ae-balance>
      </div>

      <div class="example">
        <ae-button :label="'button'" :size="'large'" :color="'pink'">Button</ae-button>
      </div>

      <div class="example">
        <ae-button2 @click="buttonPress('button2')" :secondary="false">Button2</ae-button2>
      </div>

      <div class="example">
        <ae-category>Category</ae-category>
      </div>

      <div class="example">
        <ae-close-button @click="buttonPress('closeButton')"></ae-close-button>
      </div>

      <div class="example">
        <ae-filter-list :active="false">
          <ae-filter-item :active="false" :to="'/'">Filter Item in List</ae-filter-item>
          <ae-filter-separator></ae-filter-separator>
          <ae-filter-item :active="true" :to="'/'">Filter Item  in List</ae-filter-item>
        </ae-filter-list>
      </div>

      <div class="example">
        <ae-header :name="'Header'">
          <ae-header-button @click="buttonPress('header button')" :icon="false" :secondary="false">Header Button</ae-header-button>
          <ae-header-button @click="buttonPress('header button')" :icon="true" :secondary="true">Æ</ae-header-button>
        </ae-header>
      </div>

      <div class="example">
        <ae-header-alert @close="buttonPress('alert close')">Alert</ae-header-alert>
      </div>

      <div class="example" v-if="showModal">
        <ae-modal @close="showModal = false">Modal</ae-modal>
      </div>

      <div class="example">
        <ae-button2 @click="showModal = true" :secondary="false">
          Modal
        </ae-button2>
      </div>

      <div class="example">
        <ae-identity :active="true" :address="identity.address" :balance="identity.balance" :collapsed="false"></ae-identity>
      </div>

      <div class="example">
        <ae-identity :active="false" :address="identity.address" :balance="identity.balance" :collapsed="true"></ae-identity>
      </div>

      <div class="example">
        <ae-identity :active="true" :address="identity.address" :balance="identity.balance" :collapsed="false">
          <ae-button2 @click="buttonPress('button2')" :secondary="false">Button2</ae-button2>
          <ae-button2 @click="buttonPress('button2')" :secondary="false">Button2</ae-button2>
        </ae-identity>
      </div>

      <div class="example">
        Mixin Function readableEther: {{readableEther(identity.balance)}}
      </div>
    </ae-main>
  </div>
</template>

<script>
import { aeHelperMixin } from '@aeternity/aepp-components'

export default {
  name: 'app',
  data () {
    return {
      showModal: false,
      identity: {
        balance: '1337210000000000000', // wei as string, int or BN
        address: '0x1234567890987654321'
      }
    }
  },
  mixins: [
    aeHelperMixin
  ],
  methods: {
    buttonPress: function(what) {
      console.log("button pressed", what);
    }
  }
}
</script>

<style>
  div.example {
    margin-bottom: 40px;
  }
</style>
```
