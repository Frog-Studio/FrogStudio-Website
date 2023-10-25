<template>
    <ul>
      <li v-for="image in images" :key="image">
        <img :src="image" alt="Image" />
      </li>
    </ul>
</template>

<script>
    import { importMeta } from 'vue';

    export default {
        name: 'ImageList',
        computed: {
            images() {
                return import.meta.glob(['../Assets/Photos/*.webp']);
            },
        },
    }
</script>
  