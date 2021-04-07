<template>
  <div id="about">
    <div
      id="directory"
      class="text-light p-2 position-fixed border-start border-info"
    >
      <span class="text-secondary">const </span>sammy
      <span class="text-info">= </span>
      <span class="text-warning">{</span>
      <br />
      <span class="ps-4 text-success">about</span>
      <span class="text-info">: </span>
      <a>about</a>,
      <br />
      <span class="ps-4 text-success">education</span>
      <span class="text-info">: </span>
      <a>education</a>,
      <br />
      <span class="ps-4 text-success">experience</span>
      <span class="text-info">: </span>
      <a>experience</a>,
      <br />
      <span class="ps-4 text-success">skills</span>
      <span class="text-info">: </span>
      <a>skills</a>,
      <br />
      <span class="ps-4 text-success">projects</span>
      <span class="text-info">: </span>
      <a>projects</a>,
      <br />
      <span class="text-warning">}</span>
      <span class="text-info">;</span>
      <br />
    </div>
    <div
      id="directory-toggle"
      class="position-fixed start-50 text-light mt-3 pt-1 px-3 translate-middle"
    >
      <i
        id="closeDirectory"
        class="fas fa-chevron-up"
        @click="closeDirectory"
      ></i>
      <i
        id="openDirectory"
        class="fas fa-chevron-down"
        @click="openDirectory"
      ></i>
    </div>
    <div class="heading p-5 text-light">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Hi, I'm Sammy.</h1>
        <p class="heading-text col-md-8 fs-4">
          Not gonna lie, this personal website/ portfolio is really fun to make.
          This page is essentially my resume.
        </p>
      </div>
    </div>
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

<script>
export default {
  setup() {
    const closeDirectory = () => {
      document.getElementById('directory').style.marginTop = '-250px';
      document.getElementById('openDirectory').style.display = 'inline-block';
      document.getElementById('closeDirectory').style.display = 'none';
    };

    const openDirectory = () => {
      document.getElementById('directory').style.marginTop = '0px';
      document.getElementById('closeDirectory').style.display = 'inline-block';
      document.getElementById('openDirectory').style.display = 'none';
    };

    window.addEventListener('resize', (event) => {
      if (event.path[0].innerWidth > 775) {
        document.getElementById('directory').style.marginTop = '0px';
      } else {
        closeDirectory();
      }
    });

    return { closeDirectory, openDirectory };
  },
};
</script>

<style lang="scss" scoped>
#directory {
  background-color: rgba($color: black, $alpha: 0.5);
  top: 80px;
  right: 20px;
}

#directory-toggle {
  display: none;
}

#closeDirectory {
  display: none;
}

.heading {
  background-image: url('../assets/about.jpeg');
  background-size: cover;
  background-position: center;
  height: 93vh;
}

@media only screen and (max-width: 775px) {
  #directory {
    background-color: rgba($color: black, $alpha: 0.8);
    top: 50px;
    margin-top: -250px;
    right: 0;
    width: 100%;
    transition: margin-top 0.5s;
  }

  #directory-toggle {
    display: inline;
  }
}
</style>
