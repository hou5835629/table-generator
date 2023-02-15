<template>
  <el-dialog title="代码预览" :fullscreen="true" :visible.sync="dialogVisible" :close-on-click-modal="false">
    <el-input type="textarea" :rows="20" placeholder="" v-model="curCode">
    </el-input>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">
        关闭
      </el-button>
      <el-button type="primary" @click="copy">
        复制代码
      </el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dialogVisible: {
      get() {
        return this.show
      },
      set(val) {
        this.$emit('update:show', val)
      }
    }
  },
  data() {
    return {
      curCode: '',
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    //复制代码
    copy() {
      this.$copyText(this.curCode)
      this.$message({
        message: '复制成功',
        type: 'success'
      })
    },
    showCode(code) {
      this.curCode = code
    }
  },
};
</script>
<style lang="scss" scoped>
</style>
