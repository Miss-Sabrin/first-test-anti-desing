import { Col, Image, List, Row, Typography } from 'antd';
import React from 'react';
import '../App.css';

function Products() {
  const products = [
    {
      id: 1,
      title: 'Coconut Oil',
      description: 'This is a great product',
      price: '$49.99',
      image: 'https://media.istockphoto.com/id/1129382847/photo/coconut-and-cocnut-milk-bottle-on-a-yellow-and-blue-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=2lLK2pRV8OEjZIzcZHqNGuVb6qIaeGsTwuKxE5qe-2Y=', 
    },
    {
      id: 2,
      title: 'Watch Super',
      description: 'This is another amazing product',
      price: '$59.99',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 3,
      title: 'Perfume',
      description: 'This product is the best choice',
      price: '$69.99',
      image:"https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 4,
      title: 'Camera Perfect',
      description: 'This product is the best choice',
      price: '$69.99',
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
    },
  ];
  
  return (
    <div className='container-content'>
      <div className='products-container'>
        <Typography.Title>RECENT PRODUCTS</Typography.Title>
        <Typography.Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente</Typography.Paragraph>
        <Typography.Paragraph>nostrum, excepturi ullam deleniti illum voluptas sunt</Typography.Paragraph>
      </div>

      {/* Product List */}
      <div>
        <List
          grid={{ gutter: 16, column: 4 }} // Defines the layout as 4 columns
          dataSource={products} // The product data array
          renderItem={product => (
            <List.Item>
              <div className="image-container">
                <Image className='item-image-card' src={product.image} alt={product.title} />
                <Typography.Paragraph>{product.description}</Typography.Paragraph>
                <Typography.Text strong>{product.price}</Typography.Text>
              </div>
            </List.Item>
          )}
        />
      </div>

      {/* Lower section with 1 large image on the left and 2 smaller images on the right */}
      <div className='lower-section'>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            {/* Left side: One large image */}
            <Image 
              className='image-left' 
              src={products[0].image} 
              style={{ height: '460px', width: '100%', objectFit: 'cover',}} // Set height and width using style
            />
          </Col>

          <Col xs={24} md={12}>
            {/* Right side: Two smaller images */}
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Image 
                  className='image-right' 
                  src={products[1].image} 
                  alt={products[1].title}
                  style={{ height: '225px', width: '130%',  }} // Half the height of left image
                />
              </Col>
              <Col span={24}>
                <Image 
                  className='image-right' 
                  src={products[2].image} 
                  alt={products[2].title}
                  style={{ height: '225px', width: '130%',  }} // Half the height of left image
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Products;
