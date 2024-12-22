import { createContext, useContext } from "react";

import { useActivitiesQuery } from "src/hooks/useData";

export const ActivitiesContext = createContext(null);

export function useActivitiesContext() {
  const activities = useContext(ActivitiesContext);
  if (!activities) throw new Error("ActivitiesContext: No value provided.");

  return activities;
}

export function ActivitiesProvider({ children }) {
  const activitiesQuery = useActivitiesQuery();

  if (activitiesQuery.isPending) {
    return <div>Loading...</div>;
  }

  if (activitiesQuery.isError) {
    return <div>{activitiesQuery.error}</div>;
  }

  return (
    <ActivitiesContext.Provider value={activitiesQuery.data}>
      {children}
    </ActivitiesContext.Provider>
  );
}
