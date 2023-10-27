
import { useState, useEffect } from 'react';
import { getAllCategory } from '../api';
import { CategoryList } from '../components/CategoryList';
import { Search } from '../components/Search';


export function HomePage() {

    const [categories,setCategories]=useState([]);
    const [filteredCategory,setFilteredCategory]=useState([]);


    useEffect(()=>{
        getAllCategory().then(data=>{
            console.log(data.categories);
            setCategories(data.categories);
        })

    },[]);

    const search=(value)=>{
      const filter=categories.filter(el=>el.strCategory.toLowerCase().includes(value.toLowerCase()) || 
      el.strCategoryDescription.toLowerCase().includes(value.toLowerCase()));
      setFilteredCategory(filter);

    }


  return (
    <div className=' mx-auto pt-[6rem] p-8 '>
        <Search  search={search}/>
        <CategoryList categories={filteredCategory.length ? filteredCategory: categories }/>

    </div>
  )
}
