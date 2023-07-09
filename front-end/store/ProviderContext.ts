import React from "react";

const ProviderContext = React.createContext({
  provider: null,
  setProvider: (provider: unknown) => {},
});

export default ProviderContext;
