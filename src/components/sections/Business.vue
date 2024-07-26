<template>
  <div
    id="business"
    class="service-view flex flex-col md:flex-row items-center justify-between mx-auto md:mt-32 mt-16 w-full md:gap-24 gap-8 px-auto"
  >
    <div class="md:service-img w-3/4 md:w-1/3">
      <img src="../../assets/images/business.svg" alt="" />
    </div>
    <div class="md:w-1/2 px-8">
      <h1 class="text-title text-[2rem] font-semibold mb-4 text-secondary-300">
        Business Visa
      </h1>
      <p class="mb-6 text-secondary-200">
        Business visa allows foreign nationals to do business in Nigeria. Visas
        can be obtained from Nigeria embassies however, for the ease of doing
        business in Nigeria, foreign nationals can now opt for Visa on Arrival.
        Foreign nationals on business visa are not permitted to work in Nigeria.
        Business visa services include:
      </p>
      <div class="service-list">
        <ul class="flex flex-col gap-4 text-secondary-200">
          <li class="flex gap-4 items-center">
            <PhCheck />
            Documentation process
          </li>
          <li class="flex gap-4 items-center">
            <PhCheck />
            Processing Visa on Arrival approval
          </li>
          <li class="flex gap-4 items-center">
            <PhCheck />
            Extension of stay on business and visitor visas
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
import {PhCheck} from "@phosphor-icons/vue";
</script>
