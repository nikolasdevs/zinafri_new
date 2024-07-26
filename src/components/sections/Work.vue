<template>
  <div
    id="work"
    class="service-view flex flex-col md:flex-row items-center justify-between mx-auto md:mt-32 mt-16 w-full md:gap-24 gap-8 px-auto"
  >
     <div class="md:service-img w-3/4 md:w-1/3 md:hidden">
      <img src="../../assets/images/work.svg" alt="" />
    </div>
    <div class="md:w-1/2 px-8">
      <h1 class="text-title text-[2rem] font-semibold mb-4 text-secondary-300">Work Authorization</h1>
      <p class="mb-6 text-secondary-200">
        In Nigeria, a work permit is a legal document or authorization that
        allows foreign nationals to legally work and reside in the country for a
        specific period. It is a mandatory requirement for foreign nationals who
        wish to engage in employment or business activities within Nigeria. Work
        authorization services include:
      </p>
      <div class="service-list">
        <ul class="flex flex-col gap-4 text-secondary-200">
         <li class="flex gap-4 items-center">
            <PhCheck />
            Processing business visas
          </li>
        <li class="flex gap-4 items-center">
            <PhCheck />
            Processing Temporary Work permits
          </li>
         <li class="flex gap-4 items-center">
            <PhCheck />
            Filing of monthly quota returns
          </li>
         <li class="flex gap-4 items-center">
            <PhCheck />
            Processing of Subject to Regularization (STR) Visa
          </li>
        <li class="flex gap-4 items-center">
            <PhCheck />
            Change of employment
          </li>
      <li class="flex gap-4 items-center">
            <PhCheck />
            Change of Position
          </li>
     <li class="flex gap-4 items-center">
            <PhCheck />
            Processing and Renewal of Residence Permit
          </li>
       <li class="flex gap-4 items-center">
            <PhCheck />
            Extension of stay on TWP visa
          </li>
        </ul>
      </div>
    </div>
    <div class="md:service-img w-3/4 md:w-1/3 hidden md:block">
      <img src="../../assets/images/work.svg" alt="" />
    </div>
  </div>
</template>

<script lang="js" setup>
import {PhCheck} from "@phosphor-icons/vue";
</script>
