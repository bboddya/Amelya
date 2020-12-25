<template>
  <div class="home">
    <Header />
    <h1>Main page</h1>
    <hr>

    <pre>{{posts}}</pre>
  </div>
</template>

<script>
// @ is an alias to /src
import server from '@/server';
import Header from '@/components/Header'

export default {
  name: 'Home',
  comments: {
    Header
  },
  data() {
    return {
      posts: null
    }
  },
  computed: {
    loading() {
      return this.posts === null;
    }
  },
  async created() {
    let response = await server.get('wp/v2/posts');
    this.posts = response.data.map(post => ({
      id: post.id,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered,
    }))
  }
}
</script>
