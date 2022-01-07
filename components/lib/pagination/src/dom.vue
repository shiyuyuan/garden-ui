<template>
  <div class="gd-pagination">
    <!-- prev -->
    <button :disabled="internalCurrentPage === 1" v-on:click="prePage()">
      <span v-if="prevText">{{prevText}}</span>
      <i v-else class="gd-icon gd-icon-up2"></i>
    </button>
    <!-- pager -->
    <ul class="gd-pager">
      <li v-for="(item, index) in pagers" :key="index">
        <a v-on:click="toPage(item)" :class="{'active':currentPage == item}">{{item}}</a>
      </li>
    </ul>
    <!-- next -->
    <button :disabled="internalCurrentPage === pagers" v-on:click="nextPage()">
      <span v-if="nextText">{{prevText}}</span>
      <i v-else class="gd-icon gd-icon-down2"></i>
    </button>
    <!-- total -->
    <span>共{{total}}条</span>
    <!--  sizes-->
    <select name id @change="changeSizes">
      <option v-for="ps in pageSizes" :value="ps" :label="ps" :key="ps"></option>
    </select>
    <!-- jumper -->
    <span>
      前往第
      <input
        class="gd-pagination-input"
        v-on:keyup.enter="toPages"
        v-model="internalCurrentPage"
      />页
    </span>
  </div>
</template>