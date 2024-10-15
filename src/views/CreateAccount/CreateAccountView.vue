<template>
  <div class="main">
    <div class="login">
      <div class="content-login">
        <header>
          <img :src="logo" width="32px" height="32px" />
          <h1>Crie sua conta</h1>
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
              Criar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CreateAccountView',
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
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/login/login';
</style>
