import style from "./eventContent.module.css";

function EventContent(props) {
  return <section className={style.content}>{props.children}</section>;
}

export default EventContent;
