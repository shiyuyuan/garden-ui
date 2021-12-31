
<template>
  <div>
    <input /> 展示:
    <span class="showText"></span>
  </div>
</template>
<script>
// 手动实现MVVM
export default {
  mounted() {
    this.mvvmMethos();
  },
  methods: {
    mvvmMethos() {
      let obj = {};
      let inputText = document.querySelector("input");
      let spanText = document.querySelector(".showText");
      Object.defineProperty(obj, "name", {
        set(value) {
          inputText.innerHTML = value;
          spanText.innerHTML = value;
        }
      });

      inputText.addEventListener("input", function(e) {
        obj.name = e.target.value;
      });
    }
  }
};
</script>