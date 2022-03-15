import style from "./error-alert.module.css";

const ErrorAlert = (props) => {
  return <div className={style.alert}>{props.children}</div>;
};

export default ErrorAlert;
