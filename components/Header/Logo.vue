<template>
  <div class="flex items-center">
    <a
      href="#"
      onclick="return false"
      @click="navigate"
      class="flex items-end gap-2 font-semibold text-xl"
    >
      <img src="~/assets/images/logoHeader.png" alt="FNBA Logo" class="w-12" />
      <span class="text-white">{{ title }}</span>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { RouteEnum } from '~/models/router/RouteEnum';

defineProps({
  title: {
    type: String,
    default: "TITLE",
    required: false,
  },
});

function navigate() {
  useNavigate(RouteEnum.ROOT);
}
</script>
