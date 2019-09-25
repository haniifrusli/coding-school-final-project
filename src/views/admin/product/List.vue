<template>
  <section>
    <div class="container">
      <h1>Product List</h1>
      <table class="table">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Brand</th>
          <th scope="col">Price</th>
          <th scope="col" colspan="2">Action</th>
        </tr>
        <tr v-for="(productDataRow, index) in productData" :key="index">
          <td v-text="productDataRow.name"></td>
          <td><img :src="productDataRow.photo" alt="" width="200px"></td>
          <td v-text="productDataRow.brand"></td>
          <td v-text="productDataRow.price"></td>
          <td><a href="#" class="btn btn-info">Edit</a></td>
          <td><a href="#" class="btn btn-danger">Delete</a></td>
        </tr>
      </table>
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
          name: 'Archlight',
          price: 18000000,
          photo: louisvuitton,
          featured: false,
          color: '#ffffff'
        },
        {
          brand: 'ASICS',
          name: 'Onitsuka Mexico 66',
          price: 1750000,
          photo: asics,
          featured: false,
          color: '#ffffff'
        },
        {
          brand: 'UNDER ARMOUR',
          name: 'Micro G Pursuit',
          price: 1300000,
          photo: underarmour,
          featured: false,
          color: '#ffffff'
        },
        {
          brand: 'JAVA',
          name: 'Seven',
          price: 200000,
          photo: javaseven,
          featured: false,
          color: '#ffffff'
        },
        {
          brand: 'PUMA',
          name: 'Hybrid Netfit Astro',
          price: 1900000,
          photo: pumahybrid,
          featured: true,
          color: '#ee5253'
        },
        {
          brand: 'ADIDAS',
          name: 'Mad Bounce',
          price: 1300000,
          photo: adidasmad,
          featured: true,
          color: '#FF9F43'
        },
        {
          brand: 'ADIDAS',
          name: 'Response',
          price: 1400000,
          photo: adidasresponse,
          featured: true,
          color: '#10AC84'
        },
        {
          brand: 'NIKE',
          name: 'Epic React Flyknit',
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