import React from 'react';
import styled from 'styled-components';
import './Sidebar.css'
import logo from '../assets/ravengreenlogo.png'
import { FiHome, FiSettings, FiUser, FiFileText } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #062b30;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-bottom: 20px;
  align-items: center;

`;


const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-right: 10px;
`;

const MenuContainer = styled.div`
  flex-grow: 1;
  padding-left: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 18px;
  cursor: pointer;
  margin-bottom:35px;

  &:hover {
    color: #10b981;
  }

  svg {
    margin-right: 10px;
  }
`;

const UserSection = styled.div`
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  border: 0.5px solid #0B8376;
  padding-top:1rem;
  padding-bottom:1rem;
  padding-right:2px;
  margin-right:20px;
  margin-left:4px;
  border-radius:8px;

  .dropdown-icon{
    margin-right: 2px;
    background-color:#0B8376;
    height:20px;
    border-radius:100px;
    width:30px;
    margin-top:5px;
    font-weight:100px;
  }
`;

const UserName = styled.h4`
  margin-bottom: 0px;
  font-size: 13px;
   margin-top: 5px
`;

const UserEmail = styled.p`
  font-size: 12px;
  color: #9ca3af;
  margin-top: 0px
`;

const LiveMode = styled.div`
  padding-left: 20px;
  margin-top: 20px;
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            <div>
                <LogoContainer>
                    <Logo src={logo} alt="RavenBank" />
                    <div className='line'></div>
                    <h2 className='text'>Atlas</h2>
                </LogoContainer>

                <UserSection>
                    <div>
                        <UserName>Adeeko Emmanuel</UserName>
                        <UserEmail>emmanuel@getravenbank.com</UserEmail>
                   </div>
                    <div className='dropdown-icon'>
                        <FaChevronDown className='dropdown-icon' />
                    </div>
                </UserSection>

                <div className='get-started'>
                    <h1>GET STARTED</h1>
                </div>

                
                <MenuContainer>
                    <MenuItem>
                        <FiHome />
                        Overview
                    </MenuItem>
                    <MenuItem>
                        <FiUser />
                        Wallet
                    </MenuItem>
                    <MenuItem>
                        <FiFileText />
                        Transactions
                    </MenuItem>
                    <MenuItem>
                        <FiSettings />
                        Settings
                    </MenuItem>
                    {/* Add more menu items as needed */}
                </MenuContainer>
            </div>

            <LiveMode>
                <label>
                    <input type="checkbox" />
                    Live Mode
                </label>
            </LiveMode>
        </SidebarContainer>
    );
};

export default Sidebar;
