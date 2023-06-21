import React from 'react';

const Card = () => {
    return (
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Linkedin</h5>
                <span className='text-gray-400'>Memberfive . Budget</span>
            </div>
            <div className='mt-4'>
                <div className=" w-[100%] ">
                    <table className="  dark:text-gray-400 text-sm">
                        <thead className="text-gray-500 ">
                            <tr >
                                <th scope="col" className="pr-2">
                                    AMOUNT
                                </th>
                                <th scope="col" className="pr-2">
                                    FREQUENCY
                                </th>
                                <th scope="col" className="pr-2">
                                    EXPIRY
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" ">
                                <th scope="row " className="">
                                    300
                                </th>
                                <td className="pr-2">
                                    Monthly
                                </td>
                                <td className="pr-2">
                                    21 July 2021
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div className="w-full my-3 bg-red-500 rounded-full h-2.5 dark:bg-red-700">
                    <div className="bg-green-500 h-2.5 rounded-full w-[61%]" ></div>
                </div>

                <div>
                <div className='flex justify-between my-3'>
                    <div className='flex  items-center'>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <spna className="ml-1 text-gray-400">
                            Spent
                        </spna>
                    </div>
                    <div className='font-bold'>
                        8890 SGD
                    </div>
                    </div>



                    <div className='flex justify-between'>
                    <div className='flex  items-center'>
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <spna className="ml-1 text-gray-400">
                            Balance
                        </spna>
                    </div>
                    <div className='font-bold'>
                        7890 SGD
                    </div>
                    </div>
                    

                </div>


            </div>

        </a>

    );
}

export default Card;
