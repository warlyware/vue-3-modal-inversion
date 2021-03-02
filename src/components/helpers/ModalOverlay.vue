<template>
  <div
    class="fixed top-0 bottom-0 right-0 left-0 bg-gray-400 opacity-70"
    @click="closeModal"
  />
</template>

<script>
import useModal from '../../utils/use-modal'

export default {
  setup() {
    const { closeModal } = useModal()

    return { closeModal }
  }
}
</script>
