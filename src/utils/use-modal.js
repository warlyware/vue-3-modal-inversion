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
  activeModal: null,
  modalCallerId: null,
  modalData: null
})

export default function useModal() {
  const getModalContainerElement = () => {
    return document.getElementById('modal-container')
  }

  const openModal = async ({ name, id }) => {
    state.activeModal = name
    state.modalCallerId = id
    await nextTick()
    const modalContainer = getModalContainerElement()
    disableBodyScroll(modalContainer)
  }

  const closeModal = async data => {
    console.log('pass back data to caller', data)
    state.modalData = data
    state.activeModal = null
    await nextTick()
    const modalContainer = getModalContainerElement()
    enableBodyScroll(modalContainer)
  }

  return {
    openModal, closeModal, ...toRefs(state)
  }
}
