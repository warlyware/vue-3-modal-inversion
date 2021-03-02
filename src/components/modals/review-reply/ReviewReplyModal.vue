<template>
  <ww-modal
    v-if="showModal"
    title="Review Reply"
  >
    <review-reply-modal-form />

    <template #footer>
      FOOTER STUFF
    </template>
  </ww-modal>
</template>

<script>
import {
  reactive,
  toRefs
} from 'vue'

import { REVIEW_REPLY } from '@/constants/modals/names'

import ReviewReplyModalForm from '@/components/modals/review-reply/ReviewReplyModalForm.vue'

import useModal from '@/utils/use-modal'
import WwModal from '@/components/UI/WwModal.vue'

export default {
  components: {
    ReviewReplyModalForm,
    WwModal
  },
  setup() {
    const { setupModal } = useModal()

    const state = reactive({
      showModal: false
    })

    state.showModal = setupModal(REVIEW_REPLY)

    return {
      ...toRefs(state)
    }
  }
}
</script>
