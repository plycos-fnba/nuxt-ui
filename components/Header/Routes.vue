<template>
  <div class="flex items-center justify-center gap-x-8">
    <HeaderSubMenu title="Tax">
      <HeaderRouteItem title="State Tracking" route="/" />
      <HeaderSubMenu title="Non-Escrow">
        <HeaderRouteItem
          title="Initial Review"
          :route="RouteEnum.TAX_INITIAL_REVIEW"
        />
        <HeaderRouteItem title="Follow-Up Review" route="/" />
      </HeaderSubMenu>
    </HeaderSubMenu>
  </div>
</template>

<script lang="ts" setup>
import { RouteEnum } from "~/models/router/RouteEnum";
</script>
