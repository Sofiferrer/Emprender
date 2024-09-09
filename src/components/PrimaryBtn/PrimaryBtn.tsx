import { Button } from "react-bootstrap";
import styles from "./PrimaryBtn.module.css";

interface PrimaryBtnProps {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
}

function PrimaryBtn({ text, type, onClick }: PrimaryBtnProps) {
  return (
    <Button className={styles.custom_btn} type={type} onClick={onClick}>
      {text}
    </Button>
  );
}

export default PrimaryBtn;
