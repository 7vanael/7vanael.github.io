<template>
  <div>
    {{ title }}
  </div>
</template>

<script>
export default {
    // props: ['repo', 'title', 'htmlUrl']
    props: {
        repo: Object,
        title: String,
        htmlUrl: String
    }
}
</script>

<style>

</style>