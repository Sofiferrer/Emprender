import { Figure } from "react-bootstrap";
import styles from "./Dashboard.module.css";

interface DashboardProps {
  icon: string;
  text: string;
  onClick: () => void;
}

function DashboardOption({ icon, text, onClick }: DashboardProps) {
  return (
    <Figure onClick={onClick}>
      <Figure.Image width={170} height={170} alt="Action icon" src={icon} />
      <Figure.Caption>{text}</Figure.Caption>
    </Figure>
  );
}

export default DashboardOption;
