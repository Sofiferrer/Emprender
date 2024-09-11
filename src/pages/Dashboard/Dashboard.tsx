import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import styles from "./Dashboard.module.css";
function Dashboard() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <Link to={"/supplies"} className={styles.dashboard_option}>
              <p>LOGO</p>
              <p>INSUMOS</p>
            </Link>
          </Col>
          <Col>
            <Link to={"/recipes"} className={styles.dashboard_option}>
              <p>LOGO</p>
              <p>RECETAS</p>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to={"/suppliers"} className={styles.dashboard_option}>
              <p>LOGO</p>
              <p>PROVEEDORES</p>
            </Link>
          </Col>
          <Col>
            <Link to={"/production"} className={styles.dashboard_option}>
              <p>LOGO</p>
              <p>PRODUCCION</p>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to={"/purchases"} className={styles.dashboard_option}>
              <p>LOGO</p>
              <p>COMPRAS</p>
            </Link>
          </Col>
          <Col>
            <Link to={"/sales"} className={styles.dashboard_option}>
              <p>LOGO</p>
              <p>VENTAS</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
