<template>
  <div class="gd-table">
    <el-table :data="data">
      <el-table-column v-if="table_config.checkbox" type="selection" width="45"></el-table-column>
      <!-- 插槽操作列/自定义列 -->
      <template v-for="item in table_config.thead">
        <slot v-if="item.slot" :name="item.slot"></slot>
        <el-table-column v-else :key="item.prop" :label="item.label" :prop="item.prop">
          <template v-if="item.type=='function'"></template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script>
import Vue from "vue";
import { Table, TableColumn, Icon, Pagination } from "element-ui";
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Icon);
Vue.use(Pagination);
export default {
  name: "eleTable",
  created() {},
  props: {
    config: {
      type: Object,
      default: () => {}
    },
    data: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      table_data: [],
      table_config: {
        thead: [],
        checkbox: true
      }
    };
  },
  watch: {
    config: {
      handler(newVal) {
        this.initConfig();
      },
      immediate: true
    }
  },
  methods: {
    initConfig() {
      for (let key in this.config) {
        if (Object.keys(this.table_config).includes(key)) {
          this.table_config[key] = this.config[key];
        }
      }
      console.log(this.table_config);
    }
  }
};
</script>
<style lang="sass" scoped>

</style>