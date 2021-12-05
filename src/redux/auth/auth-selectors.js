const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getFetchCurrentUser = state => state.auth.isFetchingCurrent;

export { getIsLoggedIn, getUserName, getFetchCurrentUser };
