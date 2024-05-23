<script setup lang="ts">
const { data } = await useFetch("/api/hello");

const { data: welcome } = await useFetch("/api/welcome", {
  method: "POST",
  body: JSON.stringify({ name: "Gangan" }),
  headers: { "Content-Type": "application/json" },
});

/**
 * @summary ページを表示した際にAPIをコールする
 */
const { data: users } = await useFetch("/api/users", {
  key: "users",
});

/**
 * @summary ボタンをクリックした際にAPIをコールする
 */
const {
  data: users2,
  pending,
  error,
  refresh,
} = await useFetch("/api/users", {
  key: "users2",
  immediate: false,
  lazy: true,
});
const fetchData = async () => {
  await refresh();
};

/**
 * @summary APIをコールして取得データから必要要素のみ抽出する
 */
const { data: users3, refresh: refresh3 } = await useFetch("/api/users", {
  key: "users3",
  immediate: false,
  lazy: true,
  transform: (res) => {
    return res.map((user) => {
      return {
        name: user.name,
        email: user.email,
      };
    });
  },
});
const fetchData3 = async () => {
  await refresh3();
};
</script>

<template>
  <div>
    <div>
      <p>{{ welcome }}</p>
      <p>{{ data }}</p>
    </div>
    <div>
      <p>case1: ページ表示の際にAPIをコールする</p>
      <Table :users="users" bgColor="lightgreen" />
    </div>
    <div>
      <p>case2: ボタン1をクリックしてAPIをコールする</p>
      <button @click="fetchData">APIをコール</button>
      <p v-if="false">Loading...</p>
      <Table :users="users2" bgColor="lightblue" />
    </div>
    <div>
      <p>case3: APIをコールして取得データから必要要素のみ抽出する</p>
      <button @click="fetchData3">APIをコール)</button>
      <Table :users="users3" bgColor="lightyellow" />
    </div>
  </div>
</template>
