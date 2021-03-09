// Create a new store instance.
export default {
    state () {
      return {
        userToUpdate: false,
        userList: []
      }
    },
    mutations: {
      setUserToUpdate (state, value) {
        state.userToUpdate = value;
      },
      updateUser (state, value) {
        let index = state.userList.findIndex((u)=>u.id === value.id);
        state.userList[index] = value;
      },
      saveUsers (state, value){
        state.userList = value;
      }
    },
    actions: {
      setUserToUpdate (context, value) {
        context.commit('setUserToUpdate', value);
      },
      updateUser (context, value) {
          context.commit('updateUser', value);
      },
      saveUsers (context, value) {
          context.commit('saveUsers', value);
      }
    }
  }