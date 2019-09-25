<template>
  <section>
    <Navbar/>
      <!-- Product Detail -->
    <div class="container-fluid product-details-block">
      <div class="overlay-bg"></div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-7">
            <img class="product-img" src="@/assets/img/nike-epic-react-flyknit.png" alt="">
          </div>
          <div class="col-12 col-lg-5">
            <div class="product-contents">
              <p class="product-brand">NIKE</p>
              <h1 class="product-name">Epic React Flyknit</h1>
              <p class="product-price">IDR 2.400.000</p>
              <p class="product-desc">
                  Soft to the touch, the Nike Epic Phantom React Flyknit is laces-free for a slip-on style that gets you up and running in no time. A snug, secure, sock-like fit within a breathable Flyknit upper feels as though the Phantom “disappears” as you run.
              </p>
              <!-- <div class="form-group">
                <select class="form-control">
                  <option>40</option>
                  <option>41</option>
                  <option>42</option>
                  <option>43</option>
                </select>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-cta">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg">
            <div class="cta-total d-none d-lg-block ">
              <p class="total-label">TOTAL</p>
              <p class="total-value">IDR 2.400.000</p>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <a href="http://google.com"><button class="btn-base btn-block btn-buy">BUY NOW</button></a>
          </div>
          <!-- <div class="col-6 col-lg-3">
            <button class="btn-base btn-block btn-cart">ADD TO CART</button>
          </div> -->
        </div>
      </div>
    </div>
    <div class="container related-products-block">
      <div class="row">
        <div class="col-12">
          <h2 class="section-title">Latest Products</h2>
        </div>
        <div class="col-6 col-lg-3" v-for="(productDataRow, index) in productData" :key="index">
            <a href="#" class="product-card">
              <div class="product-brand">{{ productDataRow.brand }}</div>
              <img :src="productDataRow.photo" alt="" class="product-img">
              <div class="product-name">{{ productDataRow.nama }}</div>
              <div class="product-price">IDR {{ productDataRow.price }}</div>
            </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import louisvuitton from '@/assets/img/louisvuitton-archlight.png'
import asics from '@/assets/img/asics-onitsuka-tiger.png'
import underarmour from '@/assets/img/underarmour-micro-g-pursuit.png'
import javaseven from '@/assets/img/java-seven.png'
import pumahybrid from '@/assets/img/puma-hybrid-netfit.png'
import adidasmad from '@/assets/img/adidas-mad-bounce.png'
import adidasresponse from '@/assets/img/adidas-response.png'
import niceepic from '@/assets/img/nike-epic-react-flyknit.png'
export default {
  components: {
    Navbar,
    louisvuitton,
    asics,
    underarmour,
    javaseven,
    pumahybrid,
    adidasmad,
    adidasresponse,
    niceepic
  },
  data () {
    return {
      productData: [
        {
          brand: 'LOUIS VUITTON',
          nama: 'Archlight',
          price: 18000000,
          photo: louisvuitton,
          featured: false,
          color: '#ffffff'
        },
        {
          brand: 'ASICS',
          nama: 'Onitsuka Mexico 66',
          price: 1750000,
          photo: asics,
          featured: false,
          color: '#ffffff'
        },
        {
          brand: 'UNDER ARMOUR',
          nama: 'Micro G Pursuit',
          price: 1300000,
          photo: underarmour,
          featured: false,
          color: '#ffffff'
        },
        {
          brand: 'JAVA',
          nama: 'Seven',
          price: 200000,
          photo: javaseven,
          featured: false,
          color: '#ffffff'
        },
        {
          brand: 'PUMA',
          nama: 'Hybrid Netfit Astro',
          price: 1900000,
          photo: pumahybrid,
          featured: true,
          color: '#ee5253'
        },
        {
          brand: 'ADIDAS',
          nama: 'Mad Bounce',
          price: 1300000,
          photo: adidasmad,
          featured: true,
          color: '#FF9F43'
        },
        {
          brand: 'ADIDAS',
          nama: 'Response',
          price: 1400000,
          photo: adidasresponse,
          featured: true,
          color: '#10AC84'
        },
        {
          brand: 'NIKE',
          nama: 'Epic React Flyknit',
          price: 2500000,
          photo: niceepic,
          featured: true,
          color: '#2E86DE'
        },
      ]
    }
  }
}
</script>
<style lang="scss">
  @import '@/assets/style/_detailProduct.scss';
</style>