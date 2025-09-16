<script setup>
import { Eye, EyeClosed, Lock, Mail, PhoneIcon, UserIcon } from "lucide-vue-next";
import { ref } from "vue";
import { useRouter } from "vue-router";

const fullname = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const confirmPassword = ref("");
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const terms = ref(false);
const loading = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

const handleSignup = () => {
  if (!fullname.value) return alert("Veuillez saisir votre nom complet");
  if (!email.value) return alert("Veuillez saisir votre adresse e-mail");
  if (!phone.value) return alert("Veuillez saisir votre numéro de téléphone");
  if (!password.value) return alert("Veuillez créer un mot de passe");
  if (password.value !== confirmPassword.value) return alert("Les mots de passe ne correspondent pas");
  if (!terms.value) return alert("Veuillez accepter les conditions d'utilisation");

  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    alert("Compte créé avec succès! Bienvenue sur Fambolena!");
  }, 1500);
};

const router = useRouter();

const goToLogin = () => {
  router.push('/signin')
};
</script>

<template>
<div class="container">
    <header>
      <h1>Joignez Fambolena</h1>
      <div class="subtitle">Optimiser vos rendements</div>
    </header>

    <div class="form-container">
      <div class="form-section">
        <div class="section-title">
          <UserIcon/> Créer un compte
        </div>
        <p style="color: #7f8c8d; margin-bottom: 20px;">La création d'un compte est obligatoire</p>

        <div class="input-group">
          <label><UserIcon/> Nom complet</label>
          <input type="text" v-model="fullname" placeholder="Votre nom complet">
          <UserIcon class=" input-icon"></UserIcon>
        </div>

        <div class="input-group">
          <label><Mail/> E-mail</label>
          <input type="email" v-model="email" placeholder="exemple@email.com">
          <Mail class=" input-icon"></Mail>
        </div>

        <div class="input-group">
          <label><PhoneIcon/> Numéro de téléphone</label>
          <input type="tel" v-model="phone" placeholder="+261 XX XX XXX XX">
          <PhoneIcon class="input-icon"></PhoneIcon>
        </div>

        <div class="input-group">
          <label><Lock/> Mot de passe</label>
          <input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="Créez un mot de passe sécurisé">
          <i class="fas password-toggle" :class="showPassword ? 'fa-eye-slash' : 'fa-eye'" @click="togglePassword"></i>
          <Lock class="input-icon"></Lock>
        </div>

        <div class="input-group">
          <label><Lock/> Confirmez votre mot de passe</label>
          <input :type="showConfirmPassword ? 'text' : 'password'" v-model="confirmPassword" placeholder="Confirmez votre mot de passe">
          <i class="fas password-toggle" :class="showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'" @click="toggleConfirmPassword"></i>
          <Lock class=" input-icon"></Lock>
        </div>

        <div class="checkbox-group">
          <input type="checkbox" v-model="terms" id="terms">
          <label for="terms" class="checkbox-label">
            En vous inscrivant, vous acceptez nos
            <a href="#">Conditions d'utilisation</a> et notre
            <a href="#">Politique de confidentialité</a>
          </label>
        </div>
      </div>

      <div class="divider"></div>

      <button class="submit-btn" @click="handleSignup" :disabled="loading">
        <i v-if="!loading" class="fas fa-user-plus"></i>
        <i v-else class="fas fa-spinner fa-spin"></i>
        {{ loading ? "Création..." : "Créer mon compte" }}
      </button>

      <div class="login-link">
        Vous avez déjà un compte ? <a href="#" @click.prevent="goToLogin">Se connecter</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Copie ton CSS HTML et adapte si nécessaire */

.container { max-width: 500px; width: 100%; background: white; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); overflow: hidden; }
header { background: linear-gradient(135deg, #2ecc71, #27ae60); color: white; padding: 30px; text-align: center; }
h1 { font-size: 28px; margin-bottom: 10px; }
.subtitle { font-size: 16px; opacity: 0.9; }

.form-container { padding: 30px; }
.form-section { margin-bottom: 25px; }
.section-title { font-size: 18px; color: #2c3e50; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #e8f5e9; display: flex; align-items: center; }
.section-title i { margin-right: 10px; color: #2ecc71; }

.input-group { margin-bottom: 20px; position: relative; }
label { display: flex; align-items: center; font-weight: 600; color: #2c3e50; margin-bottom: 8px; }
label i { margin-right: 10px; color: #2ecc71; }
.input-group input { width: 100%; padding: 15px 15px 15px 45px; border: 1px solid #ddd; border-radius: 8px; font-size: 16px; background-color: #f8f9fa; transition: all 0.3s ease; }
.input-group input:focus { outline: none; border-color: #2ecc71; box-shadow: 0 0 0 3px rgba(46,204,113,0.2); background-color: white; }

.input-icon { position: absolute; left: 15px; top: 43px; color: #7f8c8d; }
.password-toggle { position: absolute; right: 15px; top: 43px; color: #7f8c8d; cursor: pointer; }

.checkbox-group { display: flex; align-items: flex-start; margin: 25px 0; }
.checkbox-group input { margin-right: 15px; margin-top: 5px; accent-color: #2ecc71; }
.checkbox-label { font-size: 14px; color: #7f8c8d; line-height: 1.5; }
.checkbox-label a { color: #2ecc71; text-decoration: none; font-weight: 600; }
.checkbox-label a:hover { text-decoration: underline; }

.divider { height: 1px; background: linear-gradient(to right, transparent, #ddd, transparent); margin: 30px 0; }

.submit-btn { display: block; width: 100%; padding: 16px; background: linear-gradient(135deg, #2ecc71, #27ae60); color: white; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; text-align: center; margin-bottom: 25px; }
.submit-btn:hover { background: linear-gradient(135deg, #27ae60, #2ecc71); transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
.submit-btn:disabled { cursor: not-allowed; opacity: 0.7; }

.login-link { text-align: center; font-size: 15px; color: #7f8c8d; }
.login-link a { color: #2ecc71; text-decoration: none; font-weight: 600; }
.login-link a:hover { text-decoration: underline; }

@media (max-width: 600px) {
  header { padding: 20px; }
  h1 { font-size: 24px; }
  .form-container { padding: 20px; }
}
</style>