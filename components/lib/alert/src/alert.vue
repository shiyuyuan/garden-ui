<template>
  <transition name="gd-alert-fade">
    <div
      class="gd-alert"
      :class="[typeClass, center ? 'is-center' : '']"
      v-show="visible"
      role="alert"
    >
      <i class="gd-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
      <div class="gd-alert__content">
        <span class="gd-alert__title" :class="[ isBoldTitle ]" v-if="title || $slots.title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="gd-alert__description" v-if="$slots.default && !description">
          <slot></slot>
        </p>
        <p class="gd-alert__description" v-if="description && !$slots.default">{{ description }}</p>
        <i
          class="gd-alert__closebtn"
          :class="{ 'is-customed': closeText !== '', 'gd-icon-close': closeText === '' }"
          v-show="closable"
          @click="close()"
        >{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
const TYPE_CLASSES_MAP = {
  success: "gd-icon-success",
  warning: "gd-icon-warning",
  error: "gd-icon-error"
};
export default {
  name: "gdAlert",

  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "info"
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ""
    },
    showIcon: Boolean,
    center: Boolean
  },

  data() {
    return {
      visible: true
    };
  },

  methods: {
    close() {
      this.visible = false;
      this.$emit("close");
    }
  },

  computed: {
    typeClass() {
      return `gd-alert--${this.type}`;
    },

    iconClass() {
      return TYPE_CLASSES_MAP[this.type] || "gd-icon-info";
    },

    isBigIcon() {
      return this.description || this.$slots.default ? "is-big" : "";
    },

    isBoldTitle() {
      return this.description || this.$slots.default ? "is-bold" : "";
    }
  }
};
</script>
