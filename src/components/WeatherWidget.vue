<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  city: { type: String, default: "Antananarivo" }
});

const weather = ref(null);

onMounted(async () => {
  const apiKey = "YOUR_OPENWEATHERMAP_KEY"; // 🔑
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric&lang=fr`
  );
  weather.value = await res.json();
});
</script>

<template>
  <div class="bg-green-100 p-4 rounded-lg shadow w-full max-w-md">
    <h2 class="text-xl font-semibold text-green-800 mb-2">Météo {{ city }}</h2>
    <div v-if="weather">
      <p>🌡 {{ weather.main.temp }} °C</p>
      <p>☁️ {{ weather.weather[0].description }}</p>
    </div>
    <p v-else>Chargement...</p>
  </div>
</template>
