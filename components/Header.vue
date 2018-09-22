<template>
<div class="jumbotron jumbotron-fluid" id="thisisheader">
  <div class="container">
    <h2 class="display-4" id="top">旅仲間募集掲示板</h2>
  </div>
</div>
</template>

<script>
export default {
  head () {
    return {
      title: '旅仲間募集掲示板ｘｙｚ',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>
<style>
.jumbotron#thisisheader {
  background-color:#000080;
}
.display-4{
color: #FFFFFF;
text-align: center;
}
</style>
