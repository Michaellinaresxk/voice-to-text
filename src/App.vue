<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   <v-layout>
     <v-app-bar
         color="deep-purple-accent-3"
         density="compact"
       >
         <template v-slot:prepend>
           <v-app-bar-nav-icon></v-app-bar-nav-icon>
         </template>

         <v-app-bar-title>Voice to text</v-app-bar-title>

         <template v-slot:append>
           <v-btn icon="mdi-dots-vertical"></v-btn>
         </template>
       </v-app-bar>
   </v-layout>

  <RouterView />
</template>

<style scoped>

</style>
