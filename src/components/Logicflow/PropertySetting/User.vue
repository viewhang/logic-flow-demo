<template>
  <div>
    <a-form ref="form" :model="form" laba-width="80px">
      <a-form-item label="活动名称">
        <a-input v-model="form.name"></a-input>
      </a-form-item>
      <a-form-item label="活动区域">
        <a-select v-model="form.region" placeholder="请选择活动区域">
          <a-option label="区域一" value="shanghai"></a-option>
          <a-option label="区域二" value="beijing"></a-option>
        </a-select>
      </a-form-item>
      <a-form-item label="活动时间">
        <a-col :span="11">
          <a-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%"></a-date-picker>
        </a-col>
        <a-col class="line" :span="2">-</a-col>
        <a-col :span="11">
          <a-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%"></a-time-picker>
        </a-col>
      </a-form-item>
      <a-form-item label="即时配送">
        <a-switch v-model="form.delivery"></a-switch>
      </a-form-item>
      <a-form-item label="活动性质">
        <a-checkbox-group v-model="form.type">
          <a-checkbox label="美食/餐厅线上活动" name="type"></a-checkbox>
          <a-checkbox label="地推活动" name="type"></a-checkbox>
          <a-checkbox label="线下主题活动" name="type"></a-checkbox>
          <a-checkbox label="单纯品牌曝光" name="type"></a-checkbox>
        </a-checkbox-group>
      </a-form-item>
      <a-form-item label="特殊资源">
        <a-radio-group v-model="form.resource">
          <a-radio label="线上品牌商赞助"></a-radio>
          <a-radio label="线下场地免费"></a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="活动形式">
        <a-input type="textarea" v-model="form.desc"></a-input>
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
    lf: Object || String,
  },
  mounted() {
    const { properties } = this.nodeData
    if (properties) {
      this.form = Object.assign({}, this.form, properties)
    }
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
      const { id } = this.nodeData
      this.lf.setProperties(id, this.form)
      this.$emit('onClose')
    },
  },
}
</script>
<style scoped>
</style>
