<template>
  <div>
    <a-form>
      <a-form-item label="处理活动名称">
        <a-input v-model="formData.taskName" />
      </a-form-item>
      <a-form-item label="处理活动标识符">
        <a-input v-model="formData.taskSid" />
      </a-form-item>
      <a-form-item label="处理人表达式">
        <a-textarea
          v-model="formData.taskActorExpression"
          :auto-size="{ minRows: 3, maxRows: 5 }"
        />
      </a-form-item>
      <a-form-item label="允许转交">
        <a-switch
          v-model="formData.taskAllowDeliver"
          checked-children="允许"
          un-checked-children="禁止"
        />
      </a-form-item>
      <a-form-item label="允许撤回">
        <a-switch
          v-model="formData.taskAllowTakeBack"
          checked-children="允许"
          un-checked-children="禁止"
        />
      </a-form-item>
      <a-form-item label="允许终止">
        <a-switch
          v-model="formData.taskAllowStop"
          checked-children="允许"
          un-checked-children="禁止"
        />
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
      formData: {}
    }
  },
  mounted() {
    if (this.nodeData) {
      const data = { ...this.nodeData }
      const properties = data ? data.properties : {}
      this.formData = { ...properties }
      this.formData.taskName = data.text.value
    }
  },
  methods: {
    onSubmit() {
      const { id } = this.nodeData
      this.lf.setProperties(id, this.formData)
      this.lf.updateText(id, this.formData.taskName)
      this.$emit('onClose')
    }
  }
}
</script>
<style scoped>
</style>
