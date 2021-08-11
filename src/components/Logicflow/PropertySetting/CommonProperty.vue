<template>
  <div>
    <a-form laba-width="80px" :model="formData">
      <a-form-item label="名称">
        <a-input v-model="formData.name" />
      </a-form-item>
      <a-form-item label="活动区域">
        <a-input v-model="formData.region" />
      </a-form-item>
      <a-form-item label="活动形式">
        <a-input v-model="formData.type" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="onSubmit">保存</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
export default {
  name: '',
  props: {
    nodeData: Object,
    lf: Object || String
  },
  data() {
    return {
      formData: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  mounted() {
    const { properties } = this.nodeData
    if (properties) {
      this.formData = Object.assign({}, this.formData, properties)
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
      const { id } = this.nodeData
      this.lf.setProperties(id, this.formData)
      this.$emit('onClose')
    }
  }
}
</script>
<style scoped>
</style>
