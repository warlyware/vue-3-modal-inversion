<template>
  <div class="p-8">
    <review-reply-modal />
    <p
      v-for="num in 50"
      :key="num"
    >
      stuff
    </p>
    <button @click="openModal(REVIEW_REPLY)">
      dont click
    </button>
  </div>
</template>

<script>
import { REVIEW_REPLY } from './constants/modals/names'

import useModal from './utils/use-modal'
import ReviewReplyModal from './components/ReviewReplyModal.vue'

export default {
  components: {
    ReviewReplyModal
  },
  setup() {
    const { openModal } = useModal()

    return { openModal, REVIEW_REPLY }
  }
}
</script>
