<template>
  <div class="main">
    <div class="login">
      <div class="content-login">
        <header>
          <img :src="logo" width="32px" height="32px" />
          <h1>La bella Pizza</h1>
        </header>
        <br />

        <div class="form-login">
          <form>
            <div class="field">
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                aria-describedby="emailHelp"
                placeholder="Digite seu e-mail"
              />
            </div>
            <div class="field">
              <label for="password">Senha</label>
              <input
                id="password"
                type="password"
                placeholder="Digite sua senha"
              />
            </div>
            <button
              type="submit"
              class="button-yellow"
              @click.prevent="login($event)"
            >
              Entrar
            </button>
          </form>
        </div>

        <div class="accountoptions">
          <a @click.prevent="resetpassword">esqueci a senha</a>
          <a @click.prevent="createaccount">não tenho conta</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginView',
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
    resetpassword() {
      this.$router.push({ name: 'resetpassword' });
    },
    createaccount() {
      this.$router.push({ name: 'createaccount' });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/login/login';
</style>
