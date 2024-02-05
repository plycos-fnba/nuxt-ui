<template>
  <div class="flex items-center">
    <a
      href="#"
      onclick="return false"
      @click="navigate"
      class="flex items-end gap-2 font-semibold text-xl"
    >
      <img src="~/assets/images/logoHeader.png" alt="FNBA Logo" class="w-12" />
      <span>{{ title }}</span>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { Route } from "~/models/utils/Route";

defineProps({
  title: {
    type: String,
    default: "TITLE",
    required: false,
  },
});

function navigate() {
  useNavigate(Route.HOME);
}
</script>
