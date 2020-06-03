<template>
    <div class="article-item clearfix">
        <router-link :to="'/article/' + article.id">
            <div class="content">
                <h4 class="title">
                    {{article.title}}
                </h4>
                <div class="abstract">
                    {{article.subtitle}}
                </div>
                <div class="meta">
                    <span>查看 {{article.views}}</span>
                    <span>评论 {{article.comment}}</span>
                    <span>赞 {{article.likes}}</span>
                    <span class="time">{{article.date}}</span>
                </div>
            </div>
            <div class="image">
                <img :src="article.image" :alt="article.title" :title="article.title">
            </div>
        </router-link>
    </div>
</template>


<script lang="ts">
import{Component,Vue, Prop}from 'vue-property-decorator';

@Component
export default class articleItem extends Vue{
    @Prop(Object)
    private article:Object;
}
</script>


<style lang="less" scope>
.article-item{
    line-height: 20px;
    position: relative;
    padding: 15px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    .content{
        width: 680px;
        float: left;
        .title{
            color: #333;
            margin: 7px 0 4px;
            display: inherit;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.5;
        }
        .abstract{
            min-height: 30px;
            margin: 0 0 8px;
            font-size: 13px;
            line-height: 24px;
            color: #555;
        }
        .meta{
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
            span{
                margin-right: 10px;
                color: #666;
            }
        }
        
    }
    .image{
        width: 125px;
        float: right;
        img{
            width: 100%;
            height: auto;
        }
    }
}

</style>