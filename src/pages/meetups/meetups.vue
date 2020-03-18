
  <template>
  <div class="back">
    <div style="background-color:rgb(25, 105, 38); margin: 0;
  padding: 3px;
  overflow: hidden">
      <q-btn color="green" @click="goBack()">HOME</q-btn>
    </div>
    <div
      class="q-pa-lg col items-start q-gutter-md"
      style="width:50% ;margin-left:auto;margin-right:auto"
    >
      <q-card class="my-card bg-green text-white">
        <q-card-section>
          <div class="text-h6">Cleanliness drive:Baga Beach</div>
          <div class="text-subtitle2">by THE CLEANERS</div>
        </q-card-section>

        <q-card-section>{{ lorem }}</q-card-section>

        <q-separator dark />

        <q-card-actions>
          <a href="https://goo.gl/maps/KQzLwzTgYSASP2zH7" class="maplocate">
            <button class="button" style="vertical-align:middle">
              <span>locate</span>
            </button>
          </a>
          <q-btn flat round color="white" icon="share" />
        </q-card-actions>
      </q-card>

      <q-card class="my-card bg-green text-white">
        <q-card-section>
          <div class="text-h6">GEC Cleanliness drive</div>
          <div class="text-subtitle2">by GEC</div>
        </q-card-section>

        <q-card-section>{{ lorem }}</q-card-section>

        <q-separator dark />

        <q-card-actions>
          <q-card-actions align="around">
            <a href="https://goo.gl/maps/BCo5U4GCn6eWdJnTA" class="maplocate">
              <button class="button" style="vertical-align:middle">
                <span>locate</span>
              </button>
            </a>
            <q-btn flat round color="white" icon="share" />
          </q-card-actions>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

    <style>
.button {
  display: inline-block;
  border-radius: 4px;
  background-color: transparent;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  padding: 12px;
  width: 70px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 100;
  top: 0;
  right: -07px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 10px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
.body {
  background-image: "/statics/drive.jpg";
}
</style>
<script>
export default {
  methods: {
    goBack() {
      this.$router.push("/");
    }
  }
};
</script>>