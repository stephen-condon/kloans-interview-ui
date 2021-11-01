<template>
  <div>
    <h1>User</h1>

    <div id="user">{{ user }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class User extends Vue {
  @Prop({ required: true })
  private userId!: string;

  get user(): string {
    return `User id is: ${this.userId}`;
  }
}
</script>
