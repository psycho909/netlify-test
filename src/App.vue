<script setup>
import { } from "./api";
const page = ref("entry")

const changePage = (data) => {
  page.value = data
}
</script>

<template>
  <Top></Top>
  <Entry :page="page" @changePage="changePage"></Entry>
  <Doll :page="page"></Doll>
</template>
