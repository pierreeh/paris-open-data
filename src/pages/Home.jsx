import { useContext } from "react";
import { ActivitiesContext } from "src/contexts/GetActivitiesContext";

export default function Home() {
  const data = useContext(ActivitiesContext);

  return (
    <section>
      <ul>
        {data.results.map((r) => (
          <p key={r.id}>{r.title}</p>
        ))}
      </ul>
    </section>
  );
}
