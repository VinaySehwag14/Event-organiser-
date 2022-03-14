import Link from "next/link";

const EventItem = ({ title, image, date, location, id }) => {
  //* changing date into more readable form
  const ReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  //*formating address for better reading

  const formattedAddress = location.replace(", ", "\n");

  const link = `events/${id}`;

  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <time>{ReadableDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
        <div>
          <Link href={link}>Explore Events</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
