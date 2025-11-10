<template>
  <v-container class="mobile-container pa-4 d-flex flex-column justify-space-between">
    <div>
      <div class="d-flex align-center mb-2">
        <v-btn variant="plain" icon size="small" @click="$router.back()">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h2 class="text-h6 font-weight-bold mb-0 ml-2">{{ list?.name }}</h2>
      </div>

      <div v-if="list">
        <div class="d-flex align-center mb-2">
          <p class="text-subtitle-2 font-weight-medium mb-0 ml-4">
            CO₂e: {{ list.totalCO2 }} kg
          </p>
          <div :class="['co2-dot', getLevelColor(list.co2Level), 'ml-2', 'mr-1']"></div>
          <span class="text-body-2 font-weight-medium">{{ list.co2Level }}</span>
        </div>

        <div class="divider mb-4"></div>

        <v-list density="compact">
          <v-list-item
            v-for="(item, i) in list.items"
            :key="i"
            class="py-1"
            @click="toggleChecked(i)"
          >
            <div class="d-flex align-center justify-space-between w-100">
              <div class="d-flex align-center">
                <div class="round-checkbox" :class="{ checked: item.checked }">
                  <v-icon v-if="item.checked" size="14" color="white">mdi-check</v-icon>
                </div>

                <div :class="['item-text', { 'checked-text': item.checked }]">
                  <v-list-item-title class="text-body-1 font-weight-bold">
                    {{ item.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-caption">
                    {{ item.amount }}
                  </v-list-item-subtitle>
                </div>
              </div>

              <span
                class="text-body-2 font-weight-medium"
                :class="{ 'checked-text': item.checked }"
              >
                {{ item.co2 }} kg CO₂
              </span>
            </div>
          </v-list-item>
        </v-list>
      </div>

      <div v-else>
        <v-alert type="warning" variant="tonal">
          Ingen data fundet for denne liste.
        </v-alert>
      </div>
    </div>

    <v-bottom-navigation height="56" class="bottom-bar">
      <v-btn
        variant="text"
        class="text-body-2 font-weight-medium"
        @click="$router.push('/lists')"
      >
        <v-icon start>mdi-format-list-bulleted</v-icon>
        dine indkøbslister
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const list = ref(null)

onMounted(() => {
  const mockLists = [
    {
      id: 1,
      name: 'Aftensmad',
      totalCO2: 6.4,
      co2Level: 'Høj',
      items: [
        { name: 'Hakket oksekød', amount: '200g', co2: 10, checked: false },
        { name: 'Æg', amount: '10 stk', co2: 8, checked: false },
        { name: 'Smør', amount: '200g', co2: 10, checked: false },
      ],
    },
    {
      id: 2,
      name: 'Rema 100',
      totalCO2: 3.2,
      co2Level: 'Medium',
      items: [
        { name: 'Tomater', amount: '1kg', co2: 1.2, checked: false },
        { name: 'Ris', amount: '500g', co2: 2, checked: false },
      ],
    },
  ]

  const id = parseInt(route.params.id)
  list.value = mockLists.find(l => l.id === id)
})

const toggleChecked = (index) => {
  list.value.items[index].checked = !list.value.items[index].checked
}

const getLevelColor = (level) => {
  if (level === 'Høj') return 'red-dot'
  if (level === 'Medium') return 'yellow-dot'
  return 'green-dot'
}
</script>

<style scoped>
.mobile-container {
  max-width: 425px;
  height: 100vh;
  margin: 0 auto;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.divider {
  height: 1px;
  background-color: #e5e5e5;
}

.border-b {
  border-bottom: 1px solid #f0f0f0;
}

.round-checkbox {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #555;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.round-checkbox.checked {
  background-color: #4caf50;
  border-color: #4caf50;
}

.item-text {
  transition: color 0.2s ease;
}



.checked-text {
  text-decoration: line-through;
  color: #9e9e9e;
}

.co2-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.red-dot {
  background-color: red;
}

.yellow-dot {
  background-color: orange;
}

.green-dot {
  background-color: green;
}

.bottom-bar {
  border-top: 1px solid #ddd;
}
</style>
