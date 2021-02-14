<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
    <div
      class="card-header border-0"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">
            {{ title }}
          </h3>
        </div>
        <div class="col text-right">
          <base-button type="primary" size="sm" @click="fetchJoke"
            >Add Joke</base-button
          >
          <base-button type="primary" size="sm" @click="removeAllJokes"
            >Delete All Jokes</base-button
          >
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark' : ''"
        :thead-classes="type === 'dark' ? 'thead-dark' : 'thead-light'"
        tbody-classes="list"
        :data="jokes"
      >
        <template slot="columns">
          <th>id</th>
          <th>Joke</th>
          <th></th>
        </template>

        <template slot-scope="{ row }">
          <td class="budget">
            {{ row.id }}
          </td>
          <td class="budget">
            {{ row.joke }}
          </td>
        </template>
      </base-table>
    </div>

    <div
      class="card-footer d-flex justify-content-end"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <!-- <base-pagination total="30"></base-pagination> -->
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "projects-table",
  data() {
    return {
      data: [],
      loading: false,
    };
  },
  props: {
    type: {
      type: String,
    },
    title: String,
  },

  computed: {
    ...mapState({
      jokes: (state) => state.jokes.items,
    }),

    ...mapGetters("jokes", {
      items: "getLocalStorageJokes",
    }),
  },
  methods: {
    ...mapActions({
      fetchJoke: "jokes/fetchJoke",
      removeAllJokes: "jokes/removeAllJokes",
    }),
  },
};
</script>
<style>
</style>
