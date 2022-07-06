<script lang="ts" setup>
import { Icon, IconType, IconWeight, IconGrade, IconSize } from '../Icon';

const props = withDefaults(
  defineProps<{
    icon: Icon,
    type?: IconType,
    fill?: boolean,
    weight?: IconWeight,
    grade?: IconGrade,
    size?: IconSize
  }>(), {
    type: 'outlined',
    fill: false,
    weight: 400,
    grade: 0,
    size: 48
  }
);
</script>
<template>
  <span
    class="g-symbol"
    :class="[
      `material-symbols-${props.type}`,
    ]"
    :style="{
      'font-variation-settings': `'FILL' ${props.fill ? 1 : 0}, 'wght' ${props.weight}, 'GRAD' ${props.grade}, 'opsz' ${props.size}`,
    }"
  >
    {{ props.icon }}
  </span>
</template>
<style scoped>

</style>