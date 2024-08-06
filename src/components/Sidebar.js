import React from 'react';
import styled from 'styled-components';
import './Sidebar.css'
import logo from '../assets/ravengreenlogo.png'
import { FiHome, FiSettings, FiUser, FiFileText } from 'react-icons/fi';
import { FaChevronDown } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: 22%;
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
  margin-bottom: 5rem;
  align-items: center;

`;


const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-right: 2rem;
`;

const MenuContainer = styled.div`
  flex-grow: 1;
  padding-left: 2rem;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10rem;
  font-size: 18px;
  cursor: pointer;
  margin-bottom:4rem;

  &:hover {
    color: #10b981;
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
  margin-right:.5rem;
  margin-left:1rem;
  border-radius:8px;
  line-height:2rem;

  .dropdown-icon{
    background: linear-gradient(0deg, #014345, #014345),linear-gradient(180deg, #014345 0%, #012223 100%);
    height:3rem;
    border-radius:100px;
    width:40px;
    margin-top: .2rem;
  }
`;

const UserName = styled.h4`
  margin-bottom: 0rem;
  font-size: 13px;
   margin-top: 0rem;
`;

const UserEmail = styled.p`
  font-size: 12px;
  color: #9ca3af;
  margin-top: 0rem;
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
        </SidebarContainer>
    );
};

export default Sidebar;
