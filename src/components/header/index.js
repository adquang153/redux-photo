import React from 'react';
import { Container, NavLink, Col, Row } from 'reactstrap';
import './index.scss';

export default function index() {
    return (
        <header>
            <Container>
                <Row className="test justify-content-between align-items-center">
                    <Col xs="auto">
                        <NavLink href="/" className="brand">Photo App</NavLink>
                    </Col>
                    <Col xs="auto">
                        <NavLink href="/hehe">Redux Project</NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
