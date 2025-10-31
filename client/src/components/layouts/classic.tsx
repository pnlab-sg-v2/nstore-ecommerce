import Categories from '@framework/categories/categories';
import Products from '@framework/products/products';
import { Element as ScrollElement } from 'react-scroll';
import FilterBar from './filter-bar';


// Default layout for the application
const Classic = () => {
  return (
    <>
      {/* <Banner layout="classic" /> */}
      {/* <PromotionSliders /> */}
      <FilterBar />
      <ScrollElement
        name="grid"
        className="flex flex-1 border-t border-solid border-border-200 border-opacity-70"
      >
        <Categories layout="classic" />
        <Products />
      </ScrollElement>
    </>
  );
};

export default Classic;
