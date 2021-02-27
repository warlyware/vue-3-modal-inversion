<template>
  <div class="p-8">
    <product-search-modal />
    <p
      v-for="num in 50"
      :key="num"
    >
      stuff
    </p>
    <button @click="openModal('product-search')">
      dont click
    </button>
  </div>
</template>

<script>
import useModal from './utils/use-modal'
import ProductSearchModal from './components/ProductSearchModal.vue'

export default {
  components: {
    ProductSearchModal
  },
  setup() {
    const { openModal } = useModal()

    return { openModal }
  }
}
</script>
