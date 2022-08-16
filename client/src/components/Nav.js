import React, { useEffect, useState } from 'react'
import { Link} from "react-router-dom";

function Nav({userDashboard}) {
  const [showDropdown,setShowDropdown]=useState(false);
  const [categories,setCategories] = useState(false);
  const [subCategories,setSubcategories] = useState({});
  const [subCategoriesDropdown,setSubcategoriesDropdown] = useState({});


  useEffect(()=>{

    if(userDashboard.length > 0)
    {
      //category set
      const getAllObjectcategory = userDashboard.map(value=>value.category);
      const setresAllUserCategoty =  Array(...new Set(getAllObjectcategory));
      console.log(setresAllUserCategoty);
      setCategories(()=>setresAllUserCategoty);
      //subcategories set
    }
  },[userDashboard])

  useEffect(()=>{
    //set defaulte false all Subcategories drodown
    //set subcategories 
    if(categories.length > 0){
      const subCategoriesObj = {};
      const subCategoriesDropdownObj = {};
      categories.forEach((category)=>{
        const subCategories = [];
        if(userDashboard.length >0) {
          //get subcategories 
          userDashboard.forEach((value)=>{
            // console.log(value.category=== category);
            if(value.category === category) 
            {
               subCategories.push(value.subCategory)
            }
          });
        }
        subCategoriesObj[category] = subCategories ;
        subCategoriesDropdownObj[category] = false
      });
      setSubcategories(()=> subCategoriesObj);
      setSubcategoriesDropdown(()=>subCategoriesDropdownObj)
    }
  },[categories])

  useEffect(()=>{
    console.log(subCategories);
  })

  //Subcategories Dropdown handle
  const subCategoriesDropdownHandle =(category)=>{
    console.log(subCategoriesDropdown[category])
    const copySubCategoriesDropdown = {...subCategoriesDropdown};
    copySubCategoriesDropdown[category] = !copySubCategoriesDropdown[category];
    console.log(copySubCategoriesDropdown);
    setSubcategoriesDropdown(()=>copySubCategoriesDropdown);
  }
 
  return (
  <aside className="sticky top-0 min-w-fit min-h-screen h-screen overflow-y-auto bg-gray-100 dark:bg-gray-900" aria-label="Sidebar text-left normal-case">
    <div className="overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800 ">
        <ul className="space-y-2">
          
          <li>
              <button onClick={()=>setShowDropdown((value)=>!value)} type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                     <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                    <span className="text-lg flex-1 ml-3 text-left whitespace-nowrap">User Dashboard</span>
                    <svg  className={`${showDropdown ? 'rotate-90': 'rotate-0  ml-4'} duration-150 w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>

              {
                categories.length > 0 && <ul id="dropdown-example" className={`${showDropdown ? '': 'hidden'} py-2 space-y-2`}>
                      {
                        categories.length > 0 && categories.map((category)=>
                        <li key={category}>
                          <button onClick={()=>subCategoriesDropdownHandle(category)} type="button" className="capitalize flex items-center py-2 px-6 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <span className="text-md flex-1 ml-3 text-left whitespace-nowrap">{category}</span>
                            <svg  className={ `${subCategoriesDropdown[category] ? 'rotate-90': 'rotate-0'} duration-150 w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                          </button>
                          {
                            subCategories[category] && <ul id="dropdown-example" className={`${subCategoriesDropdown[category] ? '' : 'hidden '}  py-2 space-y-2 `}>
                            {
                              subCategories[category].map((subCategory,index)=>
                              <li key={index} className='border border-gray-300 dark:border-gray-600 '>
                                <Link to={`/userCategory/${category.split(' ').join('_')}/${subCategory.split(' ').join('_')}`} className="capitalize text-left flex items-left py-2 pl-12 pr-1 w-full font-normal text-sm text-gray-900  transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 active:bg-gray-300 dark:active:bg-gray-800 ">{subCategory}</Link>
                              </li>
                              )
                            }
                            </ul>
                          }
                        </li>
                        )
                      }
                      
                </ul>
              }
          </li>
          
        </ul>
    </div>
  </aside>
  )
}

export default Nav