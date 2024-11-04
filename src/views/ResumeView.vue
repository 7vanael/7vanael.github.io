<template>
    <div> 
        <h1>Resume for Kristi Norris</h1> 
        <iframe
        :src="url"
        width="100%"
        height="600px"
        style="border: none;"
        title="PDF Viewer"
      ></iframe>
    </div>
</template>

<script>
export default {
    data() {
        return {
            url : '../../public/assets/documents/KristiNorrisResume.pdf'
        }
    }
}
</script>

<style>

</style>