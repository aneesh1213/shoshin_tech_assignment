

export const EmployeeCard = ({
    totalemployees,
    totalmen, 
    totalwomen,
    growthpercentage
}) => {
    return (
        
            <div className="bg-white rounded-lg border-2 p-5 w-full max-w-md">
                
                <div className="flex justify-between items-center">
                    {/* first part */}
                    <div>
                        <h1 className="text-gray-800 font-semibold text-lg"> Total Employees </h1>
                        <p className="text-4xl font-bold text-gray-800 mt-2"> {totalemployees}</p>
                        <div className="mt-5 text-gray-800 text-xs ">
                            <p>{totalmen} Men</p>
                            <p>{totalwomen} Women</p>
                        </div>
                    </div>

                    {/* second part */}

                    <div className="relative flex flex-col items-end">
                        {/* graph */}

                        <div className="relative">
                            <svg
                                width="100"
                                height="50"
                                viewBox="0 0 100 50"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M0 40 Q30 10, 50 20 T100 10"
                                    stroke="#FF6B6B"
                                    strokeWidth="2"
                                    fill="none"
                            />
                            </svg>
                            <p className="absolute -top-2 right-0 text-red-500 text-xs font-bold">
                                +{growthpercentage}%
                            </p>
                        </div>
                        <div className="">
                            {/* growth percentage level */}
                            <p className="bg-orange-100 text-gray-600 font-semibold text-xs px-2 py-1 rounded mt-4">
                                +{growthpercentage}% past month
                            </p>
                        </div>
                    </div>
                </div>  
                
            </div>
        
    )
}