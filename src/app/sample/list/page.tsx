import List from "./list";

const getSomething = async () => {
  return new Promise((resolve) => setTimeout(resolve, 3000));
};

export default async function ListPage() {
  await getSomething();

  return (
    <div>
      <List />
    </div>
  );
}