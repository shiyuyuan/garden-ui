
<template>
  <div>
    <ul v-for="listArray in listData" :key="listArray.name">
      <li>{{listArray.name}}</li>
      <li>{{listArray.age}}</li>
      <li>{{listArray.edu}}</li>
      <li>{{listArray.phone}}</li>
      <li>{{listArray.school}}</li>
    </ul>
    <gd-pagination
      :pageSize.sync="pageSize"
      :currentPage.sync="currentPage"
      :total="total"
      :page-sizes="[2, 3, 4, 5]"
      layout="total, sizes, prev, pager, next, jumper,slot"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    >
      <!-- <div>213213</div> -->
    </gd-pagination>
  </div>
</template>
<script>
import listArray from "./listArray";
export default {
  data() {
    return {
      listArray,
      pageSize: 4,
      currentPage: 1
    };
  },
  mounted() {},
  computed: {
    listData() {
      let arr = this.listArray.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
      return arr;
    },
    total() {
      return this.listArray.length;
    }
  },
  methods: {
    handleCurrentChange(val) {
      console.log("val:" + val);
      //   this.currentPage = val;
    },
    handleSizeChange(val) {
      //   console.log(val);
      //   this.pageSize = val;
    }
  }
};
</script>
<style scoped>
</style>