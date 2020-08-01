export const filterUser = (state) =>
  state.user.users.filter((user) =>
    user.username
      .toLowerCase()
      .includes(state.user.filterUsername.toLowerCase()),
  );
