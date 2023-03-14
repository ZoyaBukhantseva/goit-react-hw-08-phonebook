export const selectLoadingState = store => store.contacts.isLoading;
export const selectLoadingAuth = store => store.auth.isLoading;

export const selectFiltrState = store => store.filter;

export const selectErorr = store => store.contacts.error; 
