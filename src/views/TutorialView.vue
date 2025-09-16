<script setup>
import { ref, computed } from 'vue';
import { Sprout, Droplets, Leaf, CloudSun } from "lucide-vue-next";

// Liste des cours
const courses = ref([
  {
    title: "Préparation et plantation des semences",
    description:
      "Apprenez les bases de la sélection des semences et les techniques de plantation appropriées pour maximiser votre rendement.",
    icon: Sprout,
    duration: "8 min",
    level: "Débutant",
    levelClass: "level-beginner",
    category: "cultivation",
  },
  {
    title: "Systèmes d'irrigation efficaces",
    description:
      "Maîtrisez la gestion de l'eau et les différentes techniques d'irrigation pour optimiser l'utilisation des ressources en eau.",
    icon: Droplets,
    duration: "12 min",
    level: "Intermédiaire",
    levelClass: "level-intermediate",
    category: "irrigation",
  },
  {
    title: "Gestion naturelle des parasites",
    description:
      "Découvrez des méthodes écologiques pour protéger vos cultures contre les parasites sans utiliser de produits chimiques.",
    icon: Leaf,
    duration: "15 min",
    level: "Avancé",
    levelClass: "level-advanced",
    category: "cultivation",
  },
  {
    title: "Agriculture et changements climatiques",
    description:
      "Adaptez vos pratiques agricoles face aux défis climatiques et apprenez à anticiper les variations météorologiques.",
    icon: CloudSun,
    duration: "10 min",
    level: "Intermédiaire",
    levelClass: "level-intermediate",
    category: "climate",
  },
]);

// Filtrage des cours
const selectedFilter = ref('all');

const filters = ref([
  { label: 'Tous', value: 'all' },
  { label: 'Cultivation', value: 'cultivation' },
  { label: 'Irrigation', value: 'irrigation' },
  { label: 'Climat', value: 'climate' }
]);

const filteredCourses = computed(() => {
  if (selectedFilter.value === 'all') return courses.value;
  return courses.value.filter(course => course.category === selectedFilter.value);
});

// Méthodes pour interactions
const selectFilter = (filter) => {
  selectedFilter.value = filter;
};

const openCourse = (title) => {
  alert(`Ouverture du cours: ${title}`);
};
</script>

<template>
  <div class="container">
    <header>
      <h1><i class="fas fa-graduation-cap"></i> Centre d'apprentissage</h1>
      <div class="subtitle">Maîtrisez l'agriculture avec des conseils d'experts</div>
    </header>

    <div class="filters">
      <button 
        v-for="filter in filters" 
        :key="filter.value" 
        class="filter-btn" 
        :class="{ active: selectedFilter === filter.value }"
        @click="selectFilter(filter.value)">
        {{ filter.label }}
      </button>
    </div>

    <div class="course-list">
      <div 
        v-for="course in filteredCourses" 
        :key="course.title" 
        class="course-card" 
        @click="openCourse(course.title)">
        <div class="course-image">
             <component :is="course.icon" class="course-icon" />
        </div>
        <div class="course-content">
          <h3 class="course-title">{{ course.title }}</h3>
          <p class="course-description">{{ course.description }}</p>
          <div class="course-meta">
            <div class="course-duration">
              <i class="far fa-clock"></i> {{ course.duration }}
            </div>
            <div class="course-level" :class="course.levelClass">{{ course.level }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* CSS original adapté à Vue */

.container { max-width:800px; margin:0 auto; background:white; border-radius:12px; box-shadow:0 5px 15px rgba(0,0,0,0.08); overflow:hidden; }
header { background: linear-gradient(135deg, #3498db, #2c3e50); color:white; padding:30px; text-align:center; }
h1 { font-size:28px; margin-bottom:10px; display:flex; align-items:center; justify-content:center; }
h1 i { margin-right:10px; }
.subtitle { font-size:16px; opacity:0.9; margin-top:10px; }

.filters { display:flex; justify-content:center; gap:15px; padding:20px; background-color:#f8f9fa; border-bottom:1px solid #eaecef; }
.filter-btn { padding:10px 20px; background-color:white; border:1px solid #ddd; border-radius:20px; font-weight:600; cursor:pointer; transition:all 0.3s ease; }
.filter-btn.active { background-color:#3498db; color:white; border-color:#3498db; }
.filter-btn:hover:not(.active) { background-color:#e8f4fc; border-color:#3498db; }

.course-list { padding:20px; }
.course-card { display:flex; margin-bottom:25px; border-radius:10px; overflow:hidden; box-shadow:0 3px 10px rgba(0,0,0,0.08); transition:transform 0.3s ease; background:white; cursor:pointer; }
.course-card:hover { transform:translateY(-5px); box-shadow:0 5px 15px rgba(0,0,0,0.1); }
.course-image { width:120px; min-width:120px; background:linear-gradient(135deg, #2ecc71, #27ae60); display:flex; align-items:center; justify-content:center; color:white; }
.course-image i { font-size:40px; }
.course-content { padding:20px; flex:1; }
.course-title { font-size:18px; font-weight:700; color:#2c3e50; margin-bottom:10px; }
.course-description { color:#7f8c8d; margin-bottom:15px; line-height:1.5; }
.course-meta { display:flex; justify-content:space-between; align-items:center; }
.course-duration { display:flex; align-items:center; color:#3498db; font-weight:600; }
.course-duration i { margin-right:5px; }
.course-level { padding:5px 12px; border-radius:15px; font-size:12px; font-weight:600; }
.level-beginner { background-color:#e8f6f3; color:#27ae60; }
.level-intermediate { background-color:#e8f4fc; color:#3498db; }
.level-advanced { background-color:#fef9e7; color:#f39c12; }

@media (max-width:600px) {
  header { padding:20px; }
  h1 { font-size:22px; }
  .filters { flex-wrap:wrap; }
  .course-card { flex-direction:column; }
  .course-image { width:100%; height:120px; }
}
</style>
