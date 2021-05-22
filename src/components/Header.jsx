import logo from '../logo.svg';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';

export default function Header(props) {
  const renderTooltip = (props) => (
    <Tooltip id="badge-tooltip" {...props}>
      You have {localStorage.length - 1} lists with questions
    </Tooltip>
  );

  return (
    <Navbar bg="info" expand="lg" className="py-0 full-width" sticky="top">
      <LinkContainer to="/">
        {/* logo */}
        <Navbar.Brand className="text-white">
          <img src={logo} width="60" height="60" className="d-inline-block" alt="questionnaire logo" />
          The Questionnaire
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Navbar.Text>
          <Nav className="mr-auto">
            <LinkContainer to="/lists">
              <Nav.Link>
                <span>Lists</span>
                <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                  <Badge className="counter-badge" variant="warning">
                    {props.size}
                  </Badge>
                </OverlayTrigger>
              </Nav.Link>
            </LinkContainer>

            {/* vertial separator */}
            <Nav.Link>
              <li>&#124;</li>
            </Nav.Link>

            <LinkContainer to="/new">
              <Nav.Link>Create New</Nav.Link>
            </LinkContainer>

            {/* vertial separator */}
            <Nav.Link>
              <li>&#124;</li>
            </Nav.Link>

            <LinkContainer to="/import">
              <Nav.Link>Import</Nav.Link>
            </LinkContainer>
            {/* vertial separator */}
            <Nav.Link>
              <li>&#124;</li>
            </Nav.Link>
            <Form>
              <Container style={{ padding: '0.5rem 1rem' }}>
                <label style={{ marginRight: '0.5rem' }}>UA</label>
                <Form.Check id="lang-toggler" type="switch" label="" onChange={props.languageHandler} />
                <label>EN</label>
              </Container>
            </Form>
          </Nav>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
