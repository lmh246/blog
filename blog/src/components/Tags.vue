<template>
  <div class="Tags">
    <rotate-tag ref="rotate"></rotate-tag>
  </div>
</template>

<script>
import RotateTag from './RotateTag'
export default {
  name: 'Tags',
  components: {
    "rotate-tag": RotateTag
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
