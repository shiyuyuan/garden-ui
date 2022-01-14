<template>
  <div class="gd-tree">
    <eleTree
      :data.sync="newData"
      :fileDrop="fileDrop"
      :diectoryDrop="diectoryDrop"
      :delete="deleteBtn"
      :edit="editBtn"
    ></eleTree>
  </div>
</template>
<script>
export default {
  name: "eleTreeComponent",
  created() {},
  data() {
    return {
      fileDrop: [
        { text: "add", value: "新增" },
        { text: "rn", value: "修改" },
        { text: "rm", value: "删除" }
      ],
      diectoryDrop: [
        { text: "add", value: "新增" },
        { text: "rn", value: "修改" },
        { text: "rm", value: "删除" }
      ],
      data: [
        {
          label: "一级 1",
          id: 1,
          children: [
            {
              label: "二级 1-1",
              id: 2,
              children: [
                {
                  label: "三级 1-1-1",
                  id: 3
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          id: 4,
          children: [
            {
              label: "二级 2-1",
              id: 5,
              children: [
                {
                  label: "三级 2-1-1",
                  id: 6
                }
              ]
            },
            {
              label: "二级 2-2",
              id: 7,
              children: [
                {
                  label: "三级 2-2-1",
                  id: 8
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          id: 9,
          children: [
            {
              label: "二级 3-1",
              id: 10,
              children: [
                {
                  label: "三级 3-1-1",
                  id: 11
                }
              ]
            },
            {
              label: "二级 3-2",
              id: 12,
              children: [
                {
                  label: "三级 3-2-1",
                  id: 13
                }
              ]
            }
          ]
        }
      ],
      newData: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.newData = this.data;
    }, 100);
  },
  methods: {
    deleteBtn(id) {
      return new Promise((resolve, reject) => {
        resolve(id);
      });
    },
    editBtn(id) {
      return new Promise((resolve, reject) => {
        resolve(id);
      });
    }
  }
};
</script>
<style lang="sass" scoped>

</style>