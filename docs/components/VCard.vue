<template>
  <section class="hero-section">
    <div class="card-grid">
      <a
        class="card"
        href="https://www.bilibili.com/video/BV1Gv411T7pi?spm_id_from=333.999.0.0"
        target="_blank"
      >
        <div
          class="card__background"
          style="
            background-image: url(https://aliyun-bucket1.oss-cn-guangzhou.aliyuncs.com/cover/javase.webp);
          "
        ></div>
        <div class="card__content">
          <p class="card__category">B站4K高清 --BY 青空の霞光</p>
          <h3 class="card__heading">JavaSE基础课</h3>
        </div>
      </a>
      <a
        class="card"
        href="https://www.bilibili.com/video/BV1CL4y1i7qR?spm_id_from=333.999.0.0"
        target="_blank"
      >
        <div
          class="card__background"
          style="
            background-image: url(https://aliyun-bucket1.oss-cn-guangzhou.aliyuncs.com/cover/javaweb.webp);
          "
        ></div>
        <div class="card__content">
          <p class="card__category">B站4K高清 --BY 青空の霞光</p>
          <h3 class="card__heading">JavaWeb入门课</h3>
        </div>
      </a>
      <a
        class="card"
        href="https://www.bilibili.com/video/BV1xL4y1H7Tq?spm_id_from=333.999.0.0"
        target="_blank"
      >
        <div
          class="card__background"
          style="
            background-image: url(https://aliyun-bucket1.oss-cn-guangzhou.aliyuncs.com/cover/javassm.webp);
          "
        ></div>
        <div class="card__content">
          <p class="card__category">B站4K高清 --BY 青空の霞光</p>
          <h3 class="card__heading">SSM进阶课</h3>
        </div>
      </a>
      <a
        class="card"
        href="https://www.bilibili.com/video/BV1UL411V7f3?spm_id_from=333.999.0.0"
        target="_blank"
      >
        <div
          class="card__background"
          style="
            background-image: url(https://aliyun-bucket1.oss-cn-guangzhou.aliyuncs.com/cover/javaboot.webp);
          "
        ></div>
        <div class="card__content">
          <p class="card__category">B站4K高清 --BY 青空の霞光</p>
          <h3 class="card__heading">SpringBoot进阶课</h3>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
:root {
  --text-light: rgba(255, 255, 255, 0.6);
  --text-lighter: rgba(255, 255, 255, 0.9);
  --spacing-s: 8px;
  --spacing-m: 16px;
  --spacing-l: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 64px;
  --width-container: 1200px;
}

* {
  border: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.hero-section {
  margin: 5rem 0 0 0;
  align-items: flex-start;
  display: flex;
  min-height: 100%;
  justify-content: center;
  padding: var(--spacing-xxl) var(--spacing-l);
}

.card-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: var(--spacing-l);
  grid-row-gap: var(--spacing-l);
  max-width: var(--width-container);
  width: 100%;
}

@media (min-width: 540px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card {
  list-style: none;
  position: relative;
  display: block;
  margin: 0 0.5rem;
  border-radius: 2px;
}

.card:before {
  content: '';
  display: block;
  padding-bottom: 150%;
  width: 100%;
}

.card__background {
  /* background-size: cover; */
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: var(--spacing-l);
  filter: brightness(0.75) saturate(1.2) contrast(0.85);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  transform-origin: center;
  trsnsform: scale(1) translateZ(0);
  transition: filter 200ms linear, transform 200ms linear;
}

.card:hover .card__background {
  transform: scale(1.05) translateZ(0);
}

.card-grid:hover > .card:not(:hover) .card__background {
  filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
}

.card__content {
  left: 0;
  padding: var(--spacing-l);
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
}

.card__category {
  color: var(--text-light);
  font-size: 1.1rem;
  margin-bottom: var(--spacing-s);
  text-transform: uppercase;
  vertical-align: middle;
  margin: 0 0 0 1rem;
}

.card__heading {
  color: var(--text-lighter);
  font-size: 1.9rem;
  font-weight: bolder;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
  line-height: 1.4;
  word-spacing: 100vw;
  margin: 0 0 0 1rem;
}
</style>
