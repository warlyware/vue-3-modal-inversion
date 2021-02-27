<template>
  <search-modal
    v-slot="{ items }"
    url="/products"
    title="Product Search Modal"
    placeholder="Search for a product..."
  >
    <product-list :products="items" />
  </search-modal>
</template>

<script>
import ProductList from './ProductList.vue'
import SearchModal from './SearchModal.vue'

export default {
  components: {
    ProductList,
    SearchModal
  }
}
</script>
