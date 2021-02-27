<template>
  <teleport to="#modal-container">
    <search-modal
      v-if="showModal"
      v-slot="{ items }"
      url="/products"
      title="Product Search Modal"
      placeholder="Search for a product..."
      @close="showModal = false"
    >
      <product-list :products="items" />
    </search-modal>
  </teleport>
</template>

<script>
import {
  reactive,
  toRefs
} from 'vue'
import ProductList from './ProductList.vue'
import SearchModal from './SearchModal.vue'

export default {
  components: {
    ProductList,
    SearchModal
  },
  setup() {
    const state = reactive({
      showModal: true
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>
