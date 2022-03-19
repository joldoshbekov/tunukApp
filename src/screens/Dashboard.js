import React from 'react';
import styled from 'styled-components';

import { Banner } from '../components/Banner';
import { Categories } from '../components/Categories';
import { Products } from '../components/Products';

import { ReactComponent as Search } from '../assets/svg/search.inline.svg';

const Dashboard = () => {
  

  return (
    <Container>
      <BannersContainer>
        <Banner />
        </BannersContainer>
      <CategoriesContainer>
        <CategoryContent>
          <CategoryTitle>
            Меню
          </CategoryTitle>
          <SearchIcon />
        </CategoryContent>
        <Categories/>
      </CategoriesContainer>
      <ProductsContainer>
        <Products/>
      </ProductsContainer>
    </Container>
  );
}

export {Dashboard};

const Container = styled.div``;
const BannersContainer = styled.div`
  width: 100%;
`;
const CategoriesContainer = styled.div``;
const CategoryContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 16px;
`;
const CategoryTitle = styled.h2`
  margin: 0;
`;
const SearchIcon = styled(Search)`
  fill: #000;
`;

const ProductsContainer = styled.div``;
