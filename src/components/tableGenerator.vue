<template>
  <div class="container">
    <el-row>
      <el-col :span="5">
        <div class="sideBar">
          <el-collapse accordion v-model="activeNames">
            <draggable v-model="options" forceFallback="true" animation="1000" @start="onStart" @end="onEnd">
              <transition-group>
                <div v-for="(item, index) in options" :key="item.id">
                  <el-collapse-item :name="index">
                    <template slot="title">
                      {{ item.label }}<i @click.stop="del(index)" class="el-icon-error"></i>
                    </template>
                    <div class="option">
                      <el-form label-position="left" :model="item">
                        <el-form-item label="名称">
                          <el-input v-model="item.label" placeholder="请输入名称"></el-input>
                        </el-form-item>
                        <el-form-item label="字段名">
                          <el-input v-model="item.field" placeholder="请输入字段名"></el-input>
                        </el-form-item>
                        <el-form-item label="宽度">
                          <el-input v-model="item.width" placeholder="请输入宽度(单位px)"></el-input>
                        </el-form-item>
                        <el-form-item label="预览值">
                          <el-input v-model="item.keyword" @input="keywordChange(index)" placeholder="请输入预览值">
                          </el-input>
                        </el-form-item>
                        <el-form-item label="是否固定">
                          <el-switch style="margin-left:5px" v-model="item.isFixed" active-color="#13ce66"
                            inactive-color="#ff4949">
                          </el-switch>
                        </el-form-item>
                        <el-form-item label="固定方向">
                          <el-select :disabled="!item.isFixed" v-model="item.fixDireaction" placeholder="请选择固定方向">
                            <el-option label="左" value="left"></el-option>
                            <el-option label="右" value="right"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-form>
                    </div>
                  </el-collapse-item>
                </div>
              </transition-group>
            </draggable>
          </el-collapse>
          <div @click="toAdd" class="add">
            <i class="el-icon-circle-plus"></i>
            <div>新增字段</div>
          </div>
          <div class="selection">
            是否多选: <el-switch style="margin-left:5px" v-model="isSelection" active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </div>
          <div class="selection">
            开启边框: <el-switch style="margin-left:5px" v-model="isBorder" active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
          </div>
          <div class="selection">
            固定表头: <el-switch style="margin-left:5px" v-model="isFixedHeader" active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </div>
          <div class="selection">
            表格宽度: <el-input v-model="tableWidth" style="width: 120px;margin-left:5px" placeholder="请输入宽度"></el-input>
          </div>
          <div class="selection">
            data: <el-input v-model="dataOp" style="width: 120px;margin-left:5px" placeholder="data双向绑定值"></el-input>
          </div>
          <div class="selection">
            ref: <el-input v-model="tableRef" style="width: 120px;margin-left:5px" placeholder="tableRef"></el-input>
          </div>
          <div class="selection">
            tableKey: <el-input v-model="tableKey" style="width: 120px;margin-left:5px" placeholder="tableKey">
            </el-input>
          </div>
          <div class="selection">
            v-loading: <el-input v-model="tableLoading" style="width: 120px;margin-left:5px" placeholder="tableLoading">
            </el-input>
          </div>
          <el-button @click="generateCode" type="success" style="width: 100%;margin-top:20px;" round>生成代码</el-button>
        </div>
      </el-col>
      <el-col :span="19">
        <div class="main">
          <el-table :data="data" :border="isBorder ? true : false" @header-dragend="widthChange"
            :style="{ 'width': tableWidth }">
            <el-table-column align="center" v-if="isSelection" type="selection" width="55">
            </el-table-column>
            <el-table-column align="center" :key="idx" v-for="(items, idx) in options" :prop="String(items.id)"
              :label="items.label" :width="items.width">
              <template slot-scope="{row}">
                <span>{{ items.keyword }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>

    <Code ref="Code" :show.sync="showCode"></Code>
  </div>
</template>

<script>
import Code from './code.vue'
import draggable from 'vuedraggable'
export default {
  components: {
    draggable,
    Code
  },
  name: 'tableGenerator',
  data() {
    return {
      colomunId: 1,//列id
      tableLoading: 'tableLoading',//表格加载状态key
      isFixedHeader: false,//固定表头
      isBorder: true,//是否显示边框
      tableKey: 'tableKey',//表格key
      tableRef: 'elTable',//表格ref
      dataOp: 'data',//表格data双向绑定值
      showCode: false,//是否显示代码
      drag: false,//是否可拖拽
      options: [
        {
          id: 1,
          label: '字段1',//名称
          field: '',//字段名
          width: 100,//宽度
          keyword: '预览值1',//预览值
          isFixed: false,//是否固定
          fixDireaction: 'right'//固定方向
        }
      ],
      data: [//data值
        {
          name: ''
        }
      ],
      activeNames: 0,//激活的项
      isSelection: false,//是否多选
      tableWidth: '100%'//表格宽度
    }
  },
  methods: {
    //预览值变化
    keywordChange(e) {
      console.log(e)
      let obj = this.list[0]
    },
    //动态改变宽度
    widthChange(newWidth, oldWidth, column, event) {
      let colomunId = parseInt(column.property)
      let index = this.options.findIndex(item => item.id == colomunId)
      this.options[index].width = newWidth
    },
    //生成代码
    generateCode() {
      let CodeHead = `<el-table ref="${this.tableRef}" ${this.isFixedHeader ? 'height:250' : ''} :key="${this.tableKey}" v-loading="${this.tableLoading}" :data="${this.dataOp}" border fit highlight-current-row style="width: ${this.tableWidth}">
      ${this.isSelection ? `<el-table-column align="center" type="selection" width="55"></el-table-column>` : ''}`
      let CodeFoot = `

</el-table>`
      let CodeBody = ''
      this.options.forEach((item, index) => {
        CodeBody += `
  <el-table-column align="center" ${item.isFixed ? `fixed="${item.fixDireaction}"` : ''} prop="${item.field}" label="${item.label}" width="${item.width}">
      <template slot-scope="{row}">
          <span>{{ row.${item.field} }}</span>
      </template>
   </el-table-column>`
      })
      let code = CodeHead + CodeBody + CodeFoot
      this.$refs.Code.showCode(code)
      this.showCode = true
    },
    //开始拖拽事件
    onStart() {
      this.drag = true;
    },
    //拖拽结束事件
    onEnd() {
      this.drag = false;
    },
    //删除字段
    del(index) {
      if (index == 0 && this.options.length == 1) {
        this.$message.error('不能删除第一个字段')
        return
      }
      this.options.splice(index, 1)
      // console.log(this.options)
    },
    //新增字段
    toAdd() {
      this.options.push({
        id: this.colomunId + 1,
        label: '字段' + (this.colomunId + 1),//名称
        field: '',//字段名
        width: 100,//宽度
        keyword: '预览值' + (this.colomunId + 1),//预览值
        isFixed: false,//是否固定
        fixDireaction: 'right'//固定方向
      })
      this.colomunId++
      this.activeNames = this.options.length - 1
      // console.log(this.options)
    },
  }
}
</script>

<style scoped lang="scss">
.sideBar {
  height: 100vh;
  border-right: 1px solid #e5e5e5;
  overflow: scroll;
  box-sizing: border-box;
  overflow-x: hidden !important;
  padding: 0 10px;
  padding-bottom: 10px;

  .el-icon-error {
    font-size: 16px;
    color: red;
    margin-left: 5px;
  }

  .title {
    text-align: center;
    margin-bottom: 10px;
  }

  .add:hover {
    cursor: pointer;
  }

  .add {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1989fa;

    i {
      margin-right: 5px;
    }
  }

  .selection {
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #333;
    margin-top: 10px;
  }
}

.main {
  height: 100vh;
}

.el-collapse {
  border-top: none !important;
  border-bottom: none !important;
}
</style>
