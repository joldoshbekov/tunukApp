
import styled from 'styled-components';
const categories_data = [
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
      "name": "Пиццы и суши"
    },
    {
      "id": 6,
      "name": "Шашлыки"
    },
    {
      "id": 7,
      "name": "Напитки"
    },
    {
      "id": 8,
      "name": "Гарниры"
    },
    {
      "id": 9,
      "name": "Сушняк"
    },
]

const Categories = () => {
  return (
    <Container>
      <MenuButton>Menu</MenuButton>
      <CategoriesContent>
        {categories_data.map((category, index) => (
          <CategoryButton key={index}>{category.name}</CategoryButton>
        ))}
      </CategoriesContent>
    </Container>
  )
}

export { Categories }

const Container = styled.div`
  background-color: red;
  display: flex;
  flex-direction: row;

`;
const MenuButton = styled.div``;
const CategoriesContent = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  scrollbar-width: none;
  overflow-y: none;
`;
const CategoryButton = styled.div`
  width: 180px;
    margin: 10px 25px;
    background: antiquewhite;
    border-radius: 100px;
    padding: 10px 10px;
    align-items: center;
    text-align: center;
    display: flex;
`;