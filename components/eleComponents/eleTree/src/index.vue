<template>
  <div class="gd-eleTree">
    <el-tree
      :data="allData"
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent"
      show-checkbox
    ></el-tree>
  </div>
</template>
<script>
// import _ from loash
import Vue from "vue";
import {
  Tree,
  Icon,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input
} from "element-ui";
Vue.use(Tree);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Input);
let id = 1000;
export default {
  name: "eleTree",
  created() {},
  props: {
    data: {
      type: Array,
      default: () => []
    },
    diectoryDrop: {
      type: Array,
      default: () => []
    },
    fileDrop: {
      type: Array,
      default: () => []
    },
    delete: {
      type: Function,
      default: () => () => {}
    },
    edit: {
      type: Function,
      default: () => () => {}
    }
  },
  mounted() {},
  data() {
    return {
      allData: [],
      currentId: "", //默认当前点击的修改
      currentContent: "" //当前编辑的内容
    };
  },
  watch: {
    data: {
      handler(newVal) {
        this.allData = newVal;
      },
      immediate: true
    }
  },
  methods: {
    findCurrentDelete(id, arr, type) {
      arr.forEach((element, index) => {
        if (element.id === id) {
          if (type == "delete") {
            arr.splice(index, 1);
          } else {
            element.label = this.currentContent;
          }

          return;
        } else if (element.children && element.children.length > 0) {
          this.findCurrentDelete(id, element.children, type);
        }
      });
      return arr;
    },
    remove(id) {
      let arr = JSON.parse(JSON.stringify(this.allData));
      let list = this.findCurrentDelete(id, arr, "delete");
      this.$emit("update:data", list);
    },
    reName(data) {
      this.currentId = data.id;
      this.currentContent = data.label;
    },
    reMove(data) {
      this.delete
        ? this.delete(data.id).then(res => {
            this.remove(res);
          })
        : this.remove(data.id);
    },
    reAdd(data) {
      console.log(data);
      const newChild = {
        id: id++,
        label: ""
      };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
      this.currentId = newChild.id;
      this.currentContent = newChild.label;
      console.log(this.allData);
      this.addFlag = true;
    },
    handleCommand(data, value) {
      if (value === "rn") {
        this.reName(data);
      } else if (value == "rm") {
        this.reMove(data);
      } else if (value == "add") {
        this.reAdd(data);
      }
    },
    sureBtn(data) {
      this.edit
        ? this.edit(data.id).then(res => {
            this.editHandle(res);
          })
        : this.editHandle(data.id);
    },
    editHandle(id) {
      let arr = JSON.parse(JSON.stringify(this.allData));
      let list = this.findCurrentDelete(id, arr, "edit");
      console.log(list);
      this.$emit("update:data", list);
      this.currentId = "";
    },
    cancelBtn() {
      this.currentId = "";
    },
    handelInput(v) {
      this.currentContent = v;
    },
    renderContent(h, { node, data, store }) {
      let isParent = data.children && data.children.length > 0;
      let list = isParent ? this.diectoryDrop : this.fileDrop;
      console.log("data.id");
      console.log(data.id);
      console.log(this.currentId);
      return (
        <span class="custom-tree-node">
          {isParent ? (
            node.expanded ? (
              <i class="el-icon-folder-opened"></i>
            ) : (
              <i class="el-icon-folder"></i>
            )
          ) : (
            <i class="el-icon-document"></i>
          )}
          {data.id === this.currentId ? (
            <el-input
              value={this.currentContent}
              on-input={this.handelInput.bind(this)}
            />
          ) : (
            node.label
          )}

          {data.id !== this.currentId ? (
            <el-dropdown
              size="small"
              trigger="click"
              on-command={this.handleCommand.bind(this, data)}
            >
              <span class="el-dropdown-link">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                {list.map(item => (
                  <el-dropdown-item command={item.text}>
                    {item.value}
                  </el-dropdown-item>
                ))}
              </el-dropdown-menu>
            </el-dropdown>
          ) : (
            <span>
              <el-button type="text" on-click={this.sureBtn.bind(this, data)}>
                确认
              </el-button>
              <el-button type="text" on-click={this.cancelBtn}>
                取消
              </el-button>
            </span>
          )}
        </span>
      );
    }
  }
};
</script>
<style lang="scss" scoped>
</style>