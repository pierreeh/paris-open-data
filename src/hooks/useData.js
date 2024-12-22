import { useQuery } from "@tanstack/react-query";

import { fetchApi } from "src/utils/api";

export function useActivitiesQuery(limit) {
  return useQuery({
    queryKey: ["data"],
    queryFn: () => fetchApi(limit),
  });
}
