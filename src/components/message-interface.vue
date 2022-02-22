<template>
  <div>
    <form>
      <input type="text" v-model="message" />
      <button type="submit" @click.prevent="onSendMessage">SEND MESSAGE</button>
    </form>
    <h2>
      {{ returnMessage }}
    </h2>
  </div>
</template>

<script>
import api from '../plugins/api';

export default {
  name: 'message-interface',
  props: ['value'],
  data() {
    return {
      returnMessage: '',
    };
  },
  computed: {
    params() {
      return {
        message: this.message,
      };
    },
    message: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    async onSendMessage() {
      try {
        const apiResponse = await api.sample.get({ params: this.params });
        const { sample } = apiResponse?.data;
        this.returnMessage = sample;
        this.message = '';
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
