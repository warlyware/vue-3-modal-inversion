<template>
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
        class="btn close-btn"
        @click="closeModal"
      >
        ✕
      </button>
    </div>

    <div class="scroll-target overflow-y-auto px-8 py-4">
      <slot :items="items" />
    </div>

    <div
      v-if="$slots.footer"
      class="flex px-8 py-4"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import {
  watchEffect,
  ref
} from 'vue'
import useModal from '../utils/use-modal'
import fetch from '../utils/fetch-util'
import ModalOverlay from './helpers/ModalOverlay.vue'

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
  setup(props) {
    const { closeModal } = useModal()
    const items = ref([])
    const searchValue = ref('')

    watchEffect(async () => {
      const data = await fetch(props.url, searchValue.value)
      items.value = data
    })

    return {
      items,
      searchValue,
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
