'use client'

import { useState, useEffect } from 'react'

export default function Home() {
    const [noCount, setNoCount] = useState(0)
    const [yesPressed, setYesPressed] = useState(false)
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
    const [hearts, setHearts] = useState<Array<{ id: number; left: string; duration: string; delay: string }>>([])

    const yesButtonSize = 80 + noCount * 20
    const noButtonSize = Math.max(60 - noCount * 5, 20)

    const phrases = [
        "No",
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "Are you absolutely certain?",
        "This could be a mistake!",
        "Have a heart!",
        "Don't be so cold!",
        "Change of heart?",
        "Wouldn't you reconsider?",
        "Is that your final answer?",
        "You're breaking my heart 💔",
    ]

    useEffect(() => {
        // Generate initial hearts
        const initialHearts = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            duration: `${4 + Math.random() * 4}s`,
            delay: `${Math.random() * 5}s`,
        }))
        setHearts(initialHearts)
    }, [])

    const handleNoClick = () => {
        setNoCount(noCount + 1)

        // Move the button to a random position
        const maxX = window.innerWidth - 150
        const maxY = window.innerHeight - 100

        setNoButtonPosition({
            x: Math.random() * maxX,
            y: Math.random() * maxY,
        })
    }

    const handleNoHover = () => {
        if (noCount > 2) {
            // Start running away on hover after a few clicks
            const maxX = window.innerWidth - 150
            const maxY = window.innerHeight - 100

            setNoButtonPosition({
                x: Math.random() * maxX,
                y: Math.random() * maxY,
            })
        }
    }

    const getNoButtonText = () => {
        return phrases[Math.min(noCount, phrases.length - 1)]
    }

    if (yesPressed) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-pink-400 via-red-400 to-purple-500 flex items-center justify-center overflow-hidden relative">
                {/* Celebration hearts */}
                {Array.from({ length: 50 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-4xl animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    >
                        ❤️
                    </div>
                ))}

                <div className="text-center z-10 bg-white/90 p-12 rounded-3xl shadow-2xl max-w-2xl mx-4">
                    <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 mb-6 animate-pulse-slow">
                        Yaaay! 🎉
                    </h1>
                    <p className="text-3xl text-gray-700 mb-4">
                        I knew you'd say yes! 💕
                    </p>
                    <div className="text-7xl mb-4 animate-float">
                        😍
                    </div>
                    <p className="text-xl text-gray-600">
                        Get ready for the most amazing Valentine's Day ever!
                        <br />
                        I promise to make it unforgettable! 💝
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-red-300 flex items-center justify-center p-4 overflow-hidden relative">
            {/* Floating hearts background */}
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="absolute text-4xl opacity-30 heart-float pointer-events-none"
                    style={{
                        left: heart.left,
                        animationDuration: heart.duration,
                        animationDelay: heart.delay,
                    }}
                >
                    ❤️
                </div>
            ))}

            <div className="text-center z-10 relative">
                {/* Main question card */}
                <div className="bg-white/95 p-10 rounded-3xl shadow-2xl mb-8 backdrop-blur-sm">
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 mb-6 animate-pulse-slow">
                        Will You Be My Valentine? 💝
                    </h1>

                    <div className="text-8xl mb-8 animate-float">
                        🥺
                    </div>

                    <p className="text-xl text-gray-700 mb-8 max-w-md mx-auto">
                        I've been thinking about this for a while...
                        <br />
                        Would you make me the happiest person and be my Valentine?
                    </p>

                    {/* Buttons container */}
                    <div className="flex gap-6 justify-center items-center flex-wrap min-h-[100px] relative">
                        {/* Yes Button */}
                        <button
                            onClick={() => setYesPressed(true)}
                            className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold rounded-full shadow-lg transform hover:scale-110 transition-all duration-200 hover:shadow-2xl"
                            style={{
                                fontSize: `${yesButtonSize * 0.4}px`,
                                padding: `${yesButtonSize * 0.3}px ${yesButtonSize * 0.5}px`,
                            }}
                        >
                            Yes! 💕
                        </button>

                        {/* No Button - moves around */}
                        <button
                            onClick={handleNoClick}
                            onMouseEnter={handleNoHover}
                            className="bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-bold rounded-full shadow-lg transition-all duration-200"
                            style={{
                                fontSize: `${noButtonSize * 0.35}px`,
                                padding: `${noButtonSize * 0.25}px ${noButtonSize * 0.4}px`,
                                position: noCount > 0 ? 'fixed' : 'relative',
                                left: noCount > 0 ? `${noButtonPosition.x}px` : 'auto',
                                top: noCount > 0 ? `${noButtonPosition.y}px` : 'auto',
                                transition: 'all 0.3s ease-out',
                            }}
                        >
                            {getNoButtonText()}
                        </button>
                    </div>

                    {noCount > 0 && (
                        <p className="text-sm text-gray-500 mt-6 italic">
                            The "Yes" button is getting bigger... Maybe that's a sign? 😊
                        </p>
                    )}
                </div>

                {/* Fun message based on attempts */}
                {noCount > 5 && (
                    <div className="bg-pink-500/90 text-white p-6 rounded-2xl shadow-xl animate-pulse">
                        <p className="text-xl font-semibold">
                            The button is running away from you!
                            <br />
                            Maybe just click "Yes"? 🥺👉👈
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}