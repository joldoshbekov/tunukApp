import styled from 'styled-components';
import { Banner } from './components/Banner';
import { Categories } from './components/Categories';
import { Products } from './components/Products';

function App() {
  return (
    <Container>
      <NavBarContainer>
        <LogoTitle>TunukApp</LogoTitle>
        <Menu>Menu</Menu>
      </NavBarContainer>
      <BannersContainer><Banner /></BannersContainer>
      <CategoriesContainer><Categories/></CategoriesContainer>
      <ProductsContainer><Products/></ProductsContainer>
    </Container>
  );
}

export default App;

const Container = styled.div``;
const NavBarContainer = styled.div`
  background-color: #000;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
`;
const LogoTitle = styled.h2`
  color: #fff;
`;

const Menu = styled.p`
  color: #fff;
`;
const BannersContainer = styled.div`
  width: 100%;
`;
const CategoriesContainer = styled.div``;
const ProductsContainer = styled.div``;
