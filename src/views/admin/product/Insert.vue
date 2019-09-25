<template>
  <div class="container">
    <h1>Product Insert</h1>
    <form method="post">
      <div class="form-group row">
        <label for="name" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="name" v-model="formSubmitData.name">
        </div>
      </div>
      <div class="form-group row">
        <label for="address" class="col-sm-2 col-form-label">Address</label>
        <div class="col-sm-10">
          <textarea id="address" class="form-control" cols="30" rows="10" v-model="formSubmitData.address"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <label for="image" class="col-sm-2 col-form-label">Image</label>
        <div class="col-sm-10">
          <input type="file" id="image">
        </div>
      </div>
      <div class="form-group row">
        <button type="button" class="btn btn-danger">Cancel</button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      formSubmitData: {
        name: '',
        address: ''
      }
    }
  },
  method () {
    
  }
}
</script>