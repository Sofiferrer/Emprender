import { Button } from "react-bootstrap";
import Google from "../../assets/images/google.png";
import styles from "./GoogleBtn.module.css";

interface GoogleBtnProps {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
}

function GoogleBtn({ text, type, onClick }: GoogleBtnProps) {
  return (
    <Button className={styles.google_btn} type={type} onClick={onClick}>
      <img alt="Google auth" src={Google} className={styles.google_logo} />
      {text}
    </Button>
  );
}

export default GoogleBtn;
