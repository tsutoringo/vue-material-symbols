# Vue material symbols

vue-material-symbols is [Google Materia Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols) for vue 3

## setup

```html
<html>
  <head>
    <!--Insert Google Material Symbols to index.html-->
    <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  </head>
</html
```

## Example

#### setup API
```html
<script setup>
import { GSymbol } from 'vue-material-symbols';
</script>
<template>
  <GSymbol
    icon="cake"
  />
  <GSymbol
    icon="light"
    type="outlined"
    fill
    :weight="400"
    :grade="0"
    :size="48"
  />
</template>
```

## License
Google Material Symbols created by Google
