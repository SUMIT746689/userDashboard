import React, { useEffect, useState } from 'react'

function Nav({userDashboard}) {
  const [showDropdown,setShowDropdown]=useState(false);
  const [categories,setCategories] = useState(false);
  const [subCategories,setSubcategories] = useState({});
  const [subCategoriesDropdown,setSubcategoriesDropdown] = useState({});


  useEffect(()=>{

    if(userDashboard.length > 0)
    {
      //category set
      const getAllObjectcategory = userDashboard.map(value=>value.parentCategory);
      const setresAllUserCategoty =  Array(...new Set(getAllObjectcategory));
      console.log(setresAllUserCategoty);
      setCategories(()=>setresAllUserCategoty);
      //subcategories set
    }
  },[userDashboard])

  useEffect(()=>{
    //Subcategories drodown
    //set subcategories 
    if(categories.length > 0){
      const subCategoriesObj = {};
      const subCategoriesDropdownObj = {};
      categories.forEach((category)=>{
        const subCategories = [];
        if(userDashboard.length >0) {
          //get subcategories 
          userDashboard.forEach((value)=>{
            console.log(value.parentCategory=== category);
            if(value.parentCategory === category) 
            {
               subCategories.push(value.category)
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
  <aside className=" w-72" aria-label="Sidebar text-left normal-case">
    <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <ul className="space-y-2">
          
          <li>
              <button onClick={()=>setShowDropdown((value)=>!value)} type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                     <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                    <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item={showDropdown}>Dashboard</span>
                    <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>

              {
                categories.length > 0 && <ul id="dropdown-example" className={`${showDropdown ? '': 'hidden'} py-2 space-y-2`}>
                      {
                        categories.length > 0 && categories.map((category,index)=>
                        <li key={index}>
                          <button onClick={()=>subCategoriesDropdownHandle(category)} type="button" className="capitalize flex items-center py-2 px-6 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item={showDropdown}>{category}</span>
                            <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                          </button>
                          {
                            subCategories[category] && <ul id="dropdown-example" className={`${subCategoriesDropdown[category] ? '' : 'hidden '}  py-2 space-y-2`}>
                            {
                              subCategories[category].map((subCategory)=>
                              <li key={subCategory}>
                                <a href="#" className="capitalize text-left flex items-left py-2 pl-12 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{subCategory}</a>
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