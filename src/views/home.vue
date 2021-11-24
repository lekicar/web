<template>
  <div class="home">
    <Navigation></Navigation>
    <main>
      <header class="hader-image hader-hero">
        <div class="home-content">
          <div class="hero-body">
            <div class="hero-title">
              <p>leki智能车控，</p>
              <p>一键开启智能用车时代。</p>
            </div>
            <div class="hero-detail">数字钥匙 / 多重加密 / 远程共享 / 多款车型</div>
            <el-button class="hero-btn" type="primary">立即下载</el-button>
          </div>
        </div>
      </header>
      <section class="device-feature-box"> 
        <div class="home-content">
          <div class="device-feature">
            <div class="feature-media">
              <img src="../../public/assets/img/common/device_main.png" alt="" />
              <p>Leki智能钥匙实拍图</p>
            </div>
            <div class="feature-right">
              <div class="feature-content">
                <p class="feature-annotation">THE NEW CHAPTER</p>
                <p class="feature-title">Leki，智能用车新篇章。</p>
                <div class="divider"></div>
              </div>
              <div class="feture-nav">
                <div class="nav-item">
                  <div class="item-container">
                    <img src="../../public/assets/img/common/lock.png" alt="" />
                  </div>
                  <span>一键解锁</span>
                </div>
                <div class="nav-item">
                  <div class="item-container">
                    <img src="../../public/assets/img/common/security.png" alt="" />
                  </div>
                  <span>多重保障</span>
                </div>
                <div class="nav-item">
                  <div class="item-container">
                    <img src="../../public/assets/img/common/ble_icon.png" alt="" />
                  </div>
                  <span>接近感应</span>
                </div>
                <div class="nav-item">
                  <div class="item-container">
                    <img src="../../public/assets/img/common/long_distance.png" alt="" />
                  </div>
                  <span>车辆共享</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="device-introduce-box">
        <div class="home-content">
          <div>
            <img src="../../public/assets/img/common/use_car.png" alt="">
          </div>
          <div>

          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import Vuex from '@/views/vuex.vue'

export default defineComponent({
  name: 'home',
  components: {},
  setup() {
    const state = reactive({
      loading: false
    })
    onMounted(() => {
      console.log('onMounted')
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>
<style lang="scss" scoped>
@import '@/style/mixin.scss';

.hader-hero {
  padding-bottom: 24px;
  position: relative;
  text-align: center;
}

.hader-image {
  align-items: center;
  // background-image: url(https://www.firefox.com.cn/media/img/l10n/zh-CN/firefox/home/quantum/product.9e5516fffe1f.svg);
  background-image: url('../../public/assets/img/common/home_banner.png');
  background-position: right 0px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  min-height: 789px;
  text-align: left;
  box-sizing: border-box;
  color: #fff;
}

@media screen and (min-width: 768px) {
  .hader-hero {
    width: 100%;
  }
}

@media screen and (min-width: 1056px) {
  .hader-hero {
    padding: 48px 0;
  }
}

/** ---------------------------------------------------------------- */

.home-content {
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  zoom: 1;
  margin: 0 auto;
  max-width: 1420px;
  min-width: 304px;
  padding: 24px;
  position: relative;
  max-width: 400px;
}

@media screen and (min-width: 768px) {
  .home-content {
    width: 100%;
    padding: 24px 64px;
    max-width: 1420px;
  }
}

@media screen and (min-width: 1056px) {
  .home-content {
    padding: 24px 96px;
  }
}

/** ---------------------------------------------------------------- */

.hero-body {
  margin: 0 auto;
  max-width: 594px;
}

@media screen and (min-width: 768px) {
  .hero-body {
    margin-right: 50%;
    margin-left: 0;
  }
}

/** ---------------------------------------------------------------- */

.hero-title {
  font-size: 50px;
  line-height: 1.1;
  font-weight: 700;
  margin-bottom: 50px;
  p {
    margin-bottom: 24px;
  }
}

@media screen and (min-width: 768px) {
  .hero-title {
    font-size: 60px;
  }
}

.hero-detail {
  font-size: 18px;
  line-height: 27px;
  font-family: Source Han Sans CN;
  margin-bottom: 60px;
}

/** ---------------------------------------------------------------- */

.hero-btn {
  display: block;
  margin: 0 auto;
  min-width: 129px;
  background: linear-gradient(270deg, #007fc1 0%, #0093df 100%);
  border-color: transparent;
}

@media screen and (min-width: 768px) {
  .hero-btn {
    margin: 0;
  }
}

/** ---------------------------------------------------------------- */
.device-feature-box {
  padding: 80px 0;
}

.device-feature {
  margin: 0 auto 32px;
  text-align: center;
}

@media screen and (min-width: 768px) {
  .device-feature {
    position: relative;
    display: grid;
    zoom: 1;
    max-width: none;
    margin-bottom: 96px;
    column-gap: 50px;
    grid-column-gap: 50px;
    grid-template-columns: 1fr 2fr;
  }
}

@media screen and (min-width: 1056px) {
  .device-feature {
    column-gap: 100px;
    grid-column-gap: 100px;
  }
}

.feature-media {
  width: 236px;
  height: 331px;
  background: #e7edf0;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 14px;
    color: #8f9699;
  }
  img {
    width: 100%;
    max-width: 136px;
    margin-bottom: 32px;
  }
}

@media screen and (min-width: 1056px) {
  .feature-media {
    width: 355px;
    height: 497px;
    border-radius: 24px;
    img {
      width: 100%;
      max-width: 205px;
      margin-bottom: 48px;
    }
  }
}

.feature-right {
  .feature-content {
    text-align: left;
    margin-bottom: 105px;
    .feature-annotation {
      font-size: 16px;
      font-family: Helvetica;
      color: #1c2023;
      margin-bottom: 22px;
    }
    .feature-title {
      font-size: 48px;
      font-weight: 500;
      color: #1c2023;
      margin-bottom: 19px;
    }
    .divider {
      width: 51px;
      height: 5px;
      background: #000000;
      border: 1px solid #000000;
    }
  }
  .feture-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nav-item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .item-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 104px;
        height: 104px;
        background: #f2f7f9;
        border-radius: 26px;
        margin-bottom: 18px;
        img {
          width: 56px;
        }
      }
      span {
        font-size: 16px;
        color: #1c2023;
      }
    }
  }
}
</style>
