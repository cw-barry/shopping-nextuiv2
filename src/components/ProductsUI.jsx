/* eslint-disable react/prop-types */
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

export const ProductsUI = ({ products, handleSelected }) => {
  return (
    <div className="gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {products.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          style={item.selected ? { border: 'solid red 1px' } : { border: '' }}
          onPress={() => {
            console.log('item pressed');
            handleSelected(item.id);
          }}
          //   className="drop-shadow-[0_12px_24px_rgb(104,112,118,0.15), 0_12px_14px_rgb(104,112,118,0.1)]"
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[200px]"
              src={item.images[0]}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">$ {item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
