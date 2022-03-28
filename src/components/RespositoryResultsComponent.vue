<template>
  <table>
    <InputSearchRepositoryHeaderComponent />
    <tbody>
      <InputSearchRepositoryRowComponent v-for="repository in repositories" :repository="repository" :key="repository.url" />
    </tbody>
  </table>
</template>

<script lang="ts">
// import { IRepositoryResult } from '@/interfaces/IRepositoryResult'
import { computed, defineComponent } from 'vue'
import InputSearchRepositoryHeaderComponent from './TableRepositoryHeaderComponent.vue'
import InputSearchRepositoryRowComponent from './TableRepositoryRowComponent.vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: { InputSearchRepositoryHeaderComponent, InputSearchRepositoryRowComponent },
  async setup () {
    const store = useStore()
    const repositories = computed(() => store.getters.repositories.repositories)
    return { repositories }
  }
})
</script>
