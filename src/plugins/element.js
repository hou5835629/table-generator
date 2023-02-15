import Vue from 'vue'
import { Button, Row, Col, Collapse, CollapseItem, Form, FormItem, Input, Table, TableColumn, Switch, Dialog, Message, Select, Option, OptionGroup } from 'element-ui'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)

Vue.prototype.$message = Message