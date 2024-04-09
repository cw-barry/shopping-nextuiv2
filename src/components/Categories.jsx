import { Button, ButtonGroup } from '@nextui-org/react';

const Categories = ({ categories, handleFilter }) => {
  return (
    <ButtonGroup
      color="warning"
      size="xs"
      className="flex flex-wrap justify-center"
    >
      {categories.map((item, index) => (
        <Button key={index} onPress={() => handleFilter(categories[index])}>
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default Categories;
