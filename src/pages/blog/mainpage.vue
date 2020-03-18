<template>
  <div class="q-pa-md col items-start q-gutter-md">
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>{{ lorem }}</q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn to="/pages/blog1.vue" flat round color="white" icon="menu_book" />
        <q-btn flat round color="white" icon="share" />
      </q-card-actions>
    </q-card>

    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>{{ lorem }}</q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-card-actions align="around">
          <q-btn to="/pages/blog2.vue" flat round color="white" icon="menu_book" />
          <q-btn flat round color="white" icon="share" />
        </q-card-actions>
      </q-card-actions>
    </q-card>
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>{{ lorem }}</q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn to="/pages/blog3.vue" flat round color="white" icon="menu_book" />
        <q-btn flat round color="white" icon="share" />
      </q-card-actions>
    </q-card>
  </div>
</template>
    