import React from "react";

const ProviderContext = React.createContext({
  provider: null,
  setProvider: (provider: any) => {},
});

export default ProviderContext;
