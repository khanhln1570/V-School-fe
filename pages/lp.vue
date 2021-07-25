<template>
  <div>
    <v-container>
      <div class="home-page">
        <div class="d-flex justify-space-between">
          <v-img>
            <img src="../assets/images/login/bg-login-logo.svg" />
          </v-img>
          <v-list>
            <v-list-item v-for="([icon, text], i) in items" :key="i" link>
              <v-list-item-icon>
                <v-icon>{{ icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
        <div>
          <v-row align="center" justify="center">
            <v-col class="d-flex justify-space-around" cols="12" md="7" xl="6">
              <v-img max-height="600">
                <img src="../assets/images/app-info-img.png" />
              </v-img>
            </v-col>
            <v-col cols="12" md="5" xl="6">
              <h1 class="display-2 mb-4">Hotio harum</h1>
              <h3 class="font-weight-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                porro voluptatibus delectus nam optio harum! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Maiores porro
                voluptatibus delectus nam optio harum!
              </h3>
              <v-btn class="mt-5" color="primary" elevation="2"
                >Let's start</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>

    <div class="services-page">
      <v-container class="text-center">
        <div class="d-flex justify-space-around white--text">
          <h1 class="display-2 mt-16">Services</h1>
        </div>
        <div class="d-flex justify-center">
          <v-row class="mt-16 d-flex justify-center">
            <v-col class="" md="4" xl="4">
              <img src="../assets/images/schoolAvatar.svg" />
              <p class="white--text mt-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                ipsum officiis eligendi ab cupiditate necessitatibus officia
                praesentium recusandae .
              </p>
            </v-col>
            <v-col class="" md="4" xl="4">
              <img src="../assets/images/schoolAvatar.svg" />
              <p class="white--text mt-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                ipsum officiis eligendi ab cupiditate necessitatibus officia
                praesentium recusandae .
              </p>
            </v-col>
            <v-col class="" md="4" xl="4">
              <img src="../assets/images/schoolAvatar.svg" />
              <p class="white--text mt-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
                ipsum officiis eligendi ab cupiditate necessitatibus officia
                praesentium recusandae .
              </p>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>

    <div class="introduce-page">
      <v-container>
        <div src="../assets/images/app-info-img.png" height="">
          <v-row align="center" justify="center">
            <v-col cols="12" md="5" xl="6">
              <h1 class="display-2 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h1>
              <h3 class="font-weight-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                porro voluptatibus delectus nam optio harum! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Maiores porro
                voluptatibus delectus nam optio harum!
              </h3>
              <v-btn class="mt-5" color="primary" elevation="2">More</v-btn>
            </v-col>
            <v-col class="d-flex justify-space-around" cols="12" md="7" xl="6">
              <v-img max-height="600" max-width="500">
                <img src="../assets/images/app-info-img.png" />
              </v-img>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>

    <v-container class="customer-page text-center">
      <h1 class="display-2 mt-16 mb-16">Out Customer</h1>
      <v-row class="d-flex justify-center">
        <v-col>
          <img src="../assets/images/parentAvatar.svg" />
        </v-col>
        <v-col>
          <img src="../assets/images/parentAvatar.svg" />
        </v-col>
        <v-col>
          <img src="../assets/images/parentAvatar.svg" />
        </v-col>
        <v-col>
          <img src="../assets/images/parentAvatar.svg" />
        </v-col>
      </v-row>
    </v-container>

    <div class="video text-center">
      <v-container>
        <h1 class="display-2 mt-16 mb-16">Outro</h1>
        <video class="" width="900" controls>
          <source src="mov_bbb.mp4" type="video/mp4" />
          <source src="mov_bbb.ogg" type="video/ogg" />
          Your browser does not support HTML video.
        </video>
        <h3 class="mt-5 font-weight-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          culpa dolor asperiores.
        </h3>
      </v-container>
    </div>

    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vschool</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
    items: [
      ["mdi-account-supervisor-circle", "Home"],
      ["mdi-menu", "Menu"],
    ],
  }),
};
</script>

<style scoped>
.home-page {
  height: 100vh;
}

.services-page {
  background-color: #2c6aa2;
  height: 70vh;
}

.introduce-page {
  height: 100vh;
  border-bottom: solid gray 1px;
}

.customer-page {
  height: 60vh;
}

.video {
  background: rgb(202, 228, 255);
  background: linear-gradient(
    0deg,
    rgba(202, 228, 255, 1) 50%,
    rgba(0, 72, 142, 1) 100%
  );
}
</style>>
