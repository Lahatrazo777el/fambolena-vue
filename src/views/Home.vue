<script setup>
import { ref } from 'vue';

import { Apple, Sprout, Carrot, CloudSun, LocationEdit, MapPin } from "lucide-vue-next";

const userLocation = ref('Fambolena');
const temperature = ref(23.7);

const crops = ref([
  { name: "Tomates", icon: Apple, progress: 85, status: "Excellent", statusClass: "status-excellent" },
  { name: "Riz", icon: Sprout, progress: 72, status: "Bon", statusClass: "status-good" },
  { name: "Carrottes", icon: Carrot, progress: 45, status: "Peut être amélioré", statusClass: "status-average" },
]);

const weather = ref({
  location: 'Antananarivo',
  temp: 23.7,
  icon: 'fas fa-sun',
  humidity: '0%',
  wind: '23.4 km/h',
  condition: 'Ensoleillé',
  note: 'Conditions parfaites pour les activités agricoles en plein air'
});

const viewCropDetails = (cropName) => {
  alert(`Détails du bénéfice pour: ${cropName}`);
};

const viewAllProfit = () => {
  alert('Affichage de tous les bénéfices');
};


const getCropColor = (name) => {
  if (name === 'Tomates') return '#e74c3c';
  if (name === 'Riz') return '#f39c12';
  if (name === 'Carrottes') return '#3498db';
  return '#2ecc71';
};
</script>

<template>
  <div class="dashboard">
    <!-- Welcome Card -->
    <div class="welcome-card">
      <div class="welcome-text">
        <h2>Bonjour</h2>
        <div class="location">
          <i class="fas fa-map-marker-alt"></i>
          <span>Bienvenue sur {{ userLocation }}</span>
        </div>
      </div>
      <div class="temperature">
        <div class="temp-value">{{ temperature }}°C</div>
        <div class="temp-label">Température actuelle</div>
      </div>
    </div>

    <!-- Profit Card -->
    <div class="card">
      <div class="card-header">
        <div class="card-title">
          <i class="fas fa-chart-line"></i> Bénéfice
        </div>
        <a href="#" class="view-all" @click.prevent="viewAllProfit">Voir tous</a>
      </div>

      <div class="crop-list">
        <div class="crop-item" v-for="crop in crops" :key="crop.name" @click="viewCropDetails(crop.name)">
          <div class="crop-icon">
              <component :is="crop.icon" class="icon" />
          </div>
          <div class="crop-details">
            <div class="crop-name">{{ crop.name }}</div>
            <div class="progress-container">
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: crop.progress + '%', backgroundColor: getCropColor(crop.name) }"></div>
              </div>
              <div class="progress-value">{{ crop.progress }}%</div>
            </div>
          </div>
          <div class="crop-status" :class="crop.statusClass">{{ crop.status }}</div>
        </div>
      </div>
    </div>

    <!-- Weather Card -->
    <div class="card weather-card">
      <div class="weather-header">
        <div class="card-title">
          <CloudSun/> Météo
        </div>
        <div class="weather-location">
          <MapPin/> {{ weather.location }}
        </div>
      </div>

      <div class="weather-main">
        <div class="weather-icon">
          <i :class="weather.icon"></i>
        </div>
        <div class="weather-temp">{{ weather.temp }}°C</div>
      </div>

      <div class="weather-details">
        <div class="weather-detail">
          <div class="detail-value">{{ weather.humidity }}</div>
          <div class="detail-label">Humidité</div>
        </div>
        <div class="weather-detail">
          <div class="detail-value">{{ weather.wind }}</div>
          <div class="detail-label">Vent</div>
        </div>
        <div class="weather-detail">
          <div class="detail-value">{{ weather.condition }}</div>
          <div class="detail-label">Conditions</div>
        </div>
      </div>

      <div class="weather-note">{{ weather.note }}</div>
    </div>
  </div>
</template>

<style scoped>
/* Copie le CSS original et adapte les interactions Vue */

.dashboard { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:20px; }
@media (max-width:900px) { .dashboard { grid-template-columns:1fr; } }

.card { background:white; border-radius:12px; box-shadow:0 5px 15px rgba(0,0,0,0.08); overflow:hidden; padding:20px; }
.welcome-card { grid-column:1/-1; display:flex; justify-content:space-between; align-items:center; background:linear-gradient(135deg, #2ecc71, #27ae60); color:white; padding:25px; }
.welcome-text h2 { font-size:24px; margin-bottom:5px; }
.location { display:flex; align-items:center; font-size:16px; }
.location i { margin-right:8px; }
.temperature { text-align:right; }
.temp-value { font-size:32px; font-weight:700; }
.temp-label { font-size:16px; opacity:0.9; }

.card-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; padding-bottom:15px; border-bottom:2px solid #f0f4f7; }
.card-title { font-size:18px; font-weight:700; color:#2c3e50; display:flex; align-items:center; }
.card-title i { margin-right:10px; color:#2ecc71; }
.view-all { color:#3498db; text-decoration:none; font-weight:600; font-size:14px; }

.crop-list { display:flex; flex-direction:column; gap:15px; }
.crop-item { display:flex; align-items:center; padding:15px; background-color:#f8f9fa; border-radius:8px; transition:all 0.3s ease; cursor:pointer;}
.crop-item:hover { background-color:#e8f5e9; transform:translateY(-2px); }
.crop-icon { width:50px; height:50px; border-radius:50%; background-color:#e8f5e9; display:flex; align-items:center; justify-content:center; margin-right:15px; color:#2ecc71; font-size:20px; }
.crop-details { flex:1; }
.crop-name { font-weight:600; color:#2c3e50; margin-bottom:5px; }
.progress-container { display:flex; align-items:center; gap:10px; }
.progress-bar { flex:1; height:8px; background-color:#e0e0e0; border-radius:4px; overflow:hidden; }
.progress-fill { height:100%; border-radius:4px; }
.progress-value { font-size:14px; font-weight:600; color:#7f8c8d; min-width:40px; }
.crop-status { font-size:12px; font-weight:600; padding:4px 10px; border-radius:12px; }
.status-excellent { background-color:#e8f6f3; color:#27ae60; }
.status-good { background-color:#fef9e7; color:#f39c12; }
.status-average { background-color:#fbeee6; color:#e67e22; }
.status-poor { background-color:#fdedec; color:#e74c3c; }

.weather-card { display:flex; flex-direction:column; }
.weather-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; }
.weather-location { font-weight:600; color:#2c3e50; display:flex; align-items:center; }
.weather-location i { margin-right:8px; color:#3498db; }
.weather-main { display:flex; align-items:center; justify-content:center; margin:20px 0; }
.weather-icon { font-size:48px; color:#f39c12; margin-right:15px; }
.weather-temp { font-size:36px; font-weight:700; color:#2c3e50; }
.weather-details { display:grid; grid-template-columns:repeat(3,1fr); gap:15px; margin:20px 0; }
.weather-detail { text-align:center; padding:15px; background-color:#f8f9fa; border-radius:8px; }
.detail-value { font-size:18px; font-weight:700; color:#2c3e50; margin-bottom:5px; }
.detail-label { font-size:14px; color:#7f8c8d; }
.weather-note { text-align:center; padding:15px; background-color:#e8f4fc; border-radius:8px; color:#3498db; font-weight:600; margin-top:15px; }

@media (max-width:900px) { .welcome-card { flex-direction:column; text-align:center; gap:15px; } }
</style>
