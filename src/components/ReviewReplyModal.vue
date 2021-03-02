<template>
  <ww-modal
    v-if="showModal"
    title="Review Reply"
  >
    <form>
      <textarea
        id="story"
        v-model="formData.replyText"
        name="story"
        rows="5"
        cols="33"
      />
      <button @click="save">
        Save
      </button>
    </form>
    <template #footer>
      FOOTER STUFF
    </template>
  </ww-modal>
</template>

<script>
import {
  nextTick,
  reactive,
  toRefs
} from 'vue'

import { REVIEW_REPLY } from '../constants/modals/names'

import useModal from '../utils/use-modal'
import WwModal from './WwModal.vue'

export default {
  components: {
    WwModal
  },
  setup() {
    const {
      activeModal, closeModal, setupModal
    } = useModal()

    const state = reactive({
      showModal: false,
      formData: {
        replyText: ''
      }
    })

    const clearForm = () => {
      state.formData.replyText = ''
    }

    const save = async () => {
      const { formData } = toRefs(state)
      closeModal(formData.value)
      await nextTick()
      clearForm()
    }

    state.showModal = setupModal(REVIEW_REPLY)

    return {
      ...toRefs(state), activeModal, closeModal, save
    }
  }
}
</script>
