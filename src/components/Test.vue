<template>
  <div>
      <h2>{{names}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: {
      names: {
          type: String,
          default: "Hello boo-boo 1"
      }
      },
  data() {
      return {
          name: ""
      }
  }
}
</script>
