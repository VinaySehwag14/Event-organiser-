import style from "./errorAlert.module.css";

const ErrorAlert = (props) => {
  return <div className={style.alert}>{props.children}</div>;
};

export default ErrorAlert;
