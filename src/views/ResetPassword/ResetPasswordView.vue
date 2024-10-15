<template>
  <div class="main">
    <div class="login">
      <div class="content-login">
        <header>
          <h1>Encontre sua conta</h1>
        </header>
        <br />

        <div class="form-login">
          <form>
            <div class="field">
              <label for="email"
                >Insira seu email. Será enviada um link para geração de uma
                senha nova.</label
              >
              <input
                id="email"
                type="email"
                aria-describedby="emailHelp"
                placeholder="Digite seu e-mail"
              />
            </div>
            <button
              type="submit"
              class="button-yellow"
              @click.prevent="login($event)"
            >
              Enviar
            </button>
            <button
              type="submit"
              class="button-cancel"
              @click.prevent="returnlogin($event)"
            >
              Cancelar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ResetPasswordView',
  data() {
    return {
      teste: 'string',
      logo: require('@/assets/img/logo_icon.png'),
    };
  },
  methods: {
    login() {
      this.$router.push({ name: 'home' });
    },
    returnlogin() {
      this.$router.push({ name: 'login' });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/login/login';
</style>
