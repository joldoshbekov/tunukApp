import React from 'react';
import styled from 'styled-components';

import { useNavigate } from "react-router-dom";


const products = [
  {
    "id": 1,
    "title": "Ногури рамен",
    "description": "Острый рамен с морепродуктами.",
    "image": "food.png",
    "price": 330,
  },
  {
    "id": 2,
    "title": "«Кунджун» токпоки",
    "description": "Неострые рисовые клецки с овощами и...",
    "image": "food2.png",
    "price": 330
  },
  {
    "id": 3,
    "title": "Тубу чорим",
    "description": "Жареный тубу в остром соусе.",
    "image": "food3.png",
    "price": 250
  },
  {
    "id": 4,
    "title": "Миек куг",
    "description": "450 г. Говяжий суп из морской капусты...",
    "image": "food4.png",
    "price": 220
  },
  {
    "id": 5,
    "title": "Куксу 0,7",
    "description": "450 г. Домашняя лапша в фирменном...",
    "image": "food5.png",
    "price": 220
  }
]

const Products = () => {
  const navigate = useNavigate();


  function _navigateToPage (item) {
      const id = item.id
      navigate(`/detail/${id}`, {item});
    }

  // const photo = require(`${obj.photo}`).default;

  return (
    <Container>
      <Content>
        {products.map((product, index) => (
          <Row onClick={() => _navigateToPage(product)}>
            <Column key={product.id + index}>
              <Title >{product.title}</Title>
              <Description>{product.description}</Description>
              <Price>{product.price}</Price>
              <Id>id: {product.id}</Id>
            </Column>
            <Image src={require(`../assets/images/${product.image}`)}/>
          </Row>
        ))}
      </Content>
    </Container>
  )
}

export { Products }

const Container = styled.div`
  padding: 10px 15px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f2f2f2;
`;
const Column = styled.div``;
const Title = styled.h3`
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  color: #333333;
  padding: 0;
  margin-bottom: 0;
`;
const Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #828282;
  padding: 3px 0 8px;
  margin: 0;
`;
const Price = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #333333;
  padding: 0;
  margin: 0;
`;
const Id = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #2F80ED;
`;
const Image = styled.img`
  width: 90px;
  height: 90px;

`;