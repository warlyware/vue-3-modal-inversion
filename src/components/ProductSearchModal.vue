<template>
  <search-modal
    url="/products"
    title="Product Search Modal"
    placeholder="Search for a product..."
  />
</template>

<script>
import SearchModal from './SearchModal.vue'

export default {
  components: {
    SearchModal
  }
}
</script>
