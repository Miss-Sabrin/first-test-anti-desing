import { FacebookOutlined, GoogleOutlined, TwitterOutlined } from '@ant-design/icons';
import { Input, Typography } from 'antd';
import React from 'react';

function Footer() {
  return (
    <div className='footer'>
      {/* Center the heading text */}
      <Typography.Text className='footer-heading'>
        JOIN OUR MAILING LIST
      </Typography.Text>

      {/* Paragraph with split lines */}
      <Typography.Paragraph className='footer-paragraph'>
        Quae incidunt praesentium voluptates harum. Ab alias fuga nulla! <br />
        Voluptatem fugit esse veniam porro  <br />
        
      </Typography.Paragraph>

      {/* Search input */}
      <Input.Search
        placeholder="Enter your email"
        
        size="large"
        className='footer-search'
        onSearch={value => console.log(value)}
      />
       <div className='footer-icons'>
        <FacebookOutlined className='icon' />
        <GoogleOutlined className='icon' />
        <TwitterOutlined className='icon' />
      </div>
      <Typography.Paragraph className='footer-paragraph'>
        Voluptatem fugit esse veniam porro  <br />
        
      </Typography.Paragraph>

    </div>
  );
}

export default Footer;
