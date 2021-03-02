<template>
  <teleport to="#modal-container">
    <div
      class="fixed top-0 bottom-0 right-0 left-0"
    >
      <modal-overlay />
      <div
        class="bg-white rounded-lg shadow-xl absolute modal-boundaries overflow-hidden"
        @click.stop
      >
        <div class="w-full flex justify-between align-center sticky top-0 bg-white py-4 px-8">
          <h2 class="text-2xl text-gray-900 font-medium">
            {{ title }}
          </h2>
          <button
            @click="closeModal"
          >
            ✕
          </button>
        </div>

        <div class="scroll-target overflow-y-auto px-8 py-4">
          <slot />
        </div>

        <div
          v-if="$slots.footer"
          class="flex px-8 py-4"
        >
          <slot name="footer" />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import useModal from '@/utils/use-modal'

import ModalOverlay from '@/components/modal/helpers/ModalOverlay.vue'

export default {
  components: {
    ModalOverlay
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const { closeModal } = useModal()

    return {
      closeModal
    }
  }
}
</script>

<style scoped>
.modal-boundaries {
  top: 50%;
  left: 50%;
  min-width: 400px;
  max-width: 80vw;
  max-width: 500px;
  max-height: 80vh;
  transform: translate(-50%, -50%);
}
.scroll-target {
  max-height: calc(80vh - 64px); /* Modal height - modal header height */
}
</style>
