import React from 'react';
import { Row, Col, Typography } from 'antd';
import './Footer.css';

const { Link } = Typography;

const Footer = () => {
  return (
    <footer className="footer">
      <Row justify="center" align="middle">
        <Col xs={{ span: 24, order: 2 }} md={{ span: 8, order: 1 }}>
          <p>© 2023 Rememories</p>
        </Col>
        <Col xs={{ span: 24, order: 1 }} md={{ span: 16, order: 2 }}>
          <div className="footer-links">
            {/* <Link href="/Get-Started">Get Started</Link> */}
            <Link href="/contact">Contact</Link>
            <Link href="/stripeCheckout">Support Us</Link>
            {/* <Link href="/privacy-policy">Privacy Policy</Link> */}
          </div>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
