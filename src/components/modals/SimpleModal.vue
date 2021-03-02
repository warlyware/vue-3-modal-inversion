<template>
  <ww-modal
    v-if="showModal"
    :title="title"
  >
    <slot />
  </ww-modal>
</template>

<script>
import useModal from '@/utils/use-modal'
import {
  reactive,
  toRefs
} from '@vue/reactivity'
import { SIMPLE_MODAL } from '@/constants/modals/names'

import WwModal from '@/components/UI/WwModal.vue'

export default {
  components: {
    WwModal
  },
  props: {
    title: {
      type: String,
      default: 'I am simple!'
    }
  },
  setup() {
    const { setupModal } = useModal()

    const state = reactive({
      showModal: false
    })

    state.showModal = setupModal(SIMPLE_MODAL)

    return { ...toRefs(state) }
  }
}
</script>
