import React from 'react'
import { MealItem } from './MealItem'

export function MealList({meals}) {
  return (
    <div className=' grid gap-6 sm:grid-cols-2 md:grid-cols-4'>
        {
            meals.map(el=> <MealItem key={el.idMeal} item={el}/>)
        }

    </div>
  )
}
