<template>
  <div class="w-full bg-white my-6 rounded shadow">
    <div class="flex p-4 space-x-3">
      <div class="w-32">
        <img src="src/assets/images/auth_background.png" class="object-cover overflow-visible rounded" alt="">
      </div>
      <div class="flex flex-col space-y-1">
        <div>
          <button class="btn btn-outline">Uploader un nouveau fichier</button>
        </div>
        <div>
          <p>
            Fichier acceper : jpg <br>
            Taille maximal : 2 mo
          </p>
        </div>
      </div>
    </div>
    <div class="p-4">
      <div class="">
        <div class="grid grid-cols-3 gap-3">
          <div class="form-groups">
            <label for="email" class="label">Email</label>
            <input type="email" name="email" id="email"
                   class="form-control" placeholder="Email" required>
          </div>
          <div class="form-groups">
            <label for="firstName" class="label">Noms</label>
            <input type="text" name="firstName" id="firstName"
                   class="form-control" placeholder="Prenoms" required>
          </div>
          <div class="form-groups">
            <label for="lastName" class="label">Noms</label>
            <input type="text" name="lastName" id="lastName"
                   class="form-control" placeholder="Noms" required>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div class="form-groups">
            <label for="password" class="label">Mot de passe</label>
            <input type="password" name="password" id="password"
                   class="form-control" placeholder="Mot de passe" required>
          </div>
          <div class="form-groups">
            <label for="phoneNumber" class="label">Numéro de téléphone</label>
            <input type="tel" name="phoneNumber" id="phoneNumber"
                   class="form-control" placeholder="Numéro de téléphone" required>
          </div>
        </div>
        <div class="w-full flex items-center justify-end my-3">
          <button class=" btn rounded bg-nav-black-100">Mettre a jour</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdateProfilsForm"
};
</script>

<style scoped>

</style>
