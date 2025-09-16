<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { Mail, Lock, Eye, EyeOff } from "lucide-vue-next";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const loading = ref(false);
const router = useRouter();

const handleLogin = () => {
  if (!email.value) {
    alert("Veuillez saisir votre adresse e-mail");
    return;
  }
  if (!password.value) {
    alert("Veuillez saisir votre mot de passe");
    return;
  }

  loading.value = true;

  localStorage.setItem("user", JSON.stringify({ name: "Joshua", email: "test@mail.com" }));

  setTimeout(() => {
    loading.value = false;
    router.push("/");
  }, 1500);
};

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const handleSignupRedirect = () => {
  alert("Redirection vers la page d'inscription");
};

const handleForgotPassword = () => {
  alert("Redirection vers la récupération de mot de passe");
};
</script>

<template>
  <div class="container">
    <header>
      <h1>Fambolena</h1>
      <div class="subtitle">Approfondissez Vos Connaissances</div>
    </header>

    <div class="form-container">
      <div class="welcome-message">
        <div class="welcome-title">Votre savoir vous attend</div>
        <div class="welcome-text">Identifiez-vous pour continuer à progresser</div>
      </div>

<div class="input-group">
      <label>
        <Mail class="icon" /> E-mail
      </label>
      <input 
        type="email" 
        v-model="email" 
        placeholder="exemple@email.com" 
      />
      <Mail class="input-icon" />
    </div>

    <!-- Password -->
    <div class="input-group">
      <label>
        <Lock class="icon" /> Mot de passe
      </label>
      <input 
        :type="showPassword ? 'text' : 'password'" 
        v-model="password" 
        placeholder="Votre mot de passe" 
      />
      <component 
        :is="showPassword ? EyeOff : Eye" 
        class="password-toggle" 
        @click="togglePassword" 
      />
      <Lock class="input-icon" />
    </div>
      <div class="remember-me">
        <input type="checkbox" id="remember">
        <label for="remember">Se souvenir de moi</label>
      </div>

      <div class="forgot-password">
        <a href="#" @click.prevent="handleForgotPassword">Mot de passe oublié?</a>
      </div>

      <div class="divider"></div>

      <button class="login-btn" @click="handleLogin" :disabled="loading">
        <i v-if="!loading" class="fas fa-sign-in-alt"></i>
        <i v-else class="fas fa-spinner fa-spin"></i>
        {{ loading ? "Connexion..." : "Se connecter" }}
      </button>

      <div class="signup-link">
        Prêt à nous rejoindre ? <router-link to="/signup">Commencer maintenant</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Copie de ton CSS HTML, avec quelques ajustements pour Vue */

.container { max-width: 500px; width: 100%; background: white; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); overflow: hidden; }
.icon {
  width: 18px;
  height: 18px;
  margin-right: 6px;
  vertical-align: middle;
}

header { background: linear-gradient(135deg, #2ecc71, #27ae60); color: white; padding: 30px; text-align: center; }
h1 { font-size: 28px; margin-bottom: 10px; }
.subtitle { font-size: 16px; opacity: 0.9; }

.form-container { padding: 30px; }
.welcome-message { text-align: center; margin-bottom: 30px; }
.welcome-title { font-size: 20px; color: #2c3e50; margin-bottom: 10px; font-weight: 600; }
.welcome-text { color: #7f8c8d; font-size: 15px; }

.input-group { margin-bottom: 20px; position: relative; }
label { display: flex; align-items: center; font-weight: 600; color: #2c3e50; margin-bottom: 8px; }
label i { margin-right: 10px; color: #2ecc71; }
.input-group input { width: 100%; padding: 15px 15px 15px 45px; border: 1px solid #ddd; border-radius: 8px; font-size: 16px; background-color: #f8f9fa; transition: all 0.3s ease; }
.input-group input:focus { outline: none; border-color: #2ecc71; box-shadow: 0 0 0 3px rgba(46, 204, 113, 0.2); background-color: white; }

.input-icon { position: absolute; left: 15px; top: 43px; color: #7f8c8d; }
.password-toggle { position: absolute; right: 15px; top: 43px; color: #7f8c8d; cursor: pointer; }

.remember-me { display: flex; align-items: center; margin-bottom: 20px; }
.remember-me input { margin-right: 10px; accent-color: #2ecc71; }
.remember-me label { font-size: 14px; color: #7f8c8d; font-weight: normal; margin: 0; }

.forgot-password { text-align: right; margin-bottom: 25px; }
.forgot-password a { color: #3498db; text-decoration: none; font-weight: 600; font-size: 14px; }
.forgot-password a:hover { text-decoration: underline; }

.divider { height: 1px; background: linear-gradient(to right, transparent, #ddd, transparent); margin: 30px 0; }

.login-btn { display: block; width: 100%; padding: 16px; background: linear-gradient(135deg, #2ecc71, #27ae60); color: white; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; text-align: center; margin-bottom: 25px; }
.login-btn:hover { background: linear-gradient(135deg, #27ae60, #2ecc71); transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
.login-btn:disabled { cursor: not-allowed; opacity: 0.7; }

.signup-link { text-align: center; font-size: 15px; color: #7f8c8d; }
.signup-link a { color: #2ecc71; text-decoration: none; font-weight: 700; }
.signup-link a:hover { text-decoration: underline; }

@media (max-width: 600px) {
  header { padding: 20px; }
  h1 { font-size: 24px; }
  .form-container { padding: 20px; }
}
</style>
