<template>
  <div class="p-8">
    <review-reply-modal />
    <photo-caption-modal />
    <div>
      Review Reply 0 Data: {{ dataZero }}
    </div>
    <button
      class="border px-1 bg-gray-300 rounded"
      @click="openModal({ name: REVIEW_REPLY, id: 0 })"
    >
      Review Reply 0
    </button>
    <div>
      Review Reply 1 Data: {{ dataOne }}
    </div>
    <button
      class="border px-1 bg-gray-300 rounded"
      @click="openModal({ name: REVIEW_REPLY, id: 1 })"
    >
      Review Reply 1
    </button>
    <div>
      Photo Caption 32 Data: {{ photoCaption32 }}
    </div>
    <button
      class="border px-1 bg-gray-300 rounded"
      @click="openModal({ name: PHOTO_CAPTION, id: 32 })"
    >
      Photo Caption
    </button>
  </div>
</template>

<script>
import {
  PHOTO_CAPTION,
  REVIEW_REPLY
} from '@/constants/modals/names'

import useModal from '@/utils/use-modal'
import PhotoCaptionModal from '@/components/modals/photo-caption/PhotoCaptionModal.vue'
import ReviewReplyModal from '@/components/modals/review-reply/ReviewReplyModal.vue'
import {
  reactive,
  toRefs,
  watch
} from 'vue'

export default {
  components: {
    PhotoCaptionModal,
    ReviewReplyModal
  },
  setup() {
    const {
      activeModal, openModal, modalData, modalCallerId, modalHasData
    } = useModal()

    const state = reactive({
      dataZero: '',
      dataOne: '',
      photoCaption32: ''
    })

    const handlePhotoCaptionModalData = (data, callerId) => {
      switch (callerId) {
      case 32:
        state.photoCaption32 = data.photoCaption
        break
      default:
        console.error('INVALID CALLERID', callerId)
        break
      }
    }

    const handleReviewReplyModalData = (data, callerId) => {
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

    const handleModalData = ({
      name, data, callerId
    }) => {
      switch (name) {
      case PHOTO_CAPTION:
        handlePhotoCaptionModalData(data, callerId)
        break
      case REVIEW_REPLY:
        handleReviewReplyModalData(data, callerId)
        break

      default:
        console.error('INVALID MODAL', name)
        break
      }
    }

    watch(activeModal, (_, lastActiveModal) => {
      if (modalHasData.value) {
        handleModalData({
          name: lastActiveModal,
          data: modalData.value,
          callerId: modalCallerId.value
        })
      }
    })

    return {
      openModal, PHOTO_CAPTION, REVIEW_REPLY, ...toRefs(state)
    }
  }
}
</script>
