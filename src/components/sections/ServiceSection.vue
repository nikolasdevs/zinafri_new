<script>
import ServiceCard from "@/components/cards/ServiceCard.vue";
// Import the ServiceCard
//import VueRouter from "vue-router";

// Vue.use(VueRouter);

//import ServiceView from "@/views/service/ServiceView.vue";

export default {
  components: {
    ServiceCard,
    // ServiceView,
  },

  mounted() {
    this.addSmoothScrolling();
  },

  methods: {
    addSmoothScrolling() {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });
    },

    navigateToSection() {
      const sectionID = "";
      this.$router.push("service/" + "#" + sectionID);
    },
  },

  data() {
    return {
      cardData: [
        {
          title: "Quota Management",
          content:
            "Learn about quota system that controls the number of foreign nationals allowed to enter, work, or reside in Nigeria",
          id: "quota",
        },

        {
          title: "Work Authorization",
          content:
            "Learn about work authorization issued that allows foreign nationals to legally work and reside in Nigeria ",
          id: "work-auth",
        },

        {
          title: "Business",
          content:
            "Learn about business visa that allows foreign nationals only do business in Nigeria and allows Visa on Arrival",
          id: "business",
        },

        {
          title: "Audit and Reviews",
          content:
            "A comprehensive review, examination, or assessment carried out to ensure compliance with immigration laws, regulations, and policies",
          id: "audit",
        },

        {
          title: "Training",
          content:
            "Zinafri provides trainings and workshops for individuals and organizations to provide them with knowledge and skills related to immigration laws",
          id: "training",
        },
        {
          title: "Consulting",
          content:
            "Zinafri provides Immigration consulting  which involves providing guidance, advice, and assistance to individuals, families, businesses, or organizations",
          id: "consulting",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="service flex items-center justify-center max-w-6xl mx-auto">
    <div
      class="container flex flex-col md:mt-10 mt-16 items-center justify-center px-4"
    >
      <div>
        <p class="text-header">What we do</p>
      </div>

      <!-- Immigration Services -->

      <div class="flex flex-wrap gap-16 md:gap-12 justify-center mt-8 md:mt-16">
        <div v-for="(card, index) in cardData" :key="index">
          <ServiceCard :title="card.title" :content="card.content">
            <!-- Additional content, if needed -->
          </ServiceCard>
        </div>
        <div class="flex flex-col items-center gap-4 mt-6 text-center">
          <p class="text-2xl font-semibold text-secondary-200">
            High-class specialists are ready to help you at any time!
          </p>
          <p class="text-base text-secondary-200">
            Are you interested in immigrating, or are you just a creative
            looking to collaborate? Get in touch with us.
          </p>
          <a
            href="#supportSection"
            class="bg-sky-400 hover:bg-sky-500 text-white px-10 py-6 rounded-full text-sm mt-8 font-bold w-full md:w-2/5"
          >
            <button>Free Consultation</button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
