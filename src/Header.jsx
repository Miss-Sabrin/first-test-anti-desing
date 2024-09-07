import { Button, Menu, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const onMenuClick = (item) => {
    navigate(`/${item.key}`);
  };

  return (
    <div className='image-home'
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1522337956741-4b9ce9700652?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image path
       
      }}

      
    >
      <div className="header">
        {/* Left Menu (Home) */}
        <Menu
          onClick={onMenuClick}
          mode='horizontal'
          className='menu-left'
          items={[
            {
              label: "Home",
              key: "home"
            }
          ]}
          style={{
            fontWeight:'600',
            fontSize: '18px',
            background: 'transparent',
            color:"white"

          }}
        />

        {/* Right Menu (About, Services, Contact) */}
        <Menu
          onClick={onMenuClick}
          mode='horizontal'
          className='menu-right'
          items={[
            {
              label: "About",
              key: "about"
            },
            {
              label: "Services",
              key: "services"
            },
            {
              label: "Contact",
              key: "contact"
            }
          ]}
          style={{
            fontSize: '18px',
            fontWeight:'600',
            background: 'transparent', 
            color:"white"


          }}
          
        />
      </div>
      <div className='overlay-text'>
        <Typography.Text className="overlay-heading">welcome to my products</Typography.Text>
        <Typography.Paragraph className="overlay-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing 
            elit. Exercitationem quaerat officiis, voluptatem sapiente 
            voluptates aut? Quibusdam repudiandae accusamus error nihil 
            architecto tempora praesentium, 
            nobis omnis veniam officia culpa id nisi</Typography.Paragraph>

            <Button  className="transparent-button" > Start Items</Button>

      </div>
    </div>
  );
}

export default Header;
