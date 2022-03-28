<template>
  <div class="container pt-4">
  <InputSearchRepositoryComponent class="row mb-4" />
  <Suspense class="row">
    <template #default>
      <RepositoryResultsComponent />
    </template>
    <template #fallback>
      <span>Loading</span>
    </template>
  </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputSearchRepositoryComponent from './components/InputSearchRepositoryComponent.vue'
import RepositoryResultsComponent from './components/RespositoryResultsComponent.vue'

export default defineComponent({
  components: { InputSearchRepositoryComponent, RepositoryResultsComponent }
})
</script>
