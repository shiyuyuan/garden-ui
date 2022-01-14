<template>
  <div class="sir-table">
    <eleTable :config="table_config" :data="tableData5">
      <el-table-column slot="operate" label="操作" align="center" fixed="right" width="300">
        <template slot-scope="scope">
          <el-button size="small" type="warning" icon="el-icon-edit" @click="edit(scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="primary"
            icon="el-icon-success"
            @click="startUsing(scope.row)"
          >启用</el-button>
        </template>
      </el-table-column>
    </eleTable>
  </div>
</template>
<script>
export default {
  name: "eleTableComponent",
  created() {},
  props: {},
  data() {
    return {
      table_config: {
        thead: [
          { label: "名称", prop: "name" },
          { label: "类型", prop: "type", type: "function", callback: () => {} },
          { label: "区域", prop: "address" },
          { label: "可停放车辆", prop: "number" },
          { label: "禁启用", prop: "status" },
          { label: "查看位置", prop: "lnglat" },
          { label: "操作" },
          { slot: "operate" }
        ]
      },
      tableData5: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        }
      ]
    };
  }
};
</script>
<style lang="sass" scoped>

</style>