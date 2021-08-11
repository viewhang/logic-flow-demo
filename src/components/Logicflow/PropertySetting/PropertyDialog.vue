<template>
  <div class="property-dialog">
    <TaskProperty
      v-if="nodeData.type === 'task'"
      :node-data="nodeData"
      :lf="lf"
      @onClose="handleClose"
    />
  </div>
</template>
<script>
import CommonProperty from './CommonProperty'
import User from './User.vue'
import TaskProperty from './TaskProperty.vue'

export default {
  name: 'PropertyDialog',
  components: {
    CommonProperty,
    User,
    TaskProperty
  },
  props: {
    nodeData: Object,
    lf: Object
  },
  data() {
    return {}
  },
  methods: {
    handleClose() {
      this.$emit('setPropertiesFinish')
    }
  }
}
</script>
<style>

</style>
