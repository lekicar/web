<template>
  <div class="navigation">
    <div class="navigation-l-content clear">
      <div class="navigation-content clear">
        <button class="navigation-menu-button" @click="switchMenu"></button>
        <div class="navigation-logo">
          <a href="/">Leki</a>
        </div>
        <div class="navigation-items clear" :class="{ 'items-is-open': showMenu }">
          <div class="navigation-download">
            <el-button class="download-leki" @click="toDownloadLink">下载 Leki车控</el-button>
          </div>
          <div class="navigation-menu">
            <nav class="menu">
              <ul class="menu-category-list">
                <li class="menu-category">
                  <span class="menu-title" @click.stop="toLink('/')">首页</span>
                </li>
                <li class="menu-category">
                  <span class="menu-title" @click.stop="toLink('/product')">产品中心</span>
                </li>
                <li class="menu-category" @click.stop="downloadHelp">
                  <span class="menu-title">帮助手册</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import fileDownload from 'js-file-download'
import axios from '../../utils/axios'
import { ElMessage } from 'element-plus'
import { isIos } from '../../utils/equipmentVerify'
import router from '../../router'
export default defineComponent({
  name: 'Navigation',
  components: {},
  setup() {
    const state = reactive({
      loading: false,
      showMenu: false
    })
    onMounted(() => {
      console.log('onMounted')
    })
    function switchMenu() {
      state.showMenu = !state.showMenu
    }
    function downloadHelp() {
      state.showMenu = false
      ElMessage({
        type: 'info',
        message: '此功能暂未开放'
      })
      return
      axios
        .get('./src/views/home.vue', { params: null, responseType: 'arraybuffer' })
        .then((res) => {
          fileDownload(res.data, `测试文件_${new Date().toLocaleString()}.xls`)
        })
    }
    function toLink(link: string) {
      state.showMenu = false
      if (link !== '/') {
        ElMessage({
          type: 'info',
          message: '此功能暂未开放'
        })
        return
      }
      router.push(link)
    }
    function toDownloadLink() {
      state.showMenu = false
      if (isIos()) {
        window.location.href = 'https://itunes.apple.com/cn/app/id1570793242?mt=8'
      } else {
        window.location.href =
          'https://download.bq04.com/apps/60dac7eb0d81cc2e21ab3df0/install?download_token=39b644477d32a9d8de357b761fb3bd16&source=update'
      }
    }
    return {
      ...toRefs(state),
      switchMenu,
      downloadHelp,
      toLink,
      toDownloadLink
    }
  }
})
</script>
<style lang="scss" scoped>
.navigation {
  background: #1f1f1f;
  color: #fff;
}
.navigation .navigation-l-content {
  padding: 24px;
  position: relative;
}
@media screen and (min-width: 768px) {
  .navigation .navigation-l-content {
    padding: 0 64px;
  }
}
@media screen and (min-width: 1056px) {
  .navigation .navigation-l-content {
    padding: 0 96px;
  }
}

/** ---------------------------------------------------------------- */

.navigation-menu-button {
  display: block;
  float: right;
  margin: -4px 0;
  padding: 0 0;
  width: 32px;
  height: 32px;
  overflow: hidden;
  text-indent: 120%;
  white-space: nowrap;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-image: url('../../../public/assets/img/common/menu.svg');
  background-repeat: no-repeat;
  background-color: #ededf0;
  background-position: center center;
}

.navigation-menu-button :hover {
  background-color: #ededf0;
}

@media screen and (min-width: 768px) {
  .navigation-menu-button {
    display: none;
  }
}

/** ---------------------------------------------------------------- */

.navigation .navigation-content {
  margin: 0 auto;
  max-width: 1372px;
}

@media screen and (min-width: 768px) {
  .navigation .navigation-content {
    max-width: 1292px;
  }
}

@media screen and (min-width: 1056px) {
  .navigation .navigation-content {
    max-width: 1228px;
  }
}

/** ---------------------------------------------------------------- */

.navigation-logo {
  float: left;
}

.navigation-logo a {
  background-size: 81px, 27px;
  background-image: url('../../../public/assets/img/common/logo.png');
  height: 27px;
  width: 81px;
  overflow: hidden;
  text-indent: 120%;
  white-space: nowrap;
  background-repeat: no-repeat;
  display: block;
  margin: 0 auto;
}

@media screen and (min-width: 768px) {
  .navigation-logo {
    margin: 24px 16px 24px 0;
  }
  .navigation-logo a {
    margin-top: 6px;
  }
}

/** ---------------------------------------------------------------- */
.navigation-items.items-is-open {
  display: block;
}

.navigation-items {
  display: none;
  clear: both;
  padding-top: 8px;
  .navigation-menu {
    vertical-align: bottom;
    .menu {
      display: block;
      .menu-category {
        cursor: pointer;
      }
      .menu-category-list {
        margin-bottom: 24px;
        .menu-title {
          text-decoration: none;
          align-items: center;
          display: flex;
          font-family: Inter, X-LocaleSpecific, sans-serif;
          font-size: 16px;
          line-height: 40px;
          border-bottom: 1px solid #cdcdd4;
          color: #fff;
          display: block;
          font-weight: 700;
          margin-bottom: 0;
          min-height: 40px;
          padding: 8px 0;
          position: relative;
        }
        .menu-title:before {
          background: url('../../../public/assets/img/common/add.svg') top left no-repeat;
          -webkit-background-size: 20px, 20px;
          background-size: 20px, 20px;
          -webkit-transition: transform 0.1s ease-in-out;
          transition: transform 0.1s ease-in-out;
          content: '';
          height: 20px;
          color: #fff;
          margin-top: -8px;
          position: absolute;
          top: 50%;
          width: 20px;
          right: 8px;
        }
      }
    }
  }
  .navigation-download {
    margin: 32px 0 24px;
    text-align: center;
    .download-leki {
      background-color: transparent;
      // border-color: #0060df;
      color: #fff;
    }
  }
}

@media screen and (min-width: 768px) {
  .navigation-items {
    clear: none;
    padding-top: 0;
    display: block;
    .navigation-menu {
      margin-left: -8px;
      display: inline-block;
      width: auto;
      .menu {
        z-index: 0;
        .menu-category-list {
          zoom: 1;
          margin-bottom: 0;
          padding-top: 24px;
          .menu-category {
            display: inline-block;
            float: left;
            .menu-title {
              border-bottom: none;
              padding: 0 8px 24px;
            }
            .menu-title::before {
              content: none;
            }
          }
        }
      }
    }
    .navigation-download {
      display: block;
      float: right;
      margin: 24px 0 24px 8px;
      height: 44px;
    }
  }
}
</style>
