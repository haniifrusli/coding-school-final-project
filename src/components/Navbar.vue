<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">
      <img src="@/assets/logo/logo-zilingo.png" height="30" alt="">
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">WOMEN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">MEN</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">KIDS</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0 col">
        <div class="input-group col">
          <input type="text" class="form-control" placeholder="Search Products...">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>
        </div>
      </form>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#"><img src="@/assets/icon/shopping-cart.svg" alt="" srcset=""></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
      </ul>
    </div>
  </nav>
</template>