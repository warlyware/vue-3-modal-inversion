import {
  computed,
  nextTick,
  reactive,
  toRefs,
  watch
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

  const setupModal = name => {
    const showModal = computed(() => {
      return state.activeModal === name
    })
    return showModal
  }

  const openModal = async ({ name, id }) => {
    state.activeModal = name
    state.modalCallerId = id
    await nextTick()
    const modalContainer = getModalContainerElement()
    disableBodyScroll(modalContainer)
  }

  const closeModal = async data => {
    state.modalData = data
    state.activeModal = null
    await nextTick()
    const modalContainer = getModalContainerElement()
    enableBodyScroll(modalContainer)
  }

  const isEvent = data => {
    return data.value?.target
  }

  const modalHasData = computed(() => {
    const { activeModal, modalData } = toRefs(state)
    if (isEvent(modalData)) { return false }
    return !!(!activeModal?.value && modalData?.value)
  })

  return {
    openModal, closeModal, ...toRefs(state), modalHasData, setupModal
  }
}
