import React, { useEffect, useState } from 'react'

function Dashboard() {
    const [subCategory,setSubCategory] =useState({});
    const [properties,setProperties] =useState([]);
    const [jsxSubCategoriesProperties,setjsxSubCategoriesProperties] =useState([]);
    const [subCategoryError,setSubCategoryError] =useState(true);
    const [subCategoryDropdown,setSubCategorydropdown] =useState(null);
    const [formValue,setFormValue] =useState({});


    //get subcategory unique data
    useEffect(()=>{
        console.log(window.location.pathname);
        fetch(`${window.location.pathname}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            if(data.subCategory) { 
                setSubCategory(()=>data.subCategory) ; 
                setSubCategoryError(()=>false); 
            }
            if(data.error) return setSubCategoryError(()=>true)
        })
        .catch((err)=>{console.log(err.message)})
    },[]);

    //Subcategories Unique properties
    useEffect(()=>{
        Object.keys(subCategory)?.length > 1 && setProperties(()=>Object.keys(subCategory));
    },[subCategory])

    const handleDropdown =(property) =>{
        console.log(property)
        const updateData = property === subCategoryDropdown ? null : property; 
        setSubCategorydropdown((value)=> updateData);
    }

    const handleSetFormValue = (property,value)=>{
        const copyFormValue = {...formValue};
        if(property === 'condition' && copyFormValue[property] === value ) { copyFormValue[property] = '' ;}
        else {copyFormValue[property] = value ;}
        setFormValue(()=>copyFormValue);
    }

    //create jsx for subcategories properties
    useEffect(()=>{

        if(properties.length === 0) return  ;
        const jsxSubCategoriesProperties = properties.map((property,index)=>{
            console.log(subCategory[property] ==null,property)
            if( property === 'category' || property === 'subCategory' ) return <span key={property}></span>; 
            
            if( property === 'condition'){
                return(
                <div key={property} className="relative ">
                {property}:
                <div className='flex gap-4'>
                {subCategory[property].map((value,index)=>
                    <div key={index} className="flex items-center ">
                        <input onChange={(e)=>handleSetFormValue(property,value)} id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2" checked={formValue[property] === value ? true : false}/>
                        <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 ">{value}</label>
                    </div>
                )}
                </div>
                </div>
                )
            }
            if(subCategory[property] == null){
                return(<div key={property} className="relative border rounded-lg ">
                        <input onChange={(e)=>handleSetFormValue(property,e.target.value)} type="number" id={index} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor={index} className="capitalize absolute text-sm text-gray-500  duration-300 transhtmlForm -translate-y-4 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:peer-focus:-translate-y-4 left-1">{property}</label>
                    </div>
                )
            }
            if(subCategory[property]?.constructor === String){
                return(
                    <div key={property} className="relative border rounded-lg ">
                        <input onChange={(e)=>handleSetFormValue(property,e.target.value)} type="text"  id={index} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor={index} className="capitalize absolute text-sm text-gray-500  duration-300 transhtmlForm -translate-y-4 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:peer-focus:-translate-y-4 left-1">{property}</label>
                    </div>
                )
            }
            if(subCategory[property]?.constructor === Array ){
                
                return(
                <div key={property} className={`font-medium text-gray-600 relative`}>
                    <div className="capitalize text-md pb-2 flex-1 ml-3 text-left whitespace-nowrap ">{formValue[property] && property }</div>
                    <button onClick={()=>handleDropdown(property)} type="button" className="capitalize flex items-center py-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100  border" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <span className="text-md flex-1 ml-3 text-left whitespace-nowrap ">{formValue[property] || property }</span>
                        <svg  className={ `${subCategoryDropdown === property ? 'rotate-90 ': ' '} duration-150 w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <div onClick={()=>handleDropdown(property)} className={`${subCategoryDropdown === property ? ' ' : 'hidden '} bg-white w-full absolute z-20 max-h-56 overflow-auto shadow shadow-black`}>
                    {
                        subCategory[property].length > 0 &&
                        subCategory[property].map((value)=>
                            <ul key={value} onClick={()=>handleSetFormValue(property,value)} className='pl-4 text-sm border-t py-2 hover:bg-gray-200 duration-150 cursor-pointer'>{value}</ul>
                        )
                    }
                    </div>
                </div>
                )
            }
        })
        
        setjsxSubCategoriesProperties(()=>jsxSubCategoriesProperties)

    },[properties,subCategoryDropdown,formValue])
    

    //for all dropdown handle for subCategory default 
    useEffect(()=>{
        
        if(properties.length >0){
            const arrays = {}; 
            properties.forEach(element => {
                arrays[element] = false;
            });
        }
        
    },[properties])

    useEffect(()=>{
        console.log(formValue)
        // console.log(properties,subCategory,subCategoryError) ; 
    })
  return (
    <>
    {
    !subCategoryError ?     
        <div className="overflow-x-hidden mx-auto">
            <div className=" relative text-slate-700 flex w-full justify-center m-auto font-semibold text-2xl mt-6"> 
                User Dashboard
            </div>
            <div className="mt-6 w-fit mx-auto mb-10 text-left shadow-md scale:105 duration:150">
                
                <form className=" flex flex-col gap-4 justify-center mx-auto w-fit p-6 rounded-md border">
                    {
                        properties.length >0
                        &&
                        <div className='capitalize font-semibold text-gray-700'>
                            <span> Category :</span> <span className='text-green-600'> {subCategory['category']}</span> 
                        </div> 
                    }
                    {
                        properties.length >0
                        &&
                        <div className='capitalize font-semibold text-gray-700'>
                            <span> Sub-Category :</span> <span className='text-green-600'> {subCategory['subCategory']}</span> 
                        </div> 
                    }
                    {
                        jsxSubCategoriesProperties
                    }

                    {/* <!-- description --> */}
                    <div className="relative border rounded-lg ">
                        <textarea type="text" id="c" rows="8"  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " ></textarea>
                        <label htmlFor="c" className="absolute text-sm text-gray-500  duration-300 transhtmlForm -translate-y-4 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-120 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-5 peer-focus:top-2 peer-focus:peer-focus:-translate-y-4 left-1">Description</label>
                    </div>
                    {/* <!-- Taka --> */}
                    <div className="relative border rounded-lg ">
                        <input type="number" id="taka" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="taka" className="absolute text-sm text-gray-500  duration-300 transhtmlForm -translate-y-4  top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:peer-focus:-translate-y-4 left-1">Price: ( Taka )</label>
                    </div>
                    {/* <!-- Negotiable --> */}
                    <div className="flex items-center">
                        <input id="negotiable-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"/>
                        <label htmlFor="negotiable-checkbox" className="ml-2 text-sm font-medium text-gray-700 "> Negotiable</label>
                    </div>
                    {/* <!-- Image upload --> */}
                    <div className="bg-gray-100 w-full shadow-xs p-2">
                        <div className="pb-2 text-lg font-bold text-gray-700">Add Up to 5 photos : </div>
                        <div className="flex justify-center items-center flex-wrap text-center gap-2">
                            <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-40 h-fit bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer ">
                                <div className="flex flex-col justify-center items-center p-4">
                                    <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-xs text-gray-500 flex flex-col"><span className="font-bold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 flex flex-col"><span> PNG OR JPG </span> (MAX SIZE 1 MB)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                            <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-40 h-fit bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer ">
                                <div className="flex flex-col justify-center items-center p-4">
                                    <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-xs text-gray-500 flex flex-col"><span className="font-bold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 flex flex-col"><span> PNG OR JPG </span> (MAX SIZE 1 MB)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                            <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-40 h-fit bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer ">
                                <div className="flex flex-col justify-center items-center p-4">
                                    <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-xs text-gray-500 flex flex-col"><span className="font-bold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 flex flex-col"><span> PNG OR JPG </span> (MAX SIZE 1 MB)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                            <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-40 h-fit bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer ">
                                <div className="flex flex-col justify-center items-center p-4">
                                    <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-xs text-gray-500 flex flex-col"><span className="font-bold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 flex flex-col"><span> PNG OR JPG </span> (MAX SIZE 1 MB)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                            <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-40 h-fit bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer ">
                                <div className="flex flex-col justify-center items-center p-4">
                                    <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-xs text-gray-500 flex flex-col"><span className="font-bold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 flex flex-col"><span> PNG OR JPG </span> (MAX SIZE 1 MB)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div> 
                    </div>
                    
                    <div className="py-4">
                        <div>
                            <div className="font-bold text-sky-700">Contact details</div>
                        
                        </div>
                        <div className="pt-4">
                            <div className="text-sm">Name:</div>
                            <div>Mehedi Hasan</div>
                        </div>
                        <div className="py-4">
                            <div className="text-sm">Email:</div>
                            <div>mehedihasansumit@gmail.com</div>
                        </div>
                        <div className="flex  w-full">
                            <div className="relative border rounded-lg flex-grow">
                                <input type="number" id="mobile" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                <label htmlFor="mobile" className="bg-transparent absolute text-sm text-gray-500  duration-300 transhtmlForm -translate-y-4  top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:peer-focus:-translate-y-4 left-1">Add phone number</label>
                            </div>
                            <button className="ml-2 bg-blue-500 text-white font-semibold px-6 py-2">Add</button>
                        </div>
                    </div>

                    {/* <!-- term and condition --> */}
                    <div className="flex items-center">
                        <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"/>
                        <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 ">I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>.</label>
                    </div>
                    {/* <!-- post product --> */}
                    <button className="bg-blue-700 py-2 text-white font-semibold ">
                        Post product
                    </button>
                </form>
            </div>
        </div>
        
        :
        
        <div className='max-w-2xl relative m-auto text-6xl uppercase text-gray-300 font-semibold'>
            Please, first Select a category
        </div>
    }
    </>
  )
}

export default Dashboard