import { CORE_CONCEPTS } from "../data";

function CoreConcept() {
  return (
    <section id="core-concepts">
      <h1>Core Concepts</h1>
      <ul>
        {/* <li>
          <img src={CORE_CONCEPTS[0].image} alt={CORE_CONCEPTS[0].title} />
          <h3>{CORE_CONCEPTS[0].title}</h3>
          <p>{CORE_CONCEPTS[0].description}</p>
        </li>
        <li>
          <img src={CORE_CONCEPTS[1].image} alt={CORE_CONCEPTS[1].title} />
          <h3>{CORE_CONCEPTS[1].title}</h3>
          <p>{CORE_CONCEPTS[1].description}</p>
        </li>
        <li>
          <img src={CORE_CONCEPTS[2].image} alt={CORE_CONCEPTS[2].title} />
          <h3>{CORE_CONCEPTS[2].title}</h3>
          <p>{CORE_CONCEPTS[2].description}</p>
        </li> */}
        {CORE_CONCEPTS.map((concept) => (
          <li>
            <img src={concept.image} alt={concept.title} />
            <h3>{concept.title}</h3>
            <p>{concept.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CoreConcept;
