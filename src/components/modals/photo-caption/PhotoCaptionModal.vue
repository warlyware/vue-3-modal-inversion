<template>
  <ww-modal
    v-if="showModal"
    title="Photo Caption"
  >
    <form>
      <textarea
        id="caption"
        v-model="formData.photoCaption"
        name="caption"
        rows="5"
        cols="33"
      />
    </form>
    <template #footer>
      <button @click="save">
        Save
      </button>
    </template>
  </ww-modal>
</template>

<script>
import {
  nextTick,
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
    const { setupModal, closeModal } = useModal()

    const state = reactive({
      showModal: false,
      formData: {
        photoCaption: ''
      }
    })

    const clearForm = () => {
      state.formData.photoCaption = ''
    }

    const save = async () => {
      const { formData } = toRefs(state)
      closeModal(formData.value)
      await nextTick()
      clearForm()
    }

    state.showModal = setupModal(PHOTO_CAPTION)

    return {
      ...toRefs(state), save
    }
  }
}
</script>
