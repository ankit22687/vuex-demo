<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      <div class="row"></div>
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row mt-5">
        <div class="col">
          <jokes-table type="dark" title="Jokes"></jokes-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import JokesTable from "./Tables/JokesTable";
export default {
  name: "tables",
  components: {
    JokesTable,
  },
};
</script>
<style></style>
