<template>
  <div>
    <h1>Portfolio</h1>
    <div class="repos">
      <repo-component v-for="repo in repos" :key="repo.id" :repo="repo" :title="repo.name" :htmlUrl="repo.html_url" ></repo-component>
    </div>
  </div>
</template>

<script>
import RepoComponent from '../components/RepoComponent.vue';
import GithubService from '../services/GithubService';

export default {
  components: { RepoComponent },
  data() {
    return {
      repos: []
    }
  },
  mounted() {
    GithubService.getRepos()
      .then(response => {
        this.repos = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>

<style>

</style>