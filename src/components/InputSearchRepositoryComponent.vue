<template>
  <div class="search p-2 col-md-6">
    <div class="d-flex p-0">
      <img src="./../assets/search.png" class="search-icon flex-shrink-1" alt="search">
      <input type="text" class="w-100" placeholder="framework" v-model="searchString">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch } from 'vue'
import { getRepositoriesController } from '@/controllers/RepositoriesControllers'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const searchString:Ref<string> = ref('')
    const store = useStore()
    const fillRepositories = async (val:string) => {
      store.dispatch('setRepositories', {
        repositories: await getRepositoriesController(val)
      })
    }
    watch(searchString, async (val: string) => {
      await fillRepositories(val)
    })
    return { searchString }
  }
})
</script>

<style lang="scss" scoped>
  .search {
    border: 1px solid black;
    border-radius: 15px;
    .search-icon {
      width: 25px;
    }
    input {
      border: 0;
      outline: none;
    }
  }
</style>
