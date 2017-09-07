<template>
  <!-- 使用了 Bootstrap 中的 media 组件 -->
  <div class="media post">
    <div class="media-left">
      <a href="#">
        <avatar :alt="post.user.username" :size="45" class="v-avatar--squared"></avatar>
      </a>
    </div>
    <div class="media-body">
      <div class="media-heading">{{ post.title }}</div>
      <!-- 增加显示了帖子的 topic 和 username，并为每个生成不同的背景色 -->
       <div class="post__meta">
       <span class="label post__topic" :style="{background: topicBackground}">{{ post.topic.name}}</span>
        {{ post.created_at | fromNow }} By {{ post.user.username }}
      </div>
    </div>
  </div>
</template>

<script>
  import Avatar from './Avatar.vue'
  import wc from 'word-color'
  import moment from 'moment'

  export default {
    props: ['post'],
    data() {
      return {
      }
    },
    computed: {
      // 根据话题生成帖子话题标签的背景色
      topicBackground() {
        return wc(this.post.topic.name)
      }
    },
    components: {
      Avatar
    },
    filters: {
       // 帖子的发布时间显示为 from now 格式
      fromNow(created_at) {
        return moment(created_at).fromNow()
      }
    }
  }
</script>

<style>
  .post {
    margin-bottom: 15px;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 3px;
  }
  .post__meta {
    color: #999;
    font-size: 12px;
  }
  .post__topic {
    padding: 0 .2em;
    font-weight: normal;
    margin-right: .5em;
  }
</style>