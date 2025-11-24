<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid mx-5">
      <NuxtLink to="/" class="navbar-brand">
        <NuxtImg
          src="logo/logo-full-color.svg"
          style="width: 8rem;"
        />
      </NuxtLink>
      <button
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mb-2 gap-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink to="#" class="nav-link">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="#" class="nav-link">Sobre nós</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="#" class="nav-link">Preço</NuxtLink>
          </li>
          <li class="nav-item">
            <TranspButton class="nav-link">Demo</TranspButton>
          </li>
          <li class="nav-item">
            <PrimaryButton class="nav-link">Login</PrimaryButton>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar-expand-lg {
  background: rgba($color: #ffffff, $alpha: 0.9);
  backdrop-filter: blur(5px);
  .nav-item {
    white-space: nowrap;
    font-weight: bold;
  }
}
</style>
