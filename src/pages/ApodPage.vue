<template>
  <div class="apod flex-grow-1 d-flex flex-column align-items-end justify-content-end"
    :style="`background-image: url(${apod.hdurl})`">
    <h5 class="p-5 text-light">{{apod.explanation}}</h5>
  </div>
</template>

<script>
import { AppState } from "../AppState";
import { computed, reactive, onMounted } from "vue";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { apodService } from "../services/ApodService";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    onMounted(async () => {
      try {
        await apodService.getApod();
      } catch (error) {
        Pop.toast(error.message, "error");
        logger.error(error);
      }
    });
    return {
      apod: computed(() => AppState.apod),
    };
  }
}
</script>

<style lang="scss">
.apod {
    background-position: center;
    background-size: cover;
    min-height: 95vh;
    width: 100%;
}
</style>