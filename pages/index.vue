<template>
  <v-container>
    <v-btn color="black" class="white--text mb-5" to="/windows">go to the first practice</v-btn>
    <br>
    <v-btn color="green" class="white--text" @click="getUnTransactionsData(connection)">Launch</v-btn>
    <v-btn color="orange" class="white--text" @click="clearUnTransactionsAndStop">Reset</v-btn>
    <v-btn color="red" class="white--text" @click="stopGetUnTransactions(connection)">Stop</v-btn>
    <table class="table-primary table-primary--grey row-space" v-if="unTransactions.length !== 0">
      <thead>
      <tr>
        <th class="light-grey-text">#</th>

        <th class="light-grey-text">value</th>

        <th class="light-grey-text">address</th>

        <th class="light-grey-text">hash</th>


      </tr>
      </thead>

      <tbody>
      <slot v-for="(unTransaction , index) in unTransactions">
        <tr
          class="table-row table-row--grey"
        >
          <td>
            <div
              class="table-data text-center grey-text"
            >
              {{ index + 1 }}
            </div>
          </td>

          <td class="pr-3" width="330">
            <div class="d-flex align-center justify-center">
              <div class="pr-3">
                <div
                  class="table-data pa-1"
                  v-for="out in unTransaction.out"
                >
                  {{ out.value / 100000000 + "BTC" }}
                </div>
              </div>
            </div>
          </td>

          <td>
            <div
              class="table-data text-center grey-text pa-1"
              v-for="out in unTransaction.out"
            >
              {{ out.addr }}
            </div>
          </td>

          <td>
            <div
              class="table-data text-center"
            >
              {{ unTransaction.hash }}
            </div>
          </td>

        </tr>
      </slot>
      </tbody>
    </table>
  </v-container>
</template>

<script>
import {mapState, mapActions , mapMutations} from "vuex"

export default {
  name: 'IndexPage',

  methods: {
    ...mapActions({
      getUnTransactionsData: "UnconfirmedTransaction/getUnTransactionsData",
      stopGetUnTransactions: "UnconfirmedTransaction/stopGetUnTransactions"
    }),
    ...mapMutations({
      clearUnTransactions : "UnconfirmedTransaction/clearUnTransactions",
      createWebSocket:"UnconfirmedTransaction/createWebSocket"
    }),
    clearUnTransactionsAndStop(){
      this.stopGetUnTransactions(this.connection)
      this.clearUnTransactions()
    }

  },
  computed: {
    ...mapState({
      unTransactions: state => state.UnconfirmedTransaction.unTransactions,
      connection: state => state.UnconfirmedTransaction.connection
    })
  },
  mounted() {
    this.createWebSocket();
  }
}
</script>

<style lang="scss">
@import "../assets/variables.scss";
</style>
