<template>
  <div class="card item">
    <div class="card-body">
      <h6 class="card-subtitle mb-2 text-muted">
        <slot name="subtitle">
          <p>Hi There!</p>
        </slot>
      </h6>
      <div class="card-text">
        <slot>
          <p>Here is some Body</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.item {
  width: 50vw;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
}
</style>