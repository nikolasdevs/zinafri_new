<script setup>
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Country } from "country-state-city";
import { ref, computed } from "vue";

const name = ref("");
const email = ref("");
const phone = ref("");
const department = ref("");
const isSuccess = ref(false);
const countries = ref([]);
const selectedCountry = ref("");

countries.value = Country.getAllCountries().map((country) => country.name);

const onCreateForm = async () => {
  try {
    await addDoc(collection(db, "users"), {
      name: name.value,
      email: email.value,
      phone: phone.value,
      country: selectedCountry.value,
      department: department.value,
    });

    name.value = "";
    email.value = "";
    phone.value = "";
    selectedCountry.value = "";
    department.value = "";

    isSuccess.value = true;
  } catch (error) {
    console.error("Error adding document: ", error);
  }
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone.value)) {
    console.error("Invalid phone number");
  }
};

const isFormValid = computed(() => {
  return (
    name.value &&
    email.value &&
    phone.value &&
    department.value &&
    selectedCountry.value
  );
});
</script>

<template>
  <div
    class="supportForm md:mt-24 mt-16 flex relative z-20 bg-hero-section bg-cover bg-center bg-fixed px-4"
    id="supportSection"
  >
    <div
      class="bg-black bg-opacity-50 z-40 flex absolute top-0 bottom-0 left-0 right-0 justify-center"
    >
      <div class="circle bg-sky-100 text-sky-500" v-if="isSuccess">
        Request sent successfully
      </div>
    </div>

    <div
      class="container mx-auto flex flex-col md:flex-row w-full items-center justify-between gap-16 my-32 z-50"
    >
      <div
        class="left-container flex flex-col gap-4 md:w-1/2 w-full justify-center text-white"
      >
        <p class="font-semibold">FREE 24/7 SUPPORT</p>
        <p class="text-5xl font-medium my-5">
          Get Free & Quality Online Consultation
        </p>
        <p class="font-semibold">
          Make your next visit to Nigeria a seamless one.
        </p>
        <p>
          Planning a trip to Nigeria involves various steps, and obtaining the
          right visa is a crucial part of the process. Fortunately, Zinafri has
          in place an online consultation services. Get a free and quality
          advice on Nigeria visa requirement at the tip of your finger.
        </p>
      </div>
      <div class="form-box md:w-1/2 w-full rounded-xl bg-slate-100 px-8">
        <div class="text-xl font-semibold py-8 text-center text-secondary-200">
          Request Free Consultation
        </div>

        <form class="flex flex-col gap-4" @submit.prevent="onCreateForm">
          <input
            class="input"
            type="text"
            placeholder="Enter Your Name"
            v-model="name"
          />
          <input
            class="input"
            type="email"
            placeholder="Enter Your Email Address"
            v-model="email"
          />

          <input
            class="input"
            type="number"
            placeholder="Enter Your Phone Number"
            v-model="phone"
          />

          <select v-model="selectedCountry" class="input">
            <option disabled>Select a country</option>
            <option
              v-for="country in countries"
              :key="country"
              :value="country"
            >
              {{ country }}
            </option>
          </select>

          <select class="input" v-model="department">
            <option>Visa For</option>
            <option>Tourist Visa</option>

            <option>Business Visa</option>

            <option>TWP Visa</option>

            <option>STR Visa</option>
          </select>

          <button
            class="p-4 bg-sky-400 hover:bg-sky-500 mt-6 mb-12 font-semibold text-white text-sm tracking-wide rounded-md"
            type="submit"
            :disabled="!isFormValid"
          >
            SEND REQUEST
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.circle {
  width: 10rem;
  height: 10rem;
  font-weight: 500;
  padding-inline: 2rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  left: 05%;
  top: 10%;
  position: absolute;
  box-sizing: border-box;
  border-radius: 50%;
  animation: move 2s linear;
  z-index: 99;
}

@keyframes move {
  20% {
    top: 0;
  }

  100% {
    top: 15%;
  }
}
</style>
