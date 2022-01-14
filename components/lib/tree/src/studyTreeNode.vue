<template>
  <ul class="cus_tree_ul" :class="{cus_tree_ulLine:(treeData && treeData.length)}">
    <li v-for="item in treeData">
      <div
        class="cus_item_content"
        :title="item.text"
        @click="clickNode(item)"
        :id="item.id"
        :class="{active:item.active}"
      >
        <span
          v-for="(iconItem,iconIndex) in item.lineArray"
          v-if="iconIndex < item.lineArray.length - 1"
          class="treeExpandBtn"
          :class="{tree_line:iconItem,tree_intend:!iconItem}"
          :key="iconIndex"
        ></span>

        <span
          class="treeExpandBtn"
          @click.stop="toggleNode(item)"
          :class="{butopen:item.expand && item.children && item.children.length,btnclose:!item.expand && item.children && item.children.length,line: !item.last && (!item.children || !item.children.length),lastLine:item.last&&(!item.children || !item.children.length)}"
        ></span>
        <span class="tree-icon" :class="item.icon"></span>
        <span
          v-if="checkBox"
          @click="checkBoxClick(item)"
          class="cus_chekcbox"
          :class="{cus_chekcbox_checked:item.checked,cus_chekcbox_part_checked:item.partchecked}"
        ></span>
        {{item.text}}
      </div>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave=" leave"
        @after-leave="afterLeave "
      >
        <studyTreeNode
          :treeData="item.children"
          :transitionTime="transitionTime"
          v-show="item.expand"
          @clickNodeCom="clickNodeCom"
          :checkBox="checkBox"
          :class="{cus_checkbox_allchecked:item.checked}"
          @toggleCheckBox="checkBoxFun(item)"
        ></studyTreeNode>
      </transition>
    </li>
  </ul>
</template>
<script>
export default {
  name: "studyTreeNode",
  methods: {
    beforeEnter(el) {
      el.style.height = "0px";
      el.style.transition = "height " + this.transitionTime / 1000 + "s";
      el.style.overflow = "hidden";
    },
    enter(el) {
      el.style.height = el.scrollHeight + "px";
    },
    afterEnter(el) {
      el.style.transition = "";
      el.style.overflow = "";
      el.style.height = "";
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + "px";
      el.style.transition = "height " + this.transitionTime / 1000 + "s";
      el.style.overflow = "hidden";
    },
    leave(el) {
      el.style.height = el.scrollHeight + "px";
      el.style.height = "0px";
    },
    afterLeave(el) {
      el.style.height = "";
      el.style.transition = "";
      el.style.overflow = "";
    },
    clickNode(item) {
      item.active = true;
      this.$emit("clickNodeCom", item);
    },
    toggleNode(item) {
      item.expand = !item.expand;
      item.active = true;
    },
    clickNodeCom(data) {
      this.$emit("clickNodeCom", data);
    },
    checkBoxClick(item) {
      item.partchecked = false;
      item.checked = !item.checked;
      //设置子元素是否勾选
      var checkChildFun = childrenDatas => {
        childrenDatas.forEach(m => {
          m.checked = item.checked;
          if (m.children) {
            checkChildFun(m.children);
          }
        });
      };
      if (item.children) {
        checkChildFun(item.children);
      }

      this.$emit("toggleCheckBox");
    },
    checkBoxFun(item) {
      var checkedNum = 0;
      var partCheckedNum = 0;
      item.children.forEach(li => {
        if (li.checked === true) {
          checkedNum++;
        } else if (li.partchecked === true) {
          partCheckedNum++;
        }
      });
      if (checkedNum === item.children.length) {
        //全选
        item.checked = true;
        item.partchecked = false;
      } else if (checkedNum > 0 || partCheckedNum > 0) {
        //部分勾选
        item.checked = false;
        item.partchecked = true;
      } else {
        //没有勾选
        item.checked = false;
        item.partchecked = false;
      }

      this.$emit("toggleCheckBox");
    }
  },
  props: {
    treeData: {
      default: () => []
    },
    checkBox: {
      default: false
    },
    transitionTime: {
      type: Number
      //default:true
    }
  }
};
</script>