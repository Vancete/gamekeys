export default function Page({ params }) {
  const id = params.id;
  const jsonData = require(`../../../data/${id}.json`);

  const { publisher, author } = jsonData;
  const company = publisher || author || [{ name: "Unknown" }];

  return (
    <>
      <img src={jsonData.image}></img>
      <h1>
        This is the {jsonData.name} page, the game is made by {company[0].name}
      </h1>
    </>
  );
}
