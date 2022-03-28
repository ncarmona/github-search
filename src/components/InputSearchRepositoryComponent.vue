<template>
  <input type="text" placeholder="framework" v-model="searchString">
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch } from 'vue'
import { getRepositoriesController } from '@/controllers/RepositoriesControllers'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const searchString:Ref<string> = ref('')
    const store = useStore()
    watch(searchString, async (val: any) => {
      store.dispatch('setRepositories', {
        repositories: await getRepositoriesController(val)
      })
    })

    return { searchString }
  }
})
</script>
