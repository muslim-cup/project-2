<template>
  <div class="container">
    <app-alert-vue
    v-if="alert"
    text="Это очень важное сообщение будьте бдительны"
    title="Это важно!"
    @close="alert = false"
    closable
    >
    </app-alert-vue>
    
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? "Скрыть":"Показать" }} сообщение</button>
    </div>
  </div>

</template>

<script>
import AppAlertVue from './AppAlert.vue'
import alertMixin from '@/mixin/alertMixin';
 export default {
components: {AppAlertVue},
mixins: [alertMixin]
}
</script>

