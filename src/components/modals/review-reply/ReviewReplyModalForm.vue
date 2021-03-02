<template>
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
</template>

<script>
import {
  reactive,
  toRefs,
  nextTick
} from 'vue'

import useModal from '@/utils/use-modal'

export default {
  setup() {
    const { closeModal } = useModal()

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

    return { ...toRefs(state), save }
  }
}
</script>

<style>

</style>
