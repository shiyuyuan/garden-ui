<template>
  <div class="cus_vtree_wrap" @click.capture="clickNodeWrap">
    <studyTreeNode
      :treeData="treeData"
      @clickNodeCom="clickNode"
      :transitionTime="transitionTime"
      :checkBox="checkBox"
      :class="{tree_root_lonely:treeData.length === 1}"
      @toggleCheckBox="checkBoxFun"
    ></studyTreeNode>
  </div>
</template>

<script>
import studyTreeNode from "./studyTreeNode";
export default {
  name: "gdTree",
  components: {
    studyTreeNode
  },
  props: {
    treeData: {
      default: () => []
    },
    checkBox: {
      type: Boolean,
      default: false
    },
    transitionTime: {
      type: Number,
      default: 200
    },
    expand: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.initData(this.expand, true, true);
  },
  updated() {
    this.initData(this.expand, true, true);
  },
  methods: {
    initData(expandInit, activeInit, checkedInit) {
      var self = this;
      var modifyDataFun = function(datas, item) {
        if (datas) {
          datas.forEach((m, index) => {
            if (expandInit) {
              self.$set(m, "expand", true);
            }
            if (activeInit) {
              self.$set(m, "active", false);
            }
            if (checkedInit) {
              self.$set(m, "checked", false);
              self.$set(m, "partchecked", false);
            }
            if (index === datas.length - 1) {
              self.$set(m, "last", true);
            }
            m.lineArray = null;
            if (item && !m.lineArray) {
              m.lineArray = JSON.parse(JSON.stringify(item.lineArray));
              m.lineArray.push(m.last ? 0 : 1);
            }
            if (m.children) {
              modifyDataFun(m.children, m);
            }
          });
        }
      };
      modifyDataFun(this.treeData, { lineArray: [] });
    },
    clickNode(data) {
      this.$emit("clickNode", data);
    },
    clickNodeWrap() {
      this.initData(false, true, false);
    },
    checkBoxFun(item) {},
    getCheckedNodes() {
      var resultArr = [];
      var getCheckedNodesFun = datas => {
        if (datas) {
          datas.forEach(m => {
            if (m.checked === true) {
              resultArr.push(m);
            }
            if (m.children) {
              getCheckedNodesFun(m.children);
            }
          });
        }
      };
      getCheckedNodesFun(this.treeData);
      return resultArr;
    },
    getRoot() {
      return this.treeData[0];
    },
    findNode(selectedId) {
      var result;
      var findNodeFun = datas => {
        if (datas) {
          try {
            datas.forEach(m => {
              if (m.id === selectedId) {
                result = m;
                throw new Error("stop");
              }
              if (m.children) {
                findNodeFun(m.children);
              }
            });
          } catch (e) {}
        }
      };
      findNodeFun(this.treeData);
      return result;
    },
    setSelectedNode(node, clickDiv) {
      var select;
      var that = this;
      var setSelectedFun = (datas, parentChecked) => {
        if (datas) {
          datas.forEach(m => {
            if (m.id === node.id) {
              m.active = true;
              if (that.checkBox) {
                m.checked = true;
              }
              select = m;
              if (clickDiv) {
                var dom = document.getElementById(m.id);
                if (dom && dom.className.indexOf("cus_item_content") > -1) {
                  dom.click();
                } else {
                  var doms = document.getElementsByClassName(
                    "cus_item_content"
                  );
                  for (var y = 0; y < doms.length; y++) {
                    if (doms[y].id === m.id) {
                      doms[y].click();
                      break;
                    }
                  }
                }
              }
            } else {
              m.active = false;
              if (parentChecked && that.checkBox) {
                m.checked = true;
              }
            }
            if (m.children) {
              setSelectedFun(m.children, m.checked);
            }
          });
        }
      };
      setSelectedFun(this.treeData);
      return select;
    },
    getSelectedNode() {
      var resultNode = null;
      var getSelectedFun = datas => {
        if (datas) {
          datas.forEach(m => {
            if (m.active === true) {
              resultNode = m;
              return;
            }
            if (m.children) {
              getSelectedFun(m.children);
            }
          });
        }
      };
      getSelectedFun(this.treeData);
      return resultNode;
    },
    getParentNode(node) {
      var resultNode = null;
      var getParentNode = (datas, parent) => {
        if (datas) {
          try {
            datas.forEach(m => {
              if (node && m.id === node.id) {
                resultNode = parent;
                throw new Error("Stop");
              }
              if (!resultNode && m.children) {
                getParentNode(m.children, m);
              }
            });
          } catch (e) {}
        }
      };
      getParentNode(this.treeData, null);
      return resultNode;
    },
    getParentNodesArr(node) {
      var resultArr = [];
      var parentNode;
      var getParent = target => {
        parentNode = this.getParentNode(target);
        if (parentNode) {
          resultArr.push(parentNode);
          getParent(parentNode);
        }
      };
      getParent(node);
      return resultArr;
    }
  }
};
</script>

