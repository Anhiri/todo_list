export default{
  isLoaded: (state) => state.isLoaded,
  listTodos: (state) => state.todos,
  totalTodos: (state) => state.todos.length,
  listUsers: (state) => state.users,
  // isLoggedIn: (state) => state.isLoggedIn,
}