<template>
  <div class="details">
    <main>
      <Navigation></Navigation>
      <el-affix :offset="550" position="top">
        <div class="service" @click="toWechat" data-clipboard-text="Oazon_Leki">
          <img src="../../public/assets/img/common/service.png" alt="service" />
        </div>
      </el-affix>

      <img src="../../public/assets/img/common/details.png" alt="details" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import { ElMessageBox, ElMessage } from 'element-plus'
import { toDownloadLink } from '@/common/downloadApp'
import { IsPC } from '../utils/equipmentVerify'
import Clipboard from 'clipboard'
export default defineComponent({
  name: 'details',
  components: {},
  setup() {
    const route = useRoute()
    const state = reactive({
      loading: false
    })
    onMounted(() => {
      console.log('onMounted')
      console.log("route", route.query)
      if (route.query.model === 'download') toDownloadLink()
    })
    async function toWechat() {
      const clipboard = new Clipboard('.service')
      let msg = "复制账号成功"
        clipboard.on('success', function (e) {
          e.clearSelection()
          msg = "复制账号成功"
        })
        clipboard.on('error', function (e) {
          e.clearSelection()
          msg = "复制账号失败，请手动添加微信：Oazon_Leki"
        });
      if (IsPC()) {
        await ElMessageBox.confirm('Leki客服微信: Oazon_Leki', '联系客服', {
          confirmButtonText: '点击复制',
          cancelButtonText: '取消',
          type: 'info'
        })

        ElMessage({
          type: 'success',
          message: msg
        })
      } else {
        ElMessage({
          type: 'success',
          message: msg
        })
        window.location.href = 'weixin://dl/business/?t=D7J4yx4jZOh'
      }
    }
    return {
      ...toRefs(state),
      toWechat
    }
  }
})
</script>
<style lang="scss" scoped>
.details {
  main {
    display: block;
    max-width: 1000px;
    margin: 0 auto;
    img {
      width: 100%;
    }
    .service {
      position: absolute;
      right: 15px;
      width: 15px;
      height: 15px;
      background: #0081ee;
      border-radius: 2px;
      padding: 12px;
      cursor: pointer;
    }
    @media screen and (min-width: 768px) {
      .service {
        width: 30px;
        height: 30px;
        right: 30px;
      }
    }
  }
}
</style>
