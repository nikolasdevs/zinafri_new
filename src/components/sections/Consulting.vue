<template>
  <div
    id="consulting"
    class="service-view flex flex-col md:flex-row items-center justify-between mx-auto md:mt-32 mt-16 w-full md:gap-24 gap-8 px-auto"
  >
    <div class="md:service-img w-3/4 md:w-1/3 md:hidden">
      <img src="../../assets/images/consulting.svg" alt="" />
    </div>
    <div class="md:w-1/2 px-8">
      <h1 class="text-title text-[2rem] font-semibold mb-4 text-secondary-300">
        consulting
      </h1>
      <p class="mb-6 text-secondary-200">
        Zinafri provides Immigration consulting which involves providing
        guidance, advice, and assistance to individuals, families, businesses,
        or organizations
      </p>
      <div class="service-list text-secondary-200">
        <ul class="flex flex-col gap-4">
          <li class="flex gap-4 items-center">
            <PhCheck />
            Advice on immigration regulations in Nigeria
          </li>
          <li class="flex gap-4 items-center">
            <PhCheck />
            Immigration policy development advisory
          </li>
          <li class="flex gap-4 items-center">
            <PhCheck />
            Advice on permit approval processes
          </li>
          <li class="flex gap-4 items-center">
            <PhCheck />
            Pre–assignment mobility advisory services
          </li>
          <li class="flex gap-4 items-center">
            <PhCheck />
            Advise on citizenship-by-investment programs.
          </li>
        </ul>
      </div>
    </div>
    <div class="md:service-img w-3/4 md:w-1/3 hidden md:block">
      <img src="../../assets/images/consulting.svg" alt="" />
    </div>
  </div>
</template>

<script lang="js" setup>
import {PhCheck} from "@phosphor-icons/vue";
</script>
