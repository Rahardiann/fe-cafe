import React from "react"
import Sidebar from "../components/sidebar"

export default function Dashboard() {
    return (
        <div className="bg-main min-h-screen flex ">
            <Sidebar />
            <div className="flex flex-col min-h-screen w-full p-4">
                {/* Kotak Atas */}
                <div className="bg-second  mb-4 p-4">
                    <h2 className="text-xl mb-2">Kotak Atas</h2>
                    <p>Ini adalah konten untuk kotak atas di sisi kanan.</p>
                </div>
                {/* Kotak Bawah */}
                <div className="bg-second p-4">
                    <h2 className="text-xl mb-2">Kotak Bawah</h2>
                    <p>Ini adalah konten untuk kotak bawah di sisi kanan.</p>
                </div>
            </div>
        </div>
    )
}