
export const JobCard = ({
    neededCnt,
    empcnt
}) => {
    return <div className=" bg-orange-100 rounded shadow-lg p-4">
        <div className=" text-gray-800 text-bold text-md">
            <h1> Available Position</h1>
        </div>
        <div className="pt-2 text-bold text-2xl">
            {neededCnt}
        </div>
        <div className="text-red-500 pt-2">
            {empcnt} Urgently needed
        </div>
    </div>
}