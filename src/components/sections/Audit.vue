<template>
  <div
    id="audit"
    class="service-view flex flex-col md:flex-row items-center justify-between mx-auto md:mt-32 mt-16 w-full md:gap-24 gap-8 px-auto"
  >
  <div class="md:service-img w-3/4 md:w-1/3 md:hidden">
      <img src="../../assets/images/business-two.svg" alt="" />
    </div>
    <div class="md:w-1/2 px-8">
      <h1 class="text-title text-[2rem] font-semibold mb-4 text-secondary-300">Immigration Audit</h1>
      <p class="mb-6 text-secondary-200">
        Business visa allows foreign nationals to do business in Nigeria. Visas
        can be obtained from Nigeria embassies however, for the ease of doing
        business in Nigeria, foreign nationals can now opt for Visa on Arrival.
        Foreign nationals on business visa are not permitted to work in Nigeria.
        Audit services include:
      </p>
      <div class="service-list">
        <ul class="flex flex-col gap-4 text-secondary-200">
       <li class="flex gap-4 items-center">
            <PhCheck />
            Routine mock audits
          </li>
         <li class="flex gap-4 items-center">
            <PhCheck />
            Immigration authority audit support
          </li>
         <li class="flex gap-4 items-center">
            <PhCheck />
            Periodic reviews of immigration procedures
          </li>
        </ul>
      </div>
    </div> 
    <div class="md:service-img w-3/4 md:w-1/3 hidden md:block">
      <img src="../../assets/images/business-two.svg" alt="" />
    </div>
  </div>
</template>

<script lang="js" setup>
import {PhCheck} from "@phosphor-icons/vue";
</script>
