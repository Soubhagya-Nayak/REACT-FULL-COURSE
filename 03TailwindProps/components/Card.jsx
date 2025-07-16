export const Card = ({userName, btnTxt}) => {
    // console.log(props.userName);
    return (
        <>
            <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
                <img
                    src="https://imgs.search.brave.com/wfVYQ_oS8QiJ5YCd_k5hKNBWux-1Em4ha1kkwNUUvls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/Mi8wNy8yMS8wMS9j/YXJ0b29uLTE4OTA0/MzhfNjQwLmpwZw"
                    alt=""
                    className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{userName}</h2>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
                            soluta amet corporis accusantium aliquid consectetur eaque!
                        </p>
                    </div>
                    <button
                        type="button"
                        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
                    >
                        {btnTxt}
                    </button>
                </div>
            </div>
        </>
    )
}