import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.name;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalized = filter.toLowerCase().trim();
    return contacts.filter(
      (contact) =>
        typeof contact.name === "string" &&
        contact.name.toLowerCase().includes(normalized)
    );
  }
);
