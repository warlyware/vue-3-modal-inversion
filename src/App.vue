<template>
  <div class="p-8">
    <product-search-modal />
    <button @click="openModal('product-search')" />
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
