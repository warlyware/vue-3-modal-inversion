<template>
  <search-modal
    url="/products"
    title="Product Search Modal"
    placeholder="Search for a product..."
  >
    <template #default="{ items }">
      <product-list :products="items" />
    </template>
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
