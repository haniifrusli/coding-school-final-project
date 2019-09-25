<template>
  <section>
    <div class="container">
      <h1>Customer List</h1>
      <table class="table">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
          <th scope="col" colspan="2">Action</th>
        </tr>
        <tr v-for="(customersRow, index) in customers" :key="index">
          <td v-text="customersRow.name"></td>
          <td v-text="customersRow.address"></td>
          <td><router-link :to="'/admin/product/update/'+customersRow.id"><button class="btn btn-info">Edit</button></router-link></td>
          <td><a href="#" class="btn btn-danger">Delete</a></td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      customers: [
        {
          name: 'Binus Kemanggisan',
          address: 'JL. Kemanggisan'
        },
        {
          name: 'Binus Alam Sutera',
          address: 'Alam Sutera, Tangerang'
        }
      ]
    }
  },
  created () {
    this.getData()
  },
  methods: {
    
  }
}
</script>