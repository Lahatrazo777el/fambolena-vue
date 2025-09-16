<script setup>
import { RouterView, RouterLink, useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();
const user = ref(null);

onMounted(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    user.value = JSON.parse(storedUser);
  } else {
    if (!["/signin", "/signup"].includes(router.currentRoute.value.path)) {
      router.push("/signin");
    }
  }
});

const logout = () => {
  localStorage.removeItem("user");
  user.value = null;
  router.push("/signin");
};
</script>

<template>
  <div class="app-container">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="logo">🌱 Fambolena</div>

      <ul class="nav-links" v-if="user">
        <li><RouterLink to="/">Accueil</RouterLink></li>
        <li><RouterLink to="/tutorials">Conseil</RouterLink></li>
        <li><RouterLink to="/calendar">Calendrier</RouterLink></li>
        <li><RouterLink to="/posts">Postes</RouterLink></li>
        <li><RouterLink to="/profits">Bénéfices</RouterLink></li>
      </ul>

      <div v-if="user" class="profile">
        <div class="profile-img">
          <img src="https://images.pexels.com/photos/15014494/pexels-photo-15014494.jpeg" alt="Profile" />
        </div>
        <span>{{ user.name }}</span>
        <div class="profile-dropdown">
          <RouterLink to="/profiles">Mon profil</RouterLink>
          <a href="#" @click.prevent="logout">Se déconnecter</a>
        </div>
      </div>
    </nav>

    <main class="content">
      <RouterView />
    </main>

    <footer class="footer">
      <p>&copy; 2025 Fambolena - Apprendre et cultiver mieux 🌾</p>
    </footer>
  </div>
</template>
<style scoped>

.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

/* Content */
.content {
  flex-grow: 1;
  padding: 2rem;
}

/* Footer */
.footer {
  background-color: #2e7d32;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: auto;
  font-size: 0.9rem;
}

/* Navbar container */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0,0,0,0.08);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Logo and title */
.navbar .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #27ae60;
    font-weight: bold;
    font-size: 1.2rem;
}

/* Navbar links */
.navbar .nav-links {
    display: flex;
    gap: 25px;
    list-style: none;
}

.navbar .nav-links li a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
}

.navbar .nav-links li a:hover {
    color: #27ae60;
}

/* Profile container */
/* Profile container */
.profile {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
}

/* Profile image */
.profile-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.4);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
}

.profile-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Profile name */
.profile span {
    font-weight: 600;
    color: #fff;
}

/* Dropdown menu */
.profile-dropdown {
    position: absolute;
    top: 60px;
    right: 0;
    background-color: white;
    min-width: 200px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    z-index: 100;
}

/* Show dropdown on hover */
.profile:hover .profile-dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

/* Dropdown items */
.profile-dropdown a {
    display: block;
    padding: 10px 15px;
    color: #2c3e50;
    text-decoration: none;
    transition: background 0.2s;
}

.profile-dropdown a:hover {
    background-color: #f0f7ff;
}

/* Mobile hamburger menu */
.menu-btn {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
}

/* Mobile menu (hidden by default) */
.mobile-menu {
    display: none;
    flex-direction: column;
    gap: 15px;
    background-color: #fff;
    padding: 15px 30px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.08);
}

/* Responsive */
@media (max-width: 768px) {
    .navbar .nav-links {
        display: none;
    }
    .menu-btn {
        display: block;
    }
}
</style>