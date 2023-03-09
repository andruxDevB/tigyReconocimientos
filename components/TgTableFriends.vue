<template>
  <div>
    <div class="w-full">
      <button
        :class="[baseClass, buttonClass]"
        :disabled="friendsSelected.length < 2"
        @click="
          sidebarPriceToggle()
          setFriendsRecogment(friendsSelected)
        "
      >
        <common-tg-loading-circle v-if="loading" />
        Dar reconocimiento masivo
      </button>
    </div>
    <div class="sm:flex sm:justify-between mb-10">
      <common-tg-table>
        <template #head>
          <common-tg-table-head></common-tg-table-head>
          <common-tg-table-head>Nombre</common-tg-table-head>
          <common-tg-table-head>Acción</common-tg-table-head>
        </template>
        <template #body>
          <common-tg-table-row
            v-for="(friend, index) in friends"
            :key="`gif-item-${index}-${friend.id}`"
          >
            <common-tg-table-row-cell>
              <input
                v-model="friendsSelected"
                type="checkbox"
                :value="friend.id"
              />
            </common-tg-table-row-cell>
            <common-tg-table-row-cell>{{
              friend.full_name
            }}</common-tg-table-row-cell>
            <common-tg-table-row-cell>
              <TgFriendRequestsActions
                :friend="friend"
              ></TgFriendRequestsActions>
            </common-tg-table-row-cell>
          </common-tg-table-row>
        </template>
      </common-tg-table>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'TgTableFriends',
  props: {
    friends: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      friendsSelected: [],
      baseClass:
        'relative -mr-px w-full mb-3 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent rounded-bl-lg hover:bg-purple-700 bg-purple-600 disabled:bg-purple-400 disabled:cursor-none',
      typeClass: {
        primary: 'text-white',
        flat: 'text-gray-700 hover:text-gray-500',
      },
    }
  },
  computed: {
    buttonClass() {
      return this.typeClass.primary
    },
  },
  methods: {
    ...mapMutations({
      sidebarPriceToggle: 'price/TOGGLE_SIDEBAR',
      setFriendsRecogment: 'price/SET_FRIENDS_RECOGMENT',
    }),
  },
}
</script>
