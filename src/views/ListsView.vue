<template>
  <v-container class="mobile-container pa-4">
    <h1 class="text-h6 font-weight-medium mb-4 text-center">
      Dine Indkøbslister
    </h1>

    <v-list density="compact" class="rounded-lg elevation-1">
      <v-list-item
        v-for="list in sortedLists"
        :key="list.id"
        @click="goToList(list.id)"
        class="mb-2 rounded-lg border"
      >
        <v-list-item-title class="text-body-1 font-weight-medium">
          {{ list.name }}
        </v-list-item-title>

        <v-list-item-subtitle class="text-caption text-grey-darken-1">
          {{ formatDate(list.date) }}
        </v-list-item-subtitle>

        <template #append>
          <v-chip
            :color="getLevelColor(list.co2Level)"
            size="small"
            text-color="white"
            label
          >
            {{ list.co2Level }}
          </v-chip>
        </template>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const lists = ref([
  { id: 1, name: 'Aftensmad', date: '2025-11-05', co2Level: 'Høj' },
  { id: 2, name: 'Rema 100', date: '2025-11-04', co2Level: 'Medium' },
  { id: 3, name: 'Fødselsdagsfest', date: '2025-10-30', co2Level: 'Lav' },
])

const sortedLists = computed(() =>
  [...lists.value].sort((a, b) => new Date(b.date) - new Date(a.date))
)

const formatDate = (date) => new Date(date).toLocaleDateString('da-DK')

const getLevelColor = (level) => {
  if (level === 'Høj') return 'red'
  if (level === 'Medium') return 'orange'
  return 'green'
}

const goToList = (id) => router.push(`/lists/${id}`)
</script>

<style scoped>
.mobile-container {
  max-width: 425px;
  margin: 0 auto;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: #fff;
  min-height: 100vh;
}
</style>
