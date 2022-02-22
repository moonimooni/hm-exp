<template>
  <div>
    <h1>Sample Page</h1>
    <h3>👇🏻 check API Response</h3>
    <message-interface v-model="message" />
  </div>
</template>

<script>
import MessageInterface from '../../components/message-interface';

export default {
  name: 'sample-message',
  components: {
    MessageInterface,
  },
  data() {
    return {
      message: '',
    };
  },
};
</script>
