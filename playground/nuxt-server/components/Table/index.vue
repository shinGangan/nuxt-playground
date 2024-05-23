<script setup lang="ts">
import type { User } from "~/types/user";

const { users, bgColor } = defineProps<{
  users: Partial<User>[];
  bgColor: string;
}>();
</script>

<template>
  <div :style="`background-color: ${bgColor}; padding: 1.5rem 1rem`">
    <table style="margin-top: 1.5rem">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.name">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
    <div></div>
  </div>
</template>

<style>
thead,
tfoot {
  background-color: #2c5e77;
  color: #fff;
}

tbody {
  background-color: #e4f0f5;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

td {
  text-align: center;
}
</style>
