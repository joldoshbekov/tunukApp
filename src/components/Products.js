
import styled from 'styled-components';
const products_data = [
  {
    "id": 1,
    "foodTitle": "Ногури рамен",
    "foodDescription": "Острый рамен с морепродуктами.",
    "foodImg": "img/food.png",
    "foodPrice": 330
  },
  {
    "id": 2,
    "foodTitle": "«Кунджун» токпоки",
    "foodDescription": "Неострые рисовые клецки с овощами и...",
    "foodImg": "img/food2.png",
    "foodPrice": 330
  },
  {
    "id": 3,
    "foodTitle": "Тубу чорим",
    "foodDescription": "Жареный тубу в остром соусе.",
    "foodImg": "img/food3.png",
    "foodPrice": 250
  },
  {
    "id": 4,
    "foodTitle": "Миек куг",
    "foodDescription": "450 г. Говяжий суп из морской капусты...",
    "foodImg": "img/food4.png",
    "foodPrice": 220
  },
  {
    "id": 5,
    "foodTitle": "Куксу 0,7",
    "foodDescription": "450 г. Домашняя лапша в фирменном...",
    "foodImg": "img/food5.png",
    "foodPrice": 220
  }
]

const Products = () => {
  return (
    <Container>
      <ProductsContent>
        {products_data.map((product, index) => (
          <div key={index}>
            <h5 >{product.foodTitle}</h5>
            <p key={index}>{product.foodDescription}</p>
            <p key={index}>{product.foodPrice}</p>
          </div>
        ))}
      </ProductsContent>
    </Container>
  )
}

export { Products }

const Container = styled.div`
  padding: 10px 15px;
`;
const ProductsContent = styled.div`
  display: flex;
  flex-direction: column;
`;