<template>
  <q-layout view="hHh lpR fFf" :class="isDarkMode ? 'bg-dark-page' : 'bg-primary'">
    <q-header :class="isDarkMode ? 'bg-dark text-gray-3' : 'bg-white text-accent'" height-hint="64">
      <q-toolbar class="GNL__toolbar">
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          :icon="fasBars"
          class="q-mr-sm"
        />

        <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
          <img :src="isDarkMode ? 'src/assets/logo-white.svg' : 'src/assets/logo.svg'" alt="SebraeOne" class="q-mr-sm" />
        </q-toolbar-title>

        <q-space />

        <q-input class="GNL__toolbar-input" :bg-color="isDarkMode ? 'dark-page' : 'primary'" :color="isDarkMode ? 'grey-3' : 'accent'" dense rounded :standout="isDarkMode ? 'bg-grey-1' : 'bg-accent'" v-model="search" placeholder="Search for topics, locations & sources">
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
          </template>
        </q-input>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn @click="toggleTheme" round flat :color="isDarkMode ? 'yellow' : 'accent'" :icon="isDarkMode ? fasMoon : fasSun">
            <q-tooltip>{{ isDarkMode ? 'Modo Dark' : 'Modo Light' }}</q-tooltip>
          </q-btn>
          <q-btn round flat :color="isDarkMode ? 'grey-3' : 'accent'" :icon="fasBell">
            <q-badge color="red" text-color="grey-3" floating>
              2
            </q-badge>
            <q-tooltip>Notificações</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="36px">
              <img src="https://i.pravatar.cc/150?img=12">
            </q-avatar>
            <q-tooltip>Perfil</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :class="isDarkMode ? 'bg-dark' : 'bg-white'"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <q-item class="GNL__drawer-item" v-ripple v-for="link in links1" :key="link.text" clickable>
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset class="q-my-sm" />
          
          <q-item class="GNL__drawer-item" v-ripple v-for="link in links2" :key="link.text" clickable>
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <div class="q-mt-md">
            <div class="flex flex-center q-gutter-xs" >
              <a class="GNL__drawer-footer-link" href="javascript:void(0)" aria-label="Privacy">Privacy</a>
              <span> · </span>
              <a class="GNL__drawer-footer-link" href="javascript:void(0)" aria-label="Terms">Terms</a>
              <span> · </span>
              <a class="GNL__drawer-footer-link" href="javascript:void(0)" aria-label="About">About Google</a>
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { fasBars, fasMoon, fasSun, fasBell, fasBuilding, fasUserTie, fasHeadset, fasComments, fasGear, fasRightFromBracket } from '@quasar/extras/fontawesome-v6'

export default {
  name: 'SebraeOneLayout',

  setup () {
    const $q = useQuasar()
    const leftDrawerOpen = ref(false)
    const search = ref('')
    const isDarkMode = ref($q.dark.isActive)

    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }
    
    function toggleTheme () {
      $q.dark.toggle()
      isDarkMode.value = $q.dark.isActive
    }

    return {
      leftDrawerOpen,
      search,
      toggleTheme,
      isDarkMode,
      fasBars,
      fasBell,
      fasMoon,
      fasSun,
      fasBuilding,
      fasUserTie,
      fasHeadset,
      fasComments,
      fasGear,
      fasRightFromBracket,

      // Grupo de links1
      links1: [
        { icon: fasBuilding, text: 'Institucional' },
        { icon: fasUserTie, text: 'Gestão' },
        { icon: fasHeadset, text: 'Suporte' },
        { icon: fasComments, text: 'Chat e Vídeo' },
      ],

      // Grupo de links2
      links2: [
        { icon: fasGear, text: 'Ferramentas' },
        { icon: fasRightFromBracket, text: 'Sair' }
      ],

      toggleLeftDrawer
    }
  }
}
</script>
<style lang="sass">
.GNL

  &__toolbar
    height: 64px

  &__toolbar-input
    width: 55%

  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px

    .q-item__section--avatar
      .q-icon

    .q-item__label
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover

</style>