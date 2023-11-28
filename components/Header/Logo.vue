<template>
  <div class="flex items-center">
    <a
      href="#"
      onclick="return false"
      @click="navigate"
      class="flex items-end gap-2 font-semibold text-xl"
    >
      <img src="~/assets/images/logoHeader.png" alt="FNBA Logo" class="w-12" />
      <span>Peter's Webapp</span>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { Route } from "~/models/utils/Route";

function navigate() {
  useNavigate(Route.HOME);
}
</script>
