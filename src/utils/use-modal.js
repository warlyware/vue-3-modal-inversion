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
  const openModal = async modalName => {
    state.activeModal = modalName
    await nextTick()
    const modalEl = document.getElementsById('modal-container')
    debugger
    disableBodyScroll(modalEl)
  }

  const closeModal = () => {
    state.activeModal = null
  }

  return {
    openModal, closeModal, ...toRefs(state)
  }
}
