<template>
  <div class="articles">
    <articleItem v-for="article in articles" :key="article.id" :article="article">
    </articleItem>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import articleItem from '@/components/articleItem.vue';
import Axios from 'axios'

@Component({
  components:{
    articleItem
  }
})
export default class Articles extends Vue {
    articles = [];
    created () {
      this.getArticlesList()
    }
    mounted () {
      
    }
    getArticlesList (){
      Axios.get('/api/getAriticleData').then((res)=>{
        this.articles = res.data.data
        console.log(this.articles);
      }
      ).catch((error)=>{
        console.log('获取数据失败')
      }
      )
    }
}
</script>

<style lang="scss" scoped></style>
