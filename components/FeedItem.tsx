import Card from "./Card";

function FeedItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card>
      <h2 className="text-2xl mb-2">{title} </h2>
      <h3 className="text-lightGrey font-medium text-sm">{description}</h3>
    </Card>
  );
}

export default FeedItem;
