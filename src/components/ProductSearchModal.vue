<template>
  <teleport to="#modal-container">
    <template v-if="showModal">
      <div
        class="fixed top-0 bottom-0 right-0 left-0"
        @click="closeModal"
      >
        <modal-overlay />
        <ww-modal
          v-slot="{ items }"
          title="Product Search Modal"
        >
          <product-list :products="items" />
        </ww-modal>
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
import WwModal from './WwModal.vue'
import ModalOverlay from './helpers/ModalOverlay.vue'

export default {
  components: {
    ProductList,
    WwModal,
    ModalOverlay
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
