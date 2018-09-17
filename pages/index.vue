<template>
<div class="jumbotron">
  <headers></headers>

  <div>
    <button type='button' class='btn btn-primary' @click="onSwitch"
    v-if='!this.forswitch'>検索モード</button>
    <button type='button' class='btn btn-primary' @click="onSwitch"
    v-if='this.forswitch'>投稿モード</button>
  </div>

  <query v-if='this.forswitch'></query>
  <register v-if='!this.forswitch'></register>

  <div class="card-deck">
    <div v-for="post in this.posting" :key="post.key">
      <div class="card border-primary text-white bg-info mb-3" style="height:23rem; width: 18rem;">
        <img class="card-img-top" :src="post.pictures[0]" >
        <div class="card-body">
          <p class="card-title">{{post.date}}</p>
          <p class="card-title">{{post.intro}}</p>
          <p class="card-text">{{post.name}}</p>
        </div>
      </div>
    </div>
  </div>

  <footers></footers>
</div>
</template>

<script>
import Headers from '~/components/Header'
import Footers from '~/components/Footer'
import Register from '~/components/register'
import Query from '~/components/Query'
import {mapActions} from 'vuex'
import {mapState} from 'vuex'

export default {
  data(){
    return {
      forswitch : true
    }
  },
  methods:{
    ...mapActions(['bindFirebaseReferences']),
    onSwitch(){
      this.forswitch = !this.forswitch
    }
  },
  components: {
    Headers,
    Footers,
    Register,
    Query
  },
  created(){
      this.bindFirebaseReferences()
  },
  computed: {
    ...mapState(['posting']),
  }
}
</script>

<style>

</style>
