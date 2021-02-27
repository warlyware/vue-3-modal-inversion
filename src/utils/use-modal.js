import {
  reactive,
  toRefs
} from 'vue'

const state = reactive({
  activeModal: null
})

export default function useModal() {
  const openModal = modalName => {
    state.activeModal = modalName
  }

  const closeModal = () => {
    state.activeModal = null
  }

  return {
    openModal, closeModal, ...toRefs(state)
  }
}
