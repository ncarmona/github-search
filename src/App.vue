<template>
  <InputSearchRepositoryComponent />
  <Suspense>
    <template #default>
      <RepositoryResultsComponent />
    </template>
    <template #fallback>
      <span>Loading</span>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputSearchRepositoryComponent from './components/InputSearchRepositoryComponent.vue'
import RepositoryResultsComponent from './components/RespositoryResultsComponent.vue'

export default defineComponent({
  components: { InputSearchRepositoryComponent, RepositoryResultsComponent }
})
</script>
