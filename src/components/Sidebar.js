import React from 'react';
import styled from 'styled-components';
import './Sidebar.css'
import logo from '../assets/ravengreenlogo.png'
import { FiHome, FiSettings, FiUser, FiFileText } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  // width: 20%;
  height: 100vh;
  background-color: #062b30;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  margin-bottom: 2rem;
  align-items: center;

`;

const MenuContainer = styled.div`
  flex-grow: 1;
  padding-left: 3rem;
  margin-top:5rem;
  margin-right:4rem;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
  padding-top:1.5rem;
  padding-bottom:1.5rem;
  margin-bottom:1rem;

  &:hover {
    background: linear-gradient(269.91deg, rgba(255, 255, 255, 0.1) 22.13%, rgba(255, 255, 255, 0) 96.37%);
    border-right: 5px solid white; 
  }

  svg {
    margin-right: 1rem;
  }
`;

const UserSection = styled.div`
  padding-left: 1rem;
  display: flex;
  justify-content: space-between;
  border: 0.5px solid #0B8376;
  padding-top:1rem;
  padding-bottom:1rem;
  padding-right:1rem;
  margin-right:4rem;
  margin-left:3rem;
  border-radius:8px;
  line-height:2rem;

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
    return (
        <SidebarContainer>
            <div>
                <LogoContainer>
                   <figure className='img-box'>
                     <img src={logo} alt='' className='img'/>
                   </figure>
                    <div className='line'></div>
                    <h2 className='text'>Atlas</h2>
                </LogoContainer>

                <UserSection>
                    <div>
                        <UserName>Adeeko Emmanuel</UserName>
                        <UserEmail>emmanuel@getravenbank.com</UserEmail>
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
                        Transactions
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
