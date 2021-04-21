<template>
  <div
    id="directory"
    class="text-light p-3 position-fixed border-start border-info border-5"
  >
    <span class="text-secondary">const </span>
    <a href="#heading" class="text-light text-decoration-underline">sammy</a>
    <span class="text-info"> = </span>
    <span class="text-warning">{</span>
    <br />
    <span class="ps-4 text-success">about</span>
    <span class="text-info">: </span>
    <a href="#summary" class="text-light text-decoration-underline">about</a>,
    <br />
    <span class="ps-4 text-success">education</span>
    <span class="text-info">: </span>
    <a href="#education" class="text-light text-decoration-underline"
      >education</a
    >,
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
    class="position-fixed start-50 text-light mt-4 translate-middle"
  >
    <i
      id="closeDirectory"
      class="fas fa-chevron-up fa-lg text-info"
      @click="closeDirectory"
    ></i>
    <i
      id="openDirectory"
      class="fas fa-chevron-down fa-lg text-info"
      @click="openDirectory"
    ></i>
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

    window.addEventListener('scroll', (event) => {
      if (event.path[1].innerWidth < 775) {
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
