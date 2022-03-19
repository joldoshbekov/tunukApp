
import styled from 'styled-components';
const categories = [
    {
      "id": 1,
      "name": "Популярное"
    },
    {
      "id": 2,
      "name": "Салаты"
    },
    {
      "id": 3,
      "name": "Супы"
    },
    {
      "id": 4,
      "name": "Фаст фуд"
    },
    {
      "id": 5,
      "name": "Пицца"
    },
    {
      "id": 6,
      "name": "Суши"
    },
    {
      "id": 7,
      "name": "Шашлыки"
    },
    {
      "id": 8,
      "name": "Напитки"
    },
    {
      "id": 9,
      "name": "Гарниры"
    },
]

const Categories = () => {
  return (
    <Container>
      <CategoriesContent>
        {categories.map((category, index) => (
          <CategoryButton key={index}>{category.name}</CategoryButton>
        ))}
      </CategoriesContent>
    </Container>
  )
}

export { Categories }

const Container = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
`;

const CategoriesContent = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  scrollbar-width: none;
  overflow-y: none;
`;

const CategoryButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 100px;
    height: 37px;
    padding: 6px 12px;
    margin: 0 5px;
    background: #F4F6FC;
    border-radius: 15px;
    overflow-x: overlay;
`;