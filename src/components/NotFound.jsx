import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div className="flex flex-col h-screen justify-center items-center bg-dark">
                <div className="flex flex-col items-center">
                    <h1 className="text-[120px] font-extrabold text-gray-300">404</h1>
                    <p className="text-2xl font-medium text-gray-600 mb-6">Page Not Found</p>
                    <Link to="/"
                        className="text-white bg-primary py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 transition-all duration-200 ease-in-out">
                        Go Home
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NotFound;