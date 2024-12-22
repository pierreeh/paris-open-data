const baseApi =
  "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records";

export async function fetchApi(limit = 20) {
  return fetch(`${baseApi}?limit=${limit}`).then((res) => res.json());
}
