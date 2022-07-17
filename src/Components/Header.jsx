import React, { useContext } from 'react';
import { postsListContext } from '../Contexts/PostsListContext';
import SwitchThemeIcon from './SwitchThemeIcon';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import PopUpForm from './PopUpForm';
import SearchBar from './SearchBar';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
  const { setModalShow } = useContext(postsListContext);

  const success = function () {
    NotificationManager.success('You added A New Post', 'Success message');
  };
  function onShow() {
    setModalShow(true);
  }

  return (
    <div className="Header--Wrraper">
      <Navbar expand="lg">
        <Container fluid>
          <div className="image">
            <Link to={'/'}>
              <img
                style={{ width: '7rem' }}
                src="https://www.lavista.com.eg/public/frontend/imgs/logo.png"
                alt="Lavista Logo"
              />
            </Link>
          </div>
          <Dropdown style={{ paddingRight: '1.5rem' }}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              منظومة الافراد
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item style={{ textAlign: 'center' }} href="#/action-1">
                افراد قوة القرية
              </Dropdown.Item>
              <Dropdown.Item style={{ textAlign: 'center' }} href="#/action-2">
                افراد شطب من القوة
              </Dropdown.Item>
              <Dropdown.Item style={{ textAlign: 'center' }} href="#/action-3">
                يومية عددية للقرية
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
      <PopUpForm show={() => onShow()} success={success} />
      <NotificationContainer />
    </div>
  );
}

export default Header;
