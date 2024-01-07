<template>
  <ag-grid-vue style="height: 500px" class="ag-theme-alpine" :columnDefs="colDefs" :rowData="rowData"></ag-grid-vue>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { AgGridVue } from "ag-grid-vue3"; // Vue Grid Logic

const rowData = ref([
  { mission: "Voyager", company: "NASA", location: "Cape Canaveral", date: "1977-09-05", rocket: "Titan-Centaur ", price: 86580000, successful: true },
  { mission: "Apollo 13", company: "NASA", location: "Kennedy Space Center", date: "1970-04-11", rocket: "Saturn V", price: 3750000, successful: false },
  { mission: "Falcon 9", company: "SpaceX", location: "Cape Canaveral", date: "2015-12-22", rocket: "Falcon 9", price: 9750000, successful: true }
]);

const colDefs = ref([
  { field: "mission" },
  { field: "company" },
  { field: "location" },
  { field: "date" },
  { field: "price" },
  { field: "successful" },
  { field: "rocket" }
]);
</script>

<style>
@import "ag-grid-community/styles/ag-grid.css";
@import "ag-grid-community/styles/ag-theme-alpine.css";
</style>