<script setup>
import { CloudSun } from 'lucide-vue-next';
import { ref, computed } from 'vue';

// Mois et année affichés
const month = ref(9);
const year = ref(2025);
const monthName = 'Septembre';

// Événements
const events = ref([
  { day: 15, title: 'Planter des Tomates', type: 'Plantation', icon: 'fas fa-seedling', time: '09:00' }
]);

// Jour sélectionné
const selectedDay = ref(new Date().getDate());

// Générer les jours du mois (simplifié, pas calendrier complet)
const daysInMonth = computed(() => {
  const date = new Date(year.value, month.value, 0);
  return date.getDate();
});

// Vérifie si le jour a un événement
const hasEvent = (day) => events.value.some(e => e.day === day);

// Sélectionner un jour
const selectDay = (day) => {
  selectedDay.value = day;
};

// Ajouter un événement
const addEvent = () => {
  alert('Ajouter un nouvel événement au calendrier');
};
</script>

<template>
  <div class="container">
    <header>
      <h1>{{ monthName }} {{ year }}</h1>
      <button class="add-event-btn" @click="addEvent">
        <i class="fas fa-plus"></i> Ajouter un événement
      </button>
    </header>

    <div class="calendar-container">
      <table class="calendar">
        <thead>
          <tr>
            <th>Dim</th><th>Lun</th><th>Mar</th><th>Mer</th><th>Jeu</th><th>Ven</th><th>Sam</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="week in Math.ceil(daysInMonth/7)" :key="week">
            <td v-for="i in 7" :key="i"
                :class="[
                  selectedDay === (i + (week-1)*7) ? 'current-day' : '',
                  (i + (week-1)*7) > daysInMonth ? 'empty-day' : '',
                  hasEvent(i + (week-1)*7) ? 'event-day' : ''
                ]"
                @click="i + (week-1)*7 <= daysInMonth && selectDay(i + (week-1)*7)">
              {{ (i + (week-1)*7) <= daysInMonth ? (i + (week-1)*7) : '' }}
            </td>
          </tr>
        </tbody>
      </table>

      <div class="divider"></div>

      <div class="day-details">
        <h2 class="date-title">{{ selectedDay }} {{ monthName }} {{ year }}</h2>

        <div class="weather-card">
          <div class="weather-title">
              <CloudSun class="icon" /> Saison sèche
          </div>
          <div class="weather-details">
            <div class="weather-item">
              <div class="weather-value">0.1 mm</div>
              <div class="weather-label">Précipitation</div>
            </div>
            <div class="weather-item">
              <div class="weather-value">23.7 °C</div>
              <div class="weather-label">Température</div>
            </div>
            <div class="weather-item">
              <div class="weather-value">23.4 km/h</div>
              <div class="weather-label">Vent</div>
            </div>
          </div>
        </div>

        <div v-for="event in events.filter(e => e.day === selectedDay)" :key="event.title" class="event-card">
          <h3 class="event-title">{{ event.title }}</h3>
          <div class="event-type">
            <i :class="event.icon"></i> {{ event.type }}
          </div>
          <div class="event-time">
            <i class="far fa-clock"></i> {{ event.time }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* copier le CSS de ton calendrier original */
   .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            overflow: hidden;
        }
        
        header {
            background: linear-gradient(135deg, #2ecc71, #27ae60);
            color: white;
            padding: 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        h1 {
            font-size: 24px;
        }
        
        .add-event-btn {
            background-color: rgba(255, 255, 255, 0.2);
            color: white;
            border: none;
            border-radius: 8px;
            padding: 10px 15px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
        }
        
        .add-event-btn:hover {
            background-color: rgba(255, 255, 255, 0.3);
        }
        
        .add-event-btn i {
            margin-right: 8px;
        }
        
        .calendar-container {
            padding: 20px;
        }
        
        .calendar {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
        }
        
        .calendar th {
            padding: 15px;
            text-align: center;
            color: #2c3e50;
            font-weight: 600;
            border-bottom: 2px solid #eaecef;
        }
        
        .calendar td {
            padding: 12px;
            text-align: center;
            height: 50px;
            border: 1px solid #eaecef;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .calendar td:hover {
            background-color: #f0f7ff;
        }
        
        .current-day {
            background-color: #e8f5e9;
            font-weight: 700;
            color: #2ecc71;
            border: 2px solid #2ecc71 !important;
        }
        
        .event-day {
            position: relative;
        }
        
        .event-day::after {
            content: "";
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
            width: 6px;
            height: 6px;
            background-color: #e74c3c;
            border-radius: 50%;
        }
        
        .empty-day {
            background-color: #f8f9fa;
            cursor: default;
        }
        
        .empty-day:hover {
            background-color: #f8f9fa;
        }
        
        .divider {
            height: 1px;
            background: linear-gradient(to right, transparent, #ddd, transparent);
            margin: 20px 0;
        }
        
        .day-details {
            padding: 20px;
        }
        
        .date-title {
            font-size: 20px;
            color: #2c3e50;
            margin-bottom: 20px;
            font-weight: 700;
        }
        
        .weather-card {
            background-color: #f8f9fa;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 20px;
        }
        
        .weather-title {
            font-size: 16px;
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
        }
        
        .weather-title i {
            margin-right: 10px;
            color: #3498db;
        }
        
        .weather-details {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
        }
        
        .weather-item {
            text-align: center;
        }
        
        .weather-value {
            font-size: 18px;
            font-weight: 700;
            color: #2c3e50;
        }
        
        .weather-label {
            font-size: 14px;
            color: #7f8c8d;
        }
        
        .event-card {
            background-color: white;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
            border-left: 4px solid #2ecc71;
        }
        
        .event-title {
            font-size: 16px;
            font-weight: 700;
            color: #2c3e50;
            margin-bottom: 10px;
        }
        
        .event-type {
            font-size: 14px;
            color: #7f8c8d;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
        }
        
        .event-type i {
            margin-right: 8px;
            color: #2ecc71;
        }
        
        .event-time {
            display: flex;
            align-items: center;
            color: #3498db;
            font-weight: 600;
        }
        
        .event-time i {
            margin-right: 8px;
        }
        
        @media (max-width: 768px) {
            .calendar th, .calendar td {
                padding: 8px 5px;
                font-size: 14px;
            }
            
            .weather-details {
                grid-template-columns: 1fr;
                gap: 10px;
            }
            
            header {
                flex-direction: column;
                gap: 15px;
                text-align: center;
            }
        }
        
        @media (max-width: 480px) {
            .calendar th, .calendar td {
                padding: 6px 2px;
                font-size: 12px;
            }
            
            h1 {
                font-size: 20px;
            }
        }
</style>
