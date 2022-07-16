# Vue material symbols

Vue component for [Google Materia Symbols](https://fonts.google.com/icons?icon.set=Material+Symbols)

![VueMaterialSymbols](https://user-images.githubusercontent.com/33830878/179359894-a79428ff-e4db-4d76-998f-85f6a9f282e2.gif)

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
