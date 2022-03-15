import style from "./logisticsItem.module.css";

const LogisticsItem = (props) => {
  const { icon: Icon } = props;
  return (
    <li className={style.item}>
      <span className={style.icon}>
        <Icon />
      </span>
      <span className={style.content}>{props.children}</span>
    </li>
  );
};

export default LogisticsItem;
