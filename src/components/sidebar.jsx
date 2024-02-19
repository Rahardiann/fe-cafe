export default function Sidebar() {
    return (
        <div className="flex flex-col my-3 mx-3 left-5 w-20 min-h-screen bg-second rounded-lg">
            <div className="flex-grow px-4 items-center justify-center h-full">
                <ul>
                    <li className="text-white">Menu Item 1</li>
                    <li className="text-white">Menu Item 2</li>
                    <li className="text-white">Menu Item 3</li>
                </ul>
            </div>
        </div>
    )
}