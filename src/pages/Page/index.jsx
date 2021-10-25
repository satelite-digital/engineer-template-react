import Card from "../../components/Card";
import Table from "../../components/Table";

const Page = () => {
  const items = [0, 1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="grid gap-4 grid-cols-3">
        {items.map((item) => (
          <Card key={item} title="Title">
            Content {item}
          </Card>
        ))}
      </div>

      <Table rows={items} />
    </>
  );
};

export default Page;
