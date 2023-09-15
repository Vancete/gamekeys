export default function Page({ params }) {
  const id = params.id;
  const jsonData = require(`../../../data/${id}.json`);

  return (
    <>
      <img src={jsonData.image}></img>
      <h1>
        This is the {jsonData.name} page, the game is made by{" "}
        {jsonData.publisher[0].name}
      </h1>
    </>
  );
}
