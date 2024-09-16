<template>
  <div
    id="training"
    class="service-view flex flex-col md:flex-row items-center justify-between mx-auto md:mt-32 mt-16 w-full md:gap-24 gap-8 px-auto"
  >
    <div class="md:service-img w-3/4 md:w-1/3">
      <img src="../../assets/images/training.svg" alt="" />
    </div>
    <div class="md:w-1/2 px-8 w-full">
      <h1 class="text-title text-[2rem] font-semibold mb-4 text-secondary-300">
        training
      </h1>
      <p class="mb-6 text-secondary-200" >
        Zinafri provides trainings and workshops for individuals, professionals
        or organizations to provide them with comprehensive knowledge and skills
        related to immigration laws, policies, procedures, and practices.
      </p>
      <div class="service-list">
        <ul class="flex flex-col gap-4 text-secondary-200">
          <li class="flex gap-4 items-center">
            <PhCheck />
            Periodic training on expatriate immigration processes
          </li>
          <li class="flex gap-4 items-center">
            <PhCheck />
            Country briefing
          </li>
          <li class="flex gap-4 items-center">
            <PhCheck />
            Arrival and departure briefing
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
import {PhCheck} from "@phosphor-icons/vue";
</script>
