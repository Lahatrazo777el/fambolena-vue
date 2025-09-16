<script setup>
import { ref } from 'vue';

const profitDate = ref('2025-09-15');
const amount = ref(0);
const note = ref('');
const recurrent = ref(false);

const filter = ref('month');
const history = ref([]); // Ici on stockera les bénéfices

// Ajouter un bénéfice
const addProfit = () => {
  const newProfit = { date: profitDate.value, amount: amount.value, note: note.value, recurrent: recurrent.value };
  history.value.push(newProfit);
  alert('Bénéfice ajouté avec succès!');
  // Reset fields si nécessaire
  amount.value = 0;
  note.value = '';
  recurrent.value = false;
};

// Synchroniser
const syncHistory = () => {
  alert('Synchronisation terminée!');
  amount.value = 20000
  note.value = 'Test'
};

// Toggle récurrent
const toggleRecurrent = () => {
  recurrent.value = !recurrent.value;
};
</script>

<template>
  <div class="container">
    <header>
      <h1><i class="fas fa-book"></i> Carnet de bénéfices</h1>
    </header>

    <div class="section">
      <div class="input-group">
        <label for="profit-date"><i class="fas fa-calendar-alt"></i> Date du bénéfice</label>
        <input type="date" id="profit-date" v-model="profitDate" class="date-input">
      </div>
    </div>

    <div class="section">
      <h2 style="margin-bottom: 15px; color: #2c3e50; display: flex; align-items: center;">
        <i class="fas fa-coins"></i> Montant du bénéfice
      </h2>
      <div class="amount-display">
        <input type="text" class="amount-value" v-model="amount">
        <div class="amount-currency">Ar</div>
      </div>
    </div>

    <div class="section">
      <div class="input-group">
        <label for="notes"><i class="fas fa-sticky-note"></i> Note (facultatif)</label>
        <textarea id="notes" v-model="note" placeholder="Ex : Vente au marché local..."></textarea>
      </div>
    </div>

    <div class="section">
      <div class="recurrent-toggle" @click="toggleRecurrent">
        <div class="toggle-icon" :style="{ backgroundColor: recurrent ? '#2ecc71' : '#3498db' }">
          <i :class="recurrent ? 'fas fa-check' : 'fas fa-redo'"></i>
        </div>
        <div class="toggle-text">Marquer comme récurrent</div>
      </div>

      <button class="add-button" @click="addProfit">
        <i class="fas fa-plus-circle"></i> Ajouter au carnet
      </button>
    </div>

    <div class="section">
      <div class="history-header">
        <div class="history-title">
          <i class="fas fa-history"></i> Historique des bénéfices
        </div>
        <div class="history-filters">
          <button class="filter-button" :class="{ active: filter==='month' }" @click="filter='month'">Mois</button>
          <button class="filter-button" :class="{ active: filter==='all' }" @click="filter='all'">Tous</button>
        </div>
      </div>

      <div v-if="history.length === 0" class="history-placeholder">
        <i class="fas fa-receipt" style="font-size: 40px; margin-bottom: 15px; color: #ddd;"></i>
        <p>Aucun bénéfice enregistré pour le moment</p>
      </div>

      <div v-else>
        <div v-for="item in history" :key="item.date + item.amount" class="event-card">
          <h3 class="event-title">{{ item.amount }} Ar</h3>
          <div class="event-type"><i class="fas fa-calendar-alt"></i> {{ item.date }}</div>
          <div class="event-time"><i class="fas fa-sticky-note"></i> {{ item.note || '—' }}</div>
          <div v-if="item.recurrent" style="color: #2ecc71; font-weight: 600;">Récurrent</div>
        </div>
      </div>

      <button class="sync-button" @click="syncHistory">
        <i class="fas fa-sync-alt"></i> Synchroniser
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Copier le CSS original de ton fichier profit.html */
.container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            overflow: hidden;
        }
        
        header {
            background: linear-gradient(135deg, #3498db, #2980b9);
            color: white;
            padding: 25px;
            text-align: center;
        }
        
        h1 {
            font-size: 24px;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        h1 i {
            margin-right: 10px;
        }
        
        .section {
            padding: 20px 25px;
            border-bottom: 1px solid #eaecef;
        }
        
        .section:last-child {
            border-bottom: none;
        }
        
        .input-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
        }
        
        label i {
            margin-right: 10px;
            color: #3498db;
        }
        
        .date-input {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            background-color: #f8f9fa;
        }
        
        .amount-display {
            text-align: center;
            padding: 25px 0;
            background-color: #f8f9fa;
            border-radius: 8px;
            margin: 15px 0;
        }
        
        .amount-value {
            font-size: 42px;
            font-weight: 700;
            color: #2c3e50;
        }
        
        .amount-currency {
            font-size: 18px;
            color: #7f8c8d;
            margin-top: 5px;
        }
        
        textarea {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            background-color: #f8f9fa;
            resize: vertical;
            min-height: 100px;
        }
        
        .recurrent-toggle {
            display: flex;
            align-items: center;
            margin: 20px 0;
            padding: 15px;
            background-color: #e8f4fc;
            border-radius: 8px;
            cursor: pointer;
        }
        
        .toggle-icon {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: #3498db;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            color: white;
        }
        
        .toggle-text {
            font-weight: 600;
            color: #2c3e50;
        }
        
        .add-button {
            display: block;
            width: 100%;
            padding: 15px;
            background: linear-gradient(135deg, #3498db, #2980b9);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: center;
        }
        
        .add-button:hover {
            background: linear-gradient(135deg, #2980b9, #3498db);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .history-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e8f4fc;
        }
        
        .history-title {
            font-size: 20px;
            color: #2c3e50;
            display: flex;
            align-items: center;
        }
        
        .history-title i {
            margin-right: 10px;
            color: #3498db;
        }
        
        .history-filters {
            display: flex;
            gap: 10px;
        }
        
        .filter-button {
            padding: 8px 15px;
            background-color: #e8f4fc;
            color: #3498db;
            border: none;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
        }
        
        .filter-button.active {
            background-color: #3498db;
            color: white;
        }
        
        .sync-button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 15px;
            background-color: #f8f9fa;
            color: #2c3e50;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 20px;
        }
        
        .sync-button i {
            margin-right: 10px;
            color: #3498db;
        }
        
        .sync-button:hover {
            background-color: #e8f4fc;
        }
        
        .history-placeholder {
            text-align: center;
            padding: 40px 20px;
            color: #7f8c8d;
            font-style: italic;
            background-color: #f8f9fa;
            border-radius: 8px;
            margin-top: 15px;
        }
        
        @media (max-width: 600px) {
            header {
                padding: 20px;
            }
            
            h1 {
                font-size: 20px;
            }
            
            .section {
                padding: 15px 20px;
            }
            
            .amount-value {
                font-size: 36px;
            }
        }
</style>
