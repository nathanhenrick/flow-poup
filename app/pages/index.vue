<template>
  <div>
    <div id="smooth-wrapper" class="x-index-1">
      <div id="smooth-content">
        <!-- <LazyNuxtImg
            src="circular-window.png"
            format="webp"
            class="entry-page vh-100 vw-100 position-absolute overflow-x-hidden"
            placeholder="blur"
          /> -->
        <section
          class="vh-100 px-5 d-flex justify-content-center align-items-center row"
          style="padding-top: 5rem"
        >
          <div class="col-md-6 d-flex flex-column">
            <h1>
              Controle suas finanças pessoais de forma simples e inteligente.
            </h1>
            <p>
              FlowPoup te ajuda a economizar, acompanhar despesas e alcançar
              suas metas financeiras com facilidade.
            </p>
            <PrimaryButton style="width: fit-content"
              >Comece Agora</PrimaryButton
            >
          </div>

          <div class="col-md-6 d-flex justify-content-center">
            <LazyNuxtImg placeholder="blur" src="/personal_finance.svg" />
          </div>
        </section>

        <section
          class="vh-100 d-flex justify-content-center align-items-center"
        >
          <div>
            <h1 class="blackColor fw-bold">Tudo que você precisa para gerenciar suas finanças</h1>

            <p class="small text-secondary">
              Assuma o controle do seu dinheiro com ferramentas poderosas e
              fáceis de usar, projetadas para você.
            </p>
          </div>
        </section>

        <section class="vh-100"></section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $gsap, $ScrollSmoother } = useNuxtApp();

onMounted(() => {
  const _smoother = $ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    effects: true,
  });

  const image = document.querySelector(".entry-page") as HTMLImageElement;
  const tl = $gsap.timeline({
    scrollTrigger: {
      trigger: "main",
      start: "top top",
      end: "+=50%",
      scrub: true,
      pin: true,
      pinType: "transform",
    },
  });

  tl.to(image, {
    scale: 2.5,
    transformOrigin: "center center",
    ease: "none",
  });

  tl.to(image, {
    opacity: 0,
    ease: "power1.inOut",
  });
});
</script>

<style lang="scss">
main {
  .hero {
    padding: 5rem 0;
  }
}
</style>
