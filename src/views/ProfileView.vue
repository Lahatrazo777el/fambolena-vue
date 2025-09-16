<script setup>
import { ref } from 'vue';
import { 
  Mail, 
  Phone, 
  MapPin, 
  SlidersHorizontal, 
  Bell, 
  Tractor, 
  HelpCircle, 
  LifeBuoy 
} from "lucide-vue-next";

const user = ref({
  name: 'Vonjy Rabe',
  role: 'Fermier',
  email: 'john@greenfarm.com',
  phone: '+261 XX XX XXX XX',
  location: 'Antananarivo'
});

const handleBtnClick = (action) => {
  if(action === 'logout') {
    alert('Déconnexion en cours...');
    return;
  }
  alert('Fonctionnalité en cours de développement');
};
</script>

<template>
  <div class="container">
    <header>
      <div class="profile-img">
        <img src="https://images.pexels.com/photos/15014494/pexels-photo-15014494.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"  alt="">
      </div>
      <h1>{{ user.name }}</h1>
      <div class="title">{{ user.role }}</div>
    </header>

    <!-- Contact Info -->
    <div class="contact-info">
      <div class="contact-item">
        <div class="icon"><Mail /></div>
        <div class="contact-details">
          <div class="contact-type">Email</div>
          <div class="contact-value">{{ user.email }}</div>
        </div>
      </div>

      <div class="contact-item">
        <div class="icon"><Phone /></div>
        <div class="contact-details">
          <div class="contact-type">Téléphone</div>
          <div class="contact-value">{{ user.phone }}</div>
        </div>
      </div>

      <div class="contact-item">
        <div class="icon"><MapPin  /></div>
        <div class="contact-details">
          <div class="contact-type">Localisation</div>
          <div class="contact-value">{{ user.location }}</div>
        </div>
      </div>
    </div>

    <section class="preferences">
      <h2><SlidersHorizontal class="icon" /> Préférences</h2>

      <div class="pref-item">
        <h3><Bell class="icon" /> Notifications</h3>
        <p>Gérez vos paramètres de notifications</p>
        <button class="btn" @click="handleBtnClick('notifications')">Modifier les préférences</button>
      </div>

      <div class="pref-item">
        <h3><Tractor class="icon" /> Paramètres de l'exploitation</h3>
        <p>Configurez les détails de votre exploitation</p>
        <button class="btn" @click="handleBtnClick('farm-settings')">Configurer l'exploitation</button>
      </div>
    </section>

    <!-- Support -->
    <section class="support">
      <h2><HelpCircle class="icon" /> Support</h2>
      <div class="pref-item">
        <h3><LifeBuoy class="icon" /> Centre d'aide</h3>
        <p>Obtenez de l'aide et du support</p>
        <button class="btn" @click="handleBtnClick('help-center')">Accéder au centre d'aide</button>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Copie ton CSS original et adapte si nécessaire */


.container { max-width: 800px; margin: 0 auto; background: white; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.08); overflow: hidden; }
header { background: linear-gradient(135deg, #2ecc71, #27ae60); color: white; padding: 30px; text-align: center; }

.profile-img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid rgba(255,255,255,0.4);
    margin: 0 auto 15px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.profile-img img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* garde les proportions et recadre si nécessaire */
    display: block;
}
h1 { font-size: 28px; margin-bottom: 5px; }
.title { font-size: 18px; opacity: 0.9; margin-bottom: 20px; }

.contact-info { background-color: #f8f9fa; padding: 20px; border-bottom: 1px solid #eaecef; }
.contact-item { display: flex; align-items: center; margin-bottom: 12px; padding: 10px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
.icon { width: 36px; height: 36px; border-radius: 50%; background-color: #e8f5e9; display: flex; align-items: center; justify-content: center; margin-right: 15px; color: #2ecc71; }
.contact-details { flex: 1; }
.contact-type { font-weight: 600; color: #2c3e50; }
.contact-value { color: #7f8c8d; }

section { padding: 25px 30px; border-bottom: 1px solid #eaecef; }
h2 { font-size: 20px; color: #2c3e50; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #e8f5e9; display: flex; align-items: center; }
h2 i { margin-right: 10px; color: #2ecc71; }

.pref-item { margin-bottom: 25px; }
h3 { font-size: 18px; color: #34495e; margin-bottom: 8px; display: flex; align-items: center; }
h3 i { margin-right: 10px; color: #2ecc71; }
p { color: #7f8c8d; margin-left: 34px; }

.btn { display: inline-flex; align-items: center; padding: 12px 20px; background-color: #f8f9fa; color: #2c3e50; text-decoration: none; border-radius: 8px; transition: all 0.3s ease; margin-top: 10px; border: 1px solid #eaecef; cursor: pointer; width: 100%; }
.btn i { margin-right: 10px; color: #2ecc71; }
.btn:hover { background-color: #2ecc71; color: white; }
.btn:hover i { color: white; }

.logout { color: #e74c3c; }
.logout i { color: #e74c3c; }
.logout:hover { background-color: #e74c3c; color: white; }
.logout:hover i { color: white; }

@media (max-width: 600px) {
  header { padding: 20px; }
  .profile-img { width: 100px; height: 100px; }
  h1 { font-size: 24px; }
  .title { font-size: 16px; }
  section { padding: 20px; }
}
</style>
