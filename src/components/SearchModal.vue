<template>
  <div class="modal-container">
    <div class="modal">
      <!-- Header -->
      <div class="w-full flex justify-between align-center">
        <h2 class="text-2xl text-gray-900 font-medium">
          Product Search
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
        placeholder="Search for a product..."
      >

      <div
        v-if="products.length === 0"
        class="py-8 italic text-gray-700 text-lg text-center"
      >
        Loading...
      </div>
      <ProductList
        v-else
        :products="products"
      />

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
import ProductList from './ProductList.vue'
import fetch from '../utils/fetch-util'

export default {
  components: { ProductList },

  props: {
    url: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const products = ref([])
    const searchValue = ref('')

    watchEffect(async () => {
      const data = await fetch(props.url, searchValue.value)
      products.value = data
    })

    return {
      products,
      searchValue
    }
  }
}
</script>
