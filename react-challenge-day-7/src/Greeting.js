import React, { useState } from "react";

export default function Greeting() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="p-4">
            {isLoggedIn ? (
                <h2 className="text-green-600 font-semibold">Welcome back, user!</h2>
            ) : (
                <h2 className="text-red-600 font-semibold">Please log in</h2>
            )}

            <button
                onClick={() => setIsLoggedIn(!isLoggedIn)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
                {isLoggedIn ? (
                    <span>Logout </span>
                ) : (
                    <span>Toggle Login </span>
                )}
            </button>
        </div>
    );
}
