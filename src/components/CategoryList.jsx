import React from 'react';
import { CategoryItem } from './CategoryItem';

export function CategoryList({categories}) {
  return (
    <div className=' grid sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {
            categories.map(el=> <CategoryItem key={el.idCategory} item={el}/>)
        }

    </div>
  )
}
