<template>
  <div class="p-8">
    <review-reply-modal />
    <div>
      0 Data: {{ dataZero }}
    </div>
    <button
      class="border px-1 bg-gray-300 rounded"
      @click="openModal({ name: REVIEW_REPLY, id: 0 })"
    >
      dont click 0
    </button>
    <div>
      1 Data: {{ dataOne }}
    </div>
    <button
      class="border px-1 bg-gray-300 rounded"
      @click="openModal({ name: REVIEW_REPLY, id: 1 })"
    >
      dont click 1
    </button>
  </div>
</template>

<script>
import { REVIEW_REPLY } from '@/constants/modals/names'

import useModal from '@/utils/use-modal'
import ReviewReplyModal from '@/components/modals/review-reply/ReviewReplyModal.vue'
import {
  reactive,
  toRefs,
  watch
} from 'vue'

export default {
  components: {
    ReviewReplyModal
  },
  setup() {
    const {
      activeModal, openModal, modalData, modalCallerId, modalHasData
    } = useModal()

    const state = reactive({
      dataZero: '',
      dataOne: ''
    })

    const handleModalData = (data, callerId) => {
      switch (callerId) {
      case 0:
        state.dataZero = data.replyText
        break
      case 1:
        state.dataOne = data.replyText
        break
      default:
        console.error('INVALID CALLERID', callerId)
        break
      }
    }

    watch(activeModal, () => {
      if (modalHasData.value) {
        handleModalData(modalData.value, modalCallerId.value)
      }
    })

    return {
      openModal, REVIEW_REPLY, ...toRefs(state)
    }
  }
}
</script>
