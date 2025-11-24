<template>
  <button class="btn-custom btn px-4 text-uppercase fw-bold">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn-custom {
  position: relative;
  overflow: hidden;

  background: $primary;
  color: $white;
  border: 1px solid $primary;

  transition: color .3s ease, border .3s ease;

  z-index: 1;

  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: $black;
    z-index: -1;

    transform: translateY(-100%);
    transition: transform .35s ease;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  &:hover {
    color: $white;
    border-color: $black;
  }

  &:hover::before {
    transform: translateY(0%);
  }
}
</style>
