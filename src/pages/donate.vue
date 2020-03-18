 <template>
 <div>
 <div style="background-color:rgb(25, 105, 38); margin: 0;
  padding: 3px;
  overflow: hidden">
      <q-btn color="green" @click="goBack()">HOME</q-btn>
    </div>
  <div class="q-pa-md col">
    <q-toolbar class="bg-green text-white shadow-2">
      <q-toolbar-title>NGO or Fund Raisers</q-toolbar-title>
    </q-toolbar>

    <q-list bordered>
      <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="rgb(25,105,38)" text-color="white">{{ contact.letter }}</q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chat_bubble" color="green" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  </div>
</template>
<script>
const contacts = [
  {
    id: 1,
    name: "Ruddy Jedrzej",
    email: "rjedrzej0@discuz.net",
    letter: "R"
  },
  {
    id: 2,
    name: "Mallorie Alessandrini",
    email: "malessandrini1@marketwatch.com",
    letter: "M"
  },
  {
    id: 3,
    name: "Elisabetta Wicklen",
    email: "ewicklen2@microsoft.com",
    letter: "E"
  },
  {
    id: 4,
    name: "Seka Fawdrey",
    email: "sfawdrey3@wired.com",
    letter: "S"
  }
];

export default {
  data() {
    return {
      contacts
    };
  },
  methods: {
    goBack() {
      this.$router.push("/");
    }
  }
};
</script>