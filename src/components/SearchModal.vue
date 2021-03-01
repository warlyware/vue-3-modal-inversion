<template>
  <div
    class="bg-white rounded-lg shadow-xl py-6 px-8 scroll-target"
    @click.stop
  >
    <!-- Header -->
    <div class="w-full flex justify-between align-center">
      <h2 class="text-2xl text-gray-900 font-medium">
        {{ title }}
      </h2>
      <button
        class="btn close-btn"
        @click="closeModal"
      >
        ✕
      </button>
    </div>

    <!-- Search -->
    <input
      v-model="searchValue"
      class="input"
      type="text"
      :placeholder="placeholder"
    >

    <div
      v-if="items.length === 0"
      class="py-8 italic text-gray-700 text-lg text-center"
    >
      Loading...
    </div>

    <slot
      v-else
      class=""
      :items="items"
    >
      DEFINE SLOT CONTENT HERE
    </slot>

    <!-- Footer -->
    <div
      class="flex justify-end bg-gray-200 -mx-8 px-8 -mb-6 py-4 rounded-b"
    >
      <button
        class="btn primary-btn"
        @click="closeModal"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
import {
  watchEffect,
  ref
} from 'vue'
import useModal from '../utils/use-modal'
import fetch from '../utils/fetch-util'

export default {
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Search something...'
    }
  },
  setup(props) {
    const { closeModal } = useModal()
    const items = ref([])
    const searchValue = ref('')

    watchEffect(async () => {
      const data = await fetch(props.url, searchValue.value)
      items.value = data
    })

    return {
      items,
      searchValue,
      closeModal
    }
  }
}
</script>

<style scoped>
.scroll-target {
  padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 80vw;
    width: 500px;
    height: 30vh;
    transform: translate(-50%, -50%);
    background: white;
    border: 2px solid #ff1a35;
    overflow-y: auto;
}
</style>
