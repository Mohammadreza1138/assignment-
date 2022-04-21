const state = {
  unTransactions: [],
  connection: null
}

const mutations = {
  setUnTransactions(state, data) {
    state.unTransactions.push(data)
  },
  clearUnTransactions(state){
    state.unTransactions = []
  },
  createWebSocket(state){
    state.connection = new WebSocket("wss://ws.blockchain.info/inv");
    if (state.connection !== null ){
      state.connection.onopen = () =>{
        console.log("successfully connected");
      }
    }
  }
}

const actions = {
  getUnTransactionsData(context, connection) {
    console.log(connection)
    connection.send(JSON.stringify({
      "op": "unconfirmed_sub",
    }))
    connection.onmessage = (event) => {
      let data = JSON.parse(event.data)
      context.commit('setUnTransactions', data.x)
    }
  },
  stopGetUnTransactions(context , connection){
    connection.close();
    context.commit('createWebSocket')
  }
}

export default {
  state,
  mutations,
  actions
}
