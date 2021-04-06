<template>
  <div id="about">
    <div class="heading p-5 bg-dark text-light">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Custom jumbotron</h1>
        <p class="col-md-8 fs-4">
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples
          below for how you can remix and restyle it to your liking.
        </p>
        <button class="btn btn-primary btn-lg" type="button">
          Example button
        </button>
      </div>
    </div>
    <div class="summary"></div>
  </div>
</template>

<style lang="scss" scoped>
.heading {
  background-image: url('../assets/about.jpeg');
  background-size: fixed;
  background-position: center;
  height: 93vh;
}
</style>
