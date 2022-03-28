<template>
  <tr>
    <td>{{repository.name}}</td>
    <td>{{repository.url}}</td>
  </tr>
</template>

<script lang="ts">
import { IRepositoryResult } from '@/interfaces/IRepositoryResult'
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  props: {
    repository: {
      required: true,
      type: Object as () => IRepositoryResult
    }
  },
  setup (props) {
    return { ...toRefs(props) }
  }
})
</script>
