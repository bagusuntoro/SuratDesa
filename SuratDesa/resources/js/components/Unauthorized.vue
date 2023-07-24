<template>
  <div class="text-center mt-5 text-black font-weight-bold">
    <h1>Unauthorized</h1>
    <p>Anda tidak memiliki akses ke halaman tersebut</p>
  </div>
</template>

<script>
export default {
  name: 'Unauthorized',
  mounted() {
        const body = document.querySelector('body');
        body.style.backgroundImage = 'url(/img/wilayah.png)';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundSize = 'cover';
    }
};
</script>

<style>
</style>
