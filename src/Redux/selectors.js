export const selectContacts = state => state.contacts.items;
export const selectLoader = state => state.contacts.isLoading;
export const selectIsLoading = state => state.auth;
export const selectFilter = state => state.filter;
export const selectEmail = state => state.auth.user;
export const selectIsLoadingContacts = state => state.contacts;
