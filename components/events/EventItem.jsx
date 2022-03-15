import Link from "next/link";
import AddressIcon from "../icons/addressIcon";
import ArrowIcon from "../icons/arrowIcon";
import DateIcon from "../icons/dateIcon";
import Button from "../ui/button";
import style from "./eventItem.module.css";

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
    <li className={style.item}>
      <img src={"/" + image} alt={title} />
      <div className={style.content}>
        <div className={style.summary}>
          <h2>{title}</h2>
        </div>
        <div className={style.date}>
          <DateIcon />
          <time>{ReadableDate}</time>
        </div>
        <div className={style.address}>
          <AddressIcon />
          <address>{formattedAddress}</address>
        </div>
        <div className={style.actions}>
          <Button link={link}>
            <span>Explore Event</span>
            <span>
              <ArrowIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
