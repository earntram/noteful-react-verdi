import React from 'react';

const AppContext = React.createContext({
  folders: [],
  notes: [],
  onDeleteNote: () => {},
  updateNoteState: () => {},
  addFolder: () => {},
  addError: () => {}
});

export default AppContext;