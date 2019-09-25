<template>
  <section class="container">
    <div class="row">
      <div class="col-12 col-lg-8">
        <div class="home-banner-large">
          <img src="@/assets/img/banner-large-1.jpg" alt="">
          <div class="banner-overlay">
              <div class="banner-contents">
                <div class="banner-title">LOUIS VUITTON</div>
                <div class="banner-subtitle">Sneaker Archlight</div>
                <router-link to="/product/detail" class="btn-base banner-btn">Buy Now</router-link>
              </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4">
          <div class="row">
            <div class="col-6 col-lg-12">
              <a href="#" class="home-banner-large">
                <img src="@/assets/img/banner-small-1.jpg" alt="">
              </a>
            </div>
            <div class="col-6 col-lg-12">
              <a href="#" class="home-banner-large">
                <img src="@/assets/img/banner-small-2.jpg" alt="">
              </a>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
  @import '@/assets/style/_banner.scss';
  // @import '@/assets/style/base.scss';
  .container {
    margin-top: 10px;
  }
</style>