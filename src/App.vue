<template>
  <div class="gradient h-full p-8">
    <product-search-modal />
  </div>
</template>

<script>
import ProductSearchModal from './components/ProductSearchModal.vue'

export default {
  components: {
    ProductSearchModal
  },
  setup() {
    const openModal = modalName => {
      console.log(modalName)
    }

    return { openModal }
  }
}
</script>
