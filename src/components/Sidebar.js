import React from 'react';
import styled from 'styled-components';
import './Sidebar.css'
import logo from '../assets/ravengreenlogo.png'
import { FiHome, FiSettings, FiUser, FiFileText } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
width:20rem;
  height: 100vh;
  background-color: #062b30;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.2rem 0;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2.4rem;
  margin-bottom: 3rem;
  align-items: center;

`;

const MenuContainer = styled.div`
  flex-grow: 1;
  margin-top:1.5rem;
 margin-left: 1.3rem;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
  padding:1.4rem;
  padding-bottom:1.4rem;

  &:hover {
    background: linear-gradient(269.91deg, rgba(255, 255, 255, 0.1) 22.13%, rgba(255, 255, 255, 0) 96.37%);
    border-right: 5px solid white;
  }

  svg {
    margin-right: 1rem;
  }
`;

const UserSection = styled.div`
  display: flex;
  justify-content: space-between;
  border: 0.5px solid #0B8376;
  padding-top:.5rem;
  padding-bottom:.5rem;
  margin-right:3.2rem;
  margin-left:2.8rem;
  border-radius:.5rem;
  line-height:1.5rem;
  margin-bottom:2rem;

  .dropdown-icon{
    background: linear-gradient(0deg, #014345, #014345),linear-gradient(180deg, #014345 0%, #012223 100%);
    height:3rem;
    width:3rem;
    border-radius:100px;
    color:white;
  }
`;

const UserName = styled.h4`
  margin-bottom: 0rem;
  font-size: 10px;
   margin-top: 0rem;
`;

const UserEmail = styled.p`
  font-size: 10px;
  color: #9ca3af;
  margin-top: 0rem;
`;



const Sidebar = () => {
  const userEmail = "emmanuel@getravenbank.com"
  const trimLongString = (str, num) => {
    return str.length > num ? `${str.slice(0, num)}...` : str;
  }
    return (
        <SidebarContainer>
            <div>
                <LogoContainer>
                   <figure className='img-boxs'>
                     <img src={logo} alt='' className='img'/>
                   </figure>
                    <div className='line'></div>
                    <h2 className='text'>Atlas</h2>
                </LogoContainer>

                <UserSection>
                    <div className='info'>
                        <UserName>Adeeko Emmanuel</UserName>
                        <UserEmail>{trimLongString(userEmail, 18)}</UserEmail>
                   </div>
                   {/* <div className='dropdown-icon'>
                      <img src={chevron} className='-icon'/>
                    </div> */}
                </UserSection>

                <div className='get-started'>
                    <h1>GET STARTED</h1>
               </div>
               <div>
            <div className='dasbord-text'>
              <h1>
                Dashboard
              </h1>
            </div> 
              </div>
                <MenuContainer>
                    <MenuItem>
                        <FiHome />
              <div className='link'>
                <li><Link to="/">Overview</Link></li>
                 </div>
                    </MenuItem>
                    <MenuItem>
                        <FiUser />
              <div className='link'>
                <li><Link to="/balance">Balance</Link></li>
                     </div>
                    </MenuItem>
                    <MenuItem>
                        <FiFileText />
                       <div className='link'>
                    <li><Link to="/transaction">Transaction</Link></li>
                     </div>
                    </MenuItem>
                    <MenuItem>
                        <FiSettings />
                        Settings
                    </MenuItem>
                </MenuContainer>
            </div>
        </SidebarContainer>
    );
};

export default Sidebar;
