<template>
  <ww-modal
    v-if="showModal"
    title="Photo Caption"
  >
    Photo caption modal!
  </ww-modal>
</template>

<script>
import {
  reactive,
  toRefs
} from 'vue'

import { PHOTO_CAPTION } from '@/constants/modals/names'

import useModal from '@/utils/use-modal'
import WwModal from '@/components/UI/WwModal.vue'

export default {
  components: {
    WwModal
  },
  setup() {
    const { setupModal } = useModal()

    const state = reactive({
      showModal: false
    })

    state.showModal = setupModal(PHOTO_CAPTION)

    return {
      ...toRefs(state)
    }
  }
}
</script>
