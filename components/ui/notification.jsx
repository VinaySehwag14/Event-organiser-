import { useContext } from "react";

import styles from "./notification.module.css";
// import NotificationContext from "../../store/notification-context";

function Notification(props) {
  //   const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;

  //   let statusClasses = "";

  //   if (status === "success") {
  //     statusClasses = styles.success;
  //   }

  //   if (status === "error") {
  //     statusClasses = styles.error;
  //   }

  //   if (status === "pending") {
  //     statusClasses = styles.pending;
  //   }

  //   const activeClasses = `${styles.notification} ${statusClasses}`;

  return (
    // <div className={activeClasses} onClick={notificationCtx.hideNotification}>
    <>
      <h2>
        {title}
        {/* hello */}
      </h2>
      <p>
        {/* hello */}
        {message}
      </p>
    </>
    // </div>
  );
}

export default Notification;
