<script>
export default {
  data() {
    return {
      isFlipped: false,
    };
  },

  methods: {
    toggleCard() {
      this.isFlipped = !this.isFlipped;
    },
  },

  name: "ServiceCard",
  props: {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div
    class="card-container cursor-pointer shadow border rounded-lg py-2 px-2 md:w-72 w-80  hover:bg-gray-50 bg"
  >
    <div class="card" :class="{ flipped: isFlipped }">
      <div
        class="flex items-center justify-between mb-4 card-face card-front text-center"
      >
        <h2 class="text-xl font-medium">{{ title }}</h2>
      </div>
      <div class="flex items-center justify-between card-face card-back">
        <p class="text-gray-700 text-base">{{ content }}</p>
      </div>

      <div @click="toggleCard">
        <button
          class="btn bg-sky-400 text-white px-1 py-1 rounded-full text-sm hover:bg-sky-600"
          v-if="isFlipped"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
          </svg>
        </button>
        <button
          class="btn bg-sky-400 text-white px-1 py-1 rounded-full text-sm hover:bg-sky-600"
          v-else
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>

      <!-- <hr class="mt-16 border-t border-b-1 border-sky-200" /> -->

      <!-- <p class="text-gray-700 mt-6">{{ content }}</p> -->
      <div class="mt-16">
        <slot></slot>
        <!-- This is where additional content can be added -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  height: auto;
  position: relative;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  transform-style: preserve-3d;
  transition: transform 0.5s;

  height: 15rem;
}

.card-flip {
  transition: transform 0.5s;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card-face {
  width: 100%;
  height: 10rem;
  position: absolute;
  top: 10px;
  padding-inline: 16px;
  transform: translateY(-50%);
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-front {
  top: 50%;
}
.card-back {
  transform: rotateY(180deg);
}

.btn {
  position: absolute;
  bottom: 4px;
  right: 4px;
}
</style>
