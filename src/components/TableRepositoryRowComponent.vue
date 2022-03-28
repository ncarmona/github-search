<template>
  <tr>
    <td>{{repository.name}}</td>
    <td><a :href="repository.url" target="_blank">{{repository.url}}</a></td>
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
