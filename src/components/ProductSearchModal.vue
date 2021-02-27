<template>
  <teleport to="#modal-container">
    <template v-if="showModal">
      <div
        class="fixed h-full w-full bg-red-400"
        @click="closeModal"
      >
        <search-modal
          v-slot="{ items }"
          class="absolute modal-center"
          url="/products"
          title="Product Search Modal"
          placeholder="Search for a product..."
        >
          <product-list :products="items" />
        </search-modal>
      </div>
    </template>
  </teleport>
</template>

<script>
import {
  reactive,
  toRefs,
  watch
} from 'vue'
import useModal from '../utils/use-modal'
import ProductList from './ProductList.vue'
import SearchModal from './SearchModal.vue'

export default {
  components: {
    ProductList,
    SearchModal
  },
  setup() {
    const { activeModal, closeModal } = useModal()

    const state = reactive({
      showModal: false
    })

    watch(activeModal, modalName => {
      state.showModal = modalName === 'product-search'
    })

    const testFn = () => console.log('asdf')

    return {
      ...toRefs(state), activeModal, closeModal, testFn
    }
  }
}
</script>

<style scoped>
.modal-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
