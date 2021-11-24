<template>
  <div class="">de s</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
export default defineComponent({
  name: 'axios',
  components: {},
  setup() {
    const state = reactive({
      loading: false
    })
    onMounted(() => {
      console.log('onMounted')
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>
<style lang="scss" scoped></style>
