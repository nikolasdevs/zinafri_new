<template>
  <div
    id="quota"
    class="service-view flex flex-col md:flex-row items-center justify-between mx-auto md:mt-32 mt-16 w-full md:gap-24 gap-8 px-auto"
  >
    <div class="md:service-img w-3/4 md:w-1/3">
      <img src="../../assets/images/startup.svg" alt="" />
    </div>
    <div class="md:w-1/2 px-8">
      <h1 class="text-title text-[2rem] font-semibold mb-4 text-secondary-300">
        Quota Management
      </h1>
      <p class="mb-6 text-secondary-200">
        Quota management typically refers to the regulation and control of the
        number of foreign nationals allowed to enter, work, or reside in Nigeria
        within specific categories or sectors. Quota management involves setting
        limits or quotas on the number of foreign workers, immigrants, or
        expatriates permitted to work or reside in Nigeria. Quota services
        include:
      </p>
      <div class="service-list">
        <ul class="flex flex-col gap-4 text-secondary-200">
          <li class="flex gap-4 items-center">
            <PhCheck />
            Processing establishment grant of quota positions
          </li>
          <li class="flex gap-4 items-center">
            <PhCheck />
            Processing of business permits
          </li>
          <li class="flex gap-4 items-center">
            <PhCheck />

            Filing of monthly quota returns
          </li>

          <li class="flex gap-4 items-center">
            <PhCheck />
            Processing of additional and renewal of quota positions
          </li>
          <li class="flex gap-4 items-center">
            <PhCheck />
            Deletion of expatriate from quota
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
import {PhCheck} from "@phosphor-icons/vue";
</script>
