<script setup>
import Quota from "../../components/sections/Quota.vue";
import Work from "../../components/sections/Work.vue";
import Business from "../../components/sections/Business.vue";
import Audit from "../../components/sections/Audit.vue";
import Training from "../../components/sections/Training.vue";
import Consulting from "../../components/sections/Consulting.vue";
</script>

<template id="serviceViews">
  <div class="relative">
    <div class="bg-slate-900 opacity-75 absolute top-0 left-0 right-0 bottom-0">
      <div class="flex items-center justify-center h-full">
        <p
          class="text-white font-bold text-2xl md:text-4xl lg:text-6xl text-secondary md:leading-snug lg:leading-snug sm:w-2/4 px-8"
        >
          Navigate Your Immigration Journey With Our Solutions
        </p>
      </div>
    </div>
    <div>
      <img
        src="/src/assets/images/glenn-carstens-peters-ZWD3Dx6aUJg-unsplash.jpg"
        alt=""
      />
    </div>

    <!--  -->
  </div>

  <div
    class="service flex flex-col items-center justify-center container mx-auto"
    id="serviceView"
  >
    <Quota />
    <Work />
    <Business />
    <Audit />
    <Training />
    <Consulting />

    <div class="w-screen mt-32 flex items-center justify-center flex-col">
      <button
        class="bg-sky-400 hover:bg-sky-500 text-white px-10 py-6 rounded-full text-sm mt-8 tracking-wider font-semibold w-full md:w-2/5"
        type="submit"
      >
        Free Consultation
      </button>

      <img
        class="rotate-180 mt-16"
        src="/src/assets/images/wave (2).svg"
        alt=""
      />
      <!--  -->
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .service {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
