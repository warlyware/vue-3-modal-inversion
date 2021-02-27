<template>
  <div class="modal-container">
    <div class="modal">
      <!-- Header -->
      <div class="w-full flex justify-between align-center">
        <h2 class="text-2xl text-gray-900 font-medium">
          {{ title }}
        </h2>
        <button class="btn close-btn">
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
        :items="items"
      >
        DEFINE SLOT CONTENT HERE
      </slot>

      <!-- Footer -->
      <div
        class="flex justify-end bg-gray-200 -mx-8 px-8 -mb-6 py-4 rounded-b"
      >
        <button class="btn primary-btn">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  watchEffect,
  ref
} from 'vue'
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
    const items = ref([])
    const searchValue = ref('')

    watchEffect(async () => {
      const data = await fetch(props.url, searchValue.value)
      items.value = data
    })

    return {
      items,
      searchValue
    }
  }
}
</script>
