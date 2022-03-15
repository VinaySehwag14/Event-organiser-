import style from "./eventSummary.module.css";

function EventSummary({ title }) {
  return (
    <section className={style.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
