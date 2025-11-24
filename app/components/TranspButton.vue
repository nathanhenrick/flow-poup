<template>
  <button class="btn px-4 text-uppercase fw-bold">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  color: $primary;
  background: transparent;
  border: 1px solid $primary;

  &:hover {
    border: 1px solid $black;
  }
}
</style>