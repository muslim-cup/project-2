<template>
  <div class="container">
    <app-alert-vue
    v-if="alert"
    text="Это очень важное сообщение будьте бдительны"
    title="Это важно!"
    type="danger"
    @close="alert = false"
    closable
    >
    </app-alert-vue>
    
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? "Скрыть":"Показать" }} сообщение</button>
    </div>
    <app-block-vue></app-block-vue>
  </div>
</template>

<script>
import AppAlertVue from './components/AppAlert.vue'
import AppBlockVue from './components/AppBlock.vue'
import alertMixin from './mixin/alertMixin';
export default {

components: {AppAlertVue,AppBlockVue},
mixins: [alertMixin]
}
</script>

