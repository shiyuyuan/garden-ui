<script>
export default {
  name: "gdPagination",
  props: {
    pageSize: {
      type: Number | String,
      default: 10
    },
    currentPage: {
      type: Number | String,
      default: 1
    },
    total: Number,
    prevText: String,
    nextText: String,
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50, 100];
      }
    },
    layout: {
      default: "prev, pager, next, jumper, sizes, total"
    }
  },
  data() {
    return {
      internalCurrentPage: 1,
      internalPageSize: 0
    };
  },
  render(h) {
    let tempalte = (
      <div
        class={[
          "gd-pagination",
          {
            "is-background": this.background,
            "el-pagination--small": this.small
          }
        ]}
      ></div>
    );
    const layout = this.layout || "";
    const TEMPLATE_MAP = {
      prev: <Prev />,
      pager: <Pagers />,
      next: <Next />,
      jumper: <Jumper />,
      sizes: <Sizes />,
      total: <Total />,
      slot: <my-slot />
    };
    tempalte.children = tempalte.children || [];
    let components = layout.split(",").map(item => item.trim());
    components.forEach(comp => {
      tempalte.children.push(TEMPLATE_MAP[comp]);
    });
    return tempalte;
  },
  components: {
    MySlot: {
      render(h) {
        console.log(this.$parent.$slots);
        return this.$parent.$slots.default
          ? this.$parent.$slots.default[0]
          : "";
      }
    },
    Total: {
      render() {
        return <span>共{this.$parent.total}条</span>;
      }
    },
    Sizes: {
      render() {
        return (
          <select
            name
            id
            on-input={this.$parent.changeSizes}
            value={this.$parent.internalPageSize}
          >
            {this.$parent.pageSizes.map(item => (
              <option value={item} label={item} key={item}></option>
            ))}
          </select>
        );
      }
    },
    Jumper: {
      data() {
        return {
          userInput: null
        };
      },
      methods: {
        handleKeyup({ keyCode, target }) {
          if (keyCode === 13) {
            this.handleChange(target.value);
          }
        },
        handleInput(e) {
          this.userInput = e.target.value;
        },
        handleBlur(e) {
          this.handleChange(e.target.value);
        },
        handleChange(value) {
          this.$parent.internalCurrentPage = this.$parent.getValidCurrentPage(
            value
          );
          this.$parent.emitChange();
          this.userInput = null;
        }
      },
      render(h) {
        return (
          <span>
            前往第
            <input
              class="gd-pagination-input"
              onkeydown={this.handleKeyup}
              onInput={this.handleInput}
              onblur={this.handleBlur}
              value={
                this.userInput != null
                  ? this.userInput
                  : this.$parent.internalCurrentPage
              }
            />
            页
          </span>
        );
      }
    },
    Pagers: {
      render(h) {
        return (
          <ul class="gd-pager">
            {this.$parent.pagers.map(item => (
              <li>
                <a
                  on-click={this.$parent.toPage.bind(this, item)}
                  class={this.$parent.currentPage == item ? "active" : ""}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        );
      }
    },
    Prev: {
      render(h) {
        return (
          <button
            disabled={this.$parent.internalCurrentPage <= 1}
            on-click={this.$parent.prePage}
          >
            {this.$parent.prevText ? (
              <span>{this.$parent.prevText}</span>
            ) : (
              <i class="gd-icon gd-icon-up2"></i>
            )}
          </button>
        );
      }
    },
    Next: {
      render(h) {
        return (
          <button
            disabled={
              this.$parent.internalCurrentPage ===
              this.$parent.internalPageCount
            }
            on-click={this.$parent.nextPage}
          >
            {this.$parent.nextText ? (
              <span>{this.$parent.nextText}</span>
            ) : (
              <i class="gd-icon gd-icon-down2"></i>
            )}
          </button>
        );
      }
    }
  },
  watch: {
    currentPage: {
      immediate: true,
      handler(val) {
        this.internalCurrentPage = val;
      }
    },
    pageSize: {
      immediate: true,
      handler(val) {
        this.internalPageSize = val;
      }
    },
    internalPageCount(newVal) {
      let oldPage = this.internalCurrentPage;
      if (oldPage > newVal) {
        this.internalCurrentPage = newVal;
        this.emitChange();
      }
      // const oldPage = this.internalCurrentPage;
    },
    internalCurrentPage: {
      immediate: true,
      handler(newVal) {
        this.$emit("update:currentPage", newVal);
      }
    },
    pageSizes: {
      immediate: true,
      handler(newVal, oldVal) {
        this.internalPageSize =
          newVal.indexOf(this.pageSize) > -1
            ? this.pageSize
            : this.pageSizes[0];
        this.$emit("update:pageSize", this.internalPageSize);
      }
    }
  },
  computed: {
    internalPageCount() {
      let newNum = Math.ceil(this.total / this.internalPageSize);
      return newNum;
    },
    pagers() {
      let newNum = Math.ceil(this.total / this.internalPageSize);
      let newArr = [];
      for (let i = 0; i < newNum; i++) {
        newArr.push(i + 1);
      }
      return newArr;
    }
  },

  methods: {
    changeSizes(e) {
      let val = e.target.value;
      this.internalPageSize = parseInt(val);
      this.$emit("update:pageSize", this.internalPageSize);
      this.$emit("size-change", this.internalPageSize);
    },
    prePage() {
      this.internalCurrentPage--;
      this.emitChange();
    },
    nextPage() {
      const newVal = this.internalCurrentPage + 1;
      this.internalCurrentPage = newVal;
      this.emitChange();
    },
    toPage(index) {
      this.internalCurrentPage = index;
      this.emitChange();
    },
    toPages(e) {
      this.internalCurrentPage = e.target.value;
      this.emitChange();
    },
    emitChange() {
      this.$emit("update:currentPage", this.internalCurrentPage);
      this.$emit("current-change", this.internalCurrentPage);
    },
    getValidCurrentPage(value) {
      value = parseInt(value, 10);
      const havePageCount = typeof this.internalPageCount === "number";
      let resetValue;
      if (!havePageCount) {
        if (isNaN(value) || value < 1) resetValue = 1;
      } else {
        if (value < 1) {
          resetValue = 1;
        } else if (value > this.internalPageCount) {
          resetValue = this.internalPageCount;
        }
      }

      if (resetValue === undefined && isNaN(value)) {
        resetValue = 1;
      } else if (resetValue === 0) {
        resetValue = 1;
      }

      return resetValue === undefined ? value : resetValue;
    }
  }
};
</script>