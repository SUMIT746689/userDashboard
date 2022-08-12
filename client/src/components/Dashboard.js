import React from 'react'

function Dashboard() {
  return (
    <div className="overflow-x-hidden mx-auto">
        <div className="w-fit text-slate-700 flex w-screen justify-center my-auto font-semibold text-2xl mt-6"> 
            User Dashboard
        </div>
        <div className="mt-6 w-fit mx-auto mb-10 text-left">
            
            <form className=" flex flex-col gap-4 justify-center mx-auto w-fit shadow-md shadow-black p-6 rounded">
                <div className="relative border rounded-lg ">
                    <input type="text" id="b" className="block px-2.5 pb-2.5 pt-4 w-fit text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="b" className="absolute text-sm text-gray-500  duration-300 transhtmlForm -translate-y-4 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:peer-focus:-translate-y-4 left-1">Floating outlined</label>
                </div>
                
                <div className="relative border rounded-lg ">
                    <input type="text" id="a" className="block px-2.5 pb-2.5 pt-4 w-fit text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="a" className="absolute text-sm text-gray-500  duration-300 transhtmlForm -translate-y-4 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:peer-focus:-translate-y-4 left-1">Floating outlined</label>
                </div>
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
                <div className="bg-gray-100 p-4 w-full shadow-xs">
                    <div className="pt-2 pb-2 font-bold text-gray-700">Add Up to 5 photos : </div>
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
                            <input type="number" id="mobile" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="mobile" className="absolute text-sm text-gray-500  duration-300 transhtmlForm -translate-y-4  top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:peer-focus:-translate-y-4 left-1">Add phone number</label>
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
  )
}

export default Dashboard