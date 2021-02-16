<template>
  <v-app>
    <v-app-bar app dark fixed>
      <v-app-bar-nav-icon @click.stop = "bDrawer = !bDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Saturday Morning</v-toolbar-title>
      <v-spacer></v-spacer>

    </v-app-bar>
    <v-navigation-drawer absolute temporary v-model = "bDrawer">
      <v-toolbar flat height = "150px">
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="./assets/kkm.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                Kyungmo Kim
              </v-list-item-title>
              <v-list-item-subtitle>chachaami66@gmail.com</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      <v-divider></v-divider>
      </v-toolbar>

      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container>
        <h1 class = "display-1 my-5">Hello, welcome to Saturday Morning!</h1>
        <p class = "body-2 my-4">We provide cheap and hi quality cosmetics for men.</p>
      </v-container>
    </v-content>
    
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      bDrawer: false,
      selectedItem: 0,
      items: [
        { text: 'My Files', icon: 'mdi-folder' },
        { text: 'Shared with me', icon: 'mdi-account-multiple' },
        { text: 'Starred', icon: 'mdi-star' },
        { text: 'Recent', icon: 'mdi-history' },
        { text: 'Offline', icon: 'mdi-check-circle' },
        { text: 'Uploads', icon: 'mdi-upload' },
        { text: 'Backups', icon: 'mdi-cloud-upload' },
      ],
    }
    
  }
}
</script>