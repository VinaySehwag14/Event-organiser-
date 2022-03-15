import style from "./logisticsItem.module.css";

function LogisticsItem({ icon: Icon }) {
  return (
    <li className={style.item}>
      <span className={style.icon}>
        <Icon />
      </span>
      <span className={style.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
