<template>
  <nav class="bg-green-700 text-white p-4 flex justify-between items-center shadow-md">
    <h1 class="text-xl font-bold">🌱 AgroLearn</h1>
    <div class="space-x-4">
      <RouterLink to="/" class="hover:underline">Accueil</RouterLink>
      <RouterLink to="/calendar" class="hover:underline">Calendrier</RouterLink>
      <RouterLink to="/signin" class="hover:underline">Connexion</RouterLink>
      <RouterLink to="/signup" class="hover:underline">Inscription</RouterLink>
        <RouterLink to="/tutorials" class="hover:underline">Conseil</RouterLink>

        <RouterLink to="/profits" class="hover:underline">Bénéfices</RouterLink>

        <RouterLink to="/posts" class="hover:underline">Postes</RouterLink>
    </div>
  </nav>
</template>
