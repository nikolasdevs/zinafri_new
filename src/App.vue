<script>
import FooterSection from "./components/sections/FooterSection.vue";

export default {
  data() {
    return {
      isMenuOpen: false,
      headerBgColor: "transparent",
      position: "absolute",
      lastPosition: 0,
    };
  },

  methods: {
    ////////////////////// SCROLL EVENT  /////////////////////////////////

    handleScroll() {
      let currentPosition = window.scrollY;
      if (currentPosition > this.lastPosition) {
        this.headerBgColor = "white";
        this.position = "fixed";
      } else {
        this.headerBgColor = "transparent";
      }
    },

    ////////////////////// TOGGLE THE MENU  /////////////////////////////////

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      //close menu after clicking the link
    },

    scrollToFooter() {
      document
        .getElementById("footerSection")
        .scrollIntoView({ behavior: "smooth" });
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
        scrollLeft: 0,
        scrollTop: 0,
      });
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  components: { FooterSection },
};
</script>

<template>
  <header>
    <div
      class="text-sky-400 p-4 sticky shadow-md top-0 w-full z-50"
      id="headerSection"
      :style="{ backgroundColor: headerBgColor, position: position }"
    >
      <div class="container mx-auto flex flex-col justify-between items-start">
        <div class="md:hidden flex cursor-pointer" @click="toggleMenu">
          <span v-if="isMenuOpen"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6 text-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </span>
          <span v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </div>

        <transition class="md:hidden flex cursor-pointer" name="slide">
          <div
            class="menu menu-open rounded-full h-64 items-center justify-center opacity-95 ms-4"
            v-if="isMenuOpen"
          >
            <div class="flex flex-col gap-8 items-center">
              <router-link
                :to="{ name: 'Home' }"
                class="hover:text-sky-500 font-semibold"
                @click.native="
                  () => {
                    toggleMenu();
                    scrollToTop();
                  }
                "
                >HOME</router-link
              >
              <router-link
                :to="{ name: 'Service' }"
                class="hover:text-sky-500 font-semibold"
                @click.native="
                  () => {
                    toggleMenu();
                    scrollToTop();
                  }
                "
                >SERVICES</router-link
              >
              <a
                :to="{ name: 'Contact' }"
                class="hover:text-sky-500 font-semibold"
                @click.native="
                  () => {
                    toggleMenu();
                    scrollToFooter();
                  }
                "
                href="#footerSection"
                >CONTACT</a
              >
              <a
                :to="{ name: 'Contact' }"
                class="hover:text-sky-500 font-semibold"
                @click.native="
                  () => {
                    toggleMenu();
                    scrollToFooter();
                  }
                "
                href="#footerSection"
                >TRAVEL BLOG</a
              >
            </div>
          </div>
        </transition>

        <div class="w-8 md:w-20 md:flex hidden items-center justify-center">
          <router-link :to="{ name: 'Home' }"
            ><img src="/src/assets/images/logo.png" alt="logo"
          /></router-link>
          <!-- <a href=""></a> -->
        </div>

        <div class="hidden md:flex gap-10" id="nav">
          <router-link
            :to="{ name: 'Home' }"
            @click.native="scrollToTop"
            class="font-semibold after relative"
            >HOME</router-link
          >
          <router-link
            :to="{ name: 'Service' }"
            class="font-semibold after relative"
            >SERVICES</router-link
          >
          <a
            class="font-semibold after relative"
            @click.native="scrollToFooter"
            href="#footerSection"
            >CONTACT</a
          >
        </div>

        <div class="gap-4 hidden md:flex">
          <a class="font-semibold" href="#">TRAVEL BLOG</a>
        </div>
      </div>
    </div>
    <router-view />
  </header>
  <FooterSection />
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transform: translateX(-100%);
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}

header {
  transition: background-color 0.3s ease;
}
</style>
