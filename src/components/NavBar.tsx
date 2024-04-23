"use client"

import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();

    return (
        <Navbar bg="secondary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} href="/productList">
                    Case Mind Group
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav>
                        <Nav.Link as={Link} href="/productList" active={pathname === "/productList"}>Produtos</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} href="/addProduct" active={pathname === "/addProduct"}>Adicionar Produto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="justify-content-end">
                        <Nav.Link as={Link} href="/" active={pathname === "/logout"}>Sair</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}