<style>
.cus_vtree_wrap > ul:first-child {
  background-image: none;
}
ul.cus_tree_ul {
  padding-left: 0px;
  background-image: url("./images/index.gif");
  background-image: none;
  background-position: 4px 10px;
  background-repeat: repeat-y;
}
li:last-child > ul.cus_tree_ul:last-child {
  background-image: none;
}

ul.cus_tree_ul li {
  text-align: left;
  cursor: pointer;
  list-style: none;
}
.cus_item_content span {
  vertical-align: middle;
}
.cus_item_content span.treeExpandBtn {
  display: inline-block;
  width: 18px;
  height: 30px;
  margin-right: 6px;
  background-image: url("./images/zTreeStandard.png");
}

.cus_vtree_wrap
  > ul
  > li:first-child
  > .cus_item_content
  > span.treeExpandBtn.butopen {
  background-position: -92px -5px;
}
li .cus_item_content span.treeExpandBtn.butopen {
  background-position: -92px -24px;
}
li:last-child .cus_item_content span.treeExpandBtn.butopen {
  background-position: -92px -54px;
}
.cus_vtree_wrap
  ul.tree_root_lonely
  > li
  > .cus_item_content
  > span.treeExpandBtn.butopen {
  background-position: -92px -54px;
}

.cus_vtree_wrap
  > ul
  > li:first-child
  > .cus_item_content
  > span.treeExpandBtn.btnclose {
  background-position: -74px -5px;
}
li .cus_item_content span.treeExpandBtn.btnclose {
  background-position: -74px -24px;
}
li:last-child .cus_item_content span.treeExpandBtn.btnclose {
  background-position: -74px -54px;
}
.cus_vtree_wrap
  ul.tree_root_lonely
  > li
  > .cus_item_content
  > span.treeExpandBtn.btnclose {
  background-position: -74px -54px;
}

.cus_item_content span.treeExpandBtn.lastLine {
  background-position: -56px -51px;
}
.cus_item_content span.treeExpandBtn.line {
  background-position: -56px -23px;
}
.cus_item_content span.tree_line {
  background-position: -234px -85px;
}
.cus_item_content span.tree_intend {
  background-image: none;
}

.cus_item_content .cus_chekcbox {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 6px;
  background-image: url("./images/zTreeStandard.png");
  background-position: -0px -0px;
}
.cus_item_content span.cus_chekcbox.cus_chekcbox_checked {
  background-position: -14px -0px;
}
.cus_item_content .cus_chekcbox.cus_chekcbox_part_checked {
  background-position: 0px -42px;
}

ul.cus_tree_ul li .cus_item_content {
  /*padding:4px;*/
  height: 30px;
  line-height: 30px;
  white-space: nowrap;
  overflow-x: hidden;
}
ul.cus_tree_ul li .cus_item_content:hover {
  background: #8f83e1;
  color: white;
}
ul.cus_tree_ul li .cus_item_content.active {
  background: #7663f8;
  color: white;
}
.folder {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  background-image: url("./images/zTreeStandard.png");
  background-position: -110px -0px;
}
.file {
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 6px;
  background-image: url("./images/zTreeStandard.png");
  background-position: -110px -30px;
}
</style>