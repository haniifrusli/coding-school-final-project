<template>
  <!--FEATURED PRODUCTS-->
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="section-title">Featured Products</h2>
        </div>
        <div class="col-6 col-lg-3" v-for="(productDataRow, index) in productData" :key="index">
            <div v-if="productDataRow.featured">
              <router-link to="/product/detail" class="product-card featured-card" v-bind:style="{ 'background-color': productDataRow.color }">
                <div class="product-brand">{{ productDataRow.brand }}</div>
                <img :src="productDataRow.photo" alt="" class="product-img">
                <div class="product-name">{{ productDataRow.nama }}</div>
                <div class="product-price">IDR {{ productDataRow.price }}</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!--LATEST PRODUCTS-->
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="section-title">Latest Products</h2>
          </div>
          <div class="col-6 col-lg-3" v-for="(productDataRow, index) in productData" :key="index">
              <router-link to="/product/detail" class="product-card">
                <div class="product-brand">{{ productDataRow.brand }}</div>
                <img :src="productDataRow.photo" alt="" class="product-img">
                <div class="product-name">{{ productDataRow.nama }}</div>
                <div class="product-price">IDR {{ productDataRow.price }}</div>
              </router-link>
          </div>
        </div>
      </div>
  </section>
</template>
<script>
import louisvuitton from '@/assets/img/louisvuitton-archlight.png'
import asics from '@/assets/img/asics-onitsuka-tiger.png'
import underarmour from '@/assets/img/underarmour-micro-g-pursuit.png'
import javaseven from '@/assets/img/java-seven.png'
import pumahybrid from '@/assets/img/puma-hybrid-netfit.png'
import adidasmad from '@/assets/img/adidas-mad-bounce.png'
import adidasresponse from '@/assets/img/adidas-response.png'
import niceepic from '@/assets/img/nike-epic-react-flyknit.png'
export default {
  components : {
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
  @import '@/assets/style/_product.scss';
</style>