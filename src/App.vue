<template>
  <div class="flex flex-col items-center">
    <img
      class="w-42 h-42 mb-4"
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <div class="flex">
      <button
        class="border px-1 mx-2"
        @click="openModal('test-modal-1')"
      >
        1
      </button>
      <button
        class="border px-1 mx-2"
        @click="openModal('test-modal-2')"
      >
        2
      </button>
      <button
        class="border px-1 mx-2"
        @click="openModal('test-modal-3')"
      >
        3
      </button>
      <button
        class="border px-1 mx-2"
        @click="openModal('test-modal-4')"
      >
        4
      </button>
      <button
        class="border px-1 mx-2"
        @click="openModal('test-modal-5')"
      >
        5
      </button>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const openModal = modalName => {
      console.log(modalName)
    }

    return { openModal }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
