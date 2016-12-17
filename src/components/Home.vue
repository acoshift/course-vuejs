<template>
  <div class="ui basic segment">
    <div class="ui segment">
      <form class="ui form" @submit.prevent="post">
        <div class="field">
          <textarea v-model.trim="input">
        </div>
        <button class="ui blue button" :class="{'loading disabled': posting}">Post</button>
      </form>
    </div>
    <div v-for="tweet in list" class="ui segment">
      <img class="ui circular image" v-if="tweet.user" :src="tweet.user.photo">
      <span v-if="tweet.user">{{ tweet.user.name }}</span><br>
      {{ tweet.content }} ({{ tweet.timestamp | fromNow }})
    </div>
  </div>
</template>

<style scoped>
  .circular.image {
    width: 32px;
    height: 32px;
  }
</style>

<script>
import { Tweet, User } from '../services'

export default {
  data: () => ({
    input: '',
    posting: false,
    tweets: [],
    users: {}
  }),
  created () {
    Tweet.list((list) => {
      this.tweets = list
    })
    User.list((list) => {
      this.users = list.reduce((p, v) => {
        p[v.$id] = v
        return p
      }, {})
    })
  },
  computed: {
    list () {
      return this.tweets.map((tweet) => {
        return {
          ...tweet,
          user: this.users[tweet.owner]
        }
      })
    }
  },
  methods: {
    post () {
      if (!this.input) return
      this.posting = true
      Tweet.post(this.input)
        .then(() => {
          this.input = ''
          this.posting = false
        })
    }
  }
}
</script>
