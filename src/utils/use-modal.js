import {
  nextTick,
  reactive,
  toRefs
} from 'vue'

import {
  disableBodyScroll,
  enableBodyScroll
} from 'body-scroll-lock'

const state = reactive({
  activeModal: null
})

export default function useModal() {
  const getModalContainerElement = () => {
    return document.getElementById('modal-container')
  }

  const openModal = async modalName => {
    state.activeModal = modalName
    await nextTick()
    const modalContainer = getModalContainerElement()
    disableBodyScroll(modalContainer)
  }

  const closeModal = async () => {
    state.activeModal = null
    await nextTick()
    const modalContainer = getModalContainerElement()
    enableBodyScroll(modalContainer)
  }

  return {
    openModal, closeModal, ...toRefs(state)
  }
}
