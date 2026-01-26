<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <div class="header-scrolled">
        <q-toolbar>
          <q-toolbar-title>
            <h4>មើលឆ្នោតប្រចាំថ្ងៃ</h4>
          </q-toolbar-title>

          <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
        </q-toolbar>
      </div>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
      <q-list class="text-h5">
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
      <selectionpage />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import selectionpage from './selection.vue'
import EssentialLink from 'src/components/EssentialLink.vue'

const linksList = [
  {
    title: 'ឆ្នោតយួន',
  },
  {
    title: 'ឆ្នោត-មីងណាម',
  },
  {
    title: 'ឆ្នោតខ្មែរ',
  },
  {
    title: 'ឆ្នោតថៃ',
  },
  {
    title: 'Download App',
  },
]

const rightDrawerOpen = ref(false)

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>
