import { Input } from '@nextui-org/react';
import { useEffect } from 'react';
import { useState } from 'react';
export default function Search({
  data,
  setProducts,
  price,
  setPrice,
  filter,
  setFilter,
}) {
  const handleChange = (key, value) => {
    console.log(key, value);
    setFilter({ ...filter, [key]: value });
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <Input
        isClearable
        placeholder="Search"
        name="search"
        value={filter.search}
        variant="bordered"
        onClear={() => handleChange('search', '')}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />

      <div>
        <Input
          type="number"
          variant="underlined"
          isClearable
          min={0}
          step={10}
          name="min"
          onClear={() => handleChange('min', '')}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          value={filter?.min || ''}
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">min</span>
            </div>
          }
        />
        <Input
          type="number"
          variant="underlined"
          isClearable
          min={0}
          step={10}
          name="max"
          onClear={() => handleChange('max', '')}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          value={filter?.max || ''}
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">max</span>
            </div>
          }
        />
      </div>
    </div>
  );
}
