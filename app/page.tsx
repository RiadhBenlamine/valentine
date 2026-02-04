'use client'

import { useState, useEffect } from 'react'

export default function Home() {
    const [noCount, setNoCount] = useState(0)
    const [yesPressed, setYesPressed] = useState(false)
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
    const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([])

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
        const interval = setInterval(() => {
            setSparkles(prev => [
                ...prev.slice(-20),
                {
                    id: Date.now(),
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                }
            ])
        }, 300)
        return () => clearInterval(interval)
    }, [])

    const handleNoClick = () => {
        setNoCount(noCount + 1)
        const maxX = window.innerWidth - 150
        const maxY = window.innerHeight - 100
        setNoButtonPosition({
            x: Math.random() * maxX,
            y: Math.random() * maxY,
        })
    }

    const handleNoHover = () => {
        if (noCount > 2) {
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
            <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-600">
                {/* Animated gradient orbs */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-pink-400/30 to-transparent rounded-full blur-3xl animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-rose-400/30 to-transparent rounded-full blur-3xl animate-[spin_15s_linear_infinite_reverse]"></div>
                </div>

                {/* Floating hearts celebration */}
                {Array.from({ length: 100 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-[float_3s_ease-in-out_infinite]"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            fontSize: `${20 + Math.random() * 40}px`,
                            opacity: 0.6 + Math.random() * 0.4,
                        }}
                    >
                        {['❤️', '💕', '💖', '💗', '💝', '💘'][Math.floor(Math.random() * 6)]}
                    </div>
                ))}

                {/* Confetti particles */}
                {Array.from({ length: 50 }).map((_, i) => (
                    <div
                        key={`confetti-${i}`}
                        className="absolute w-2 h-2 rounded-full animate-[fall_4s_linear_infinite]"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `-${Math.random() * 20}%`,
                            backgroundColor: ['#ff6b9d', '#c44569', '#f8b500', '#ea5455', '#eb4d4b'][Math.floor(Math.random() * 5)],
                            animationDelay: `${Math.random() * 4}s`,
                        }}
                    />
                ))}

                <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
                    <div className="text-center backdrop-blur-xl bg-white/10 border border-white/20 p-12 rounded-[3rem] shadow-2xl max-w-2xl mx-4 animate-[scaleIn_0.5s_ease-out]">
                        <div className="relative">
                            <h1 className="text-7xl md:text-8xl font-black mb-6 animate-[pulse_2s_ease-in-out_infinite]"
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    background: 'linear-gradient(45deg, #fff, #ffe0e9, #fff, #ffd4e5)',
                                    backgroundSize: '300% 300%',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    animation: 'gradient 3s ease infinite, pulse 2s ease-in-out infinite',
                                }}>
                                Yaaay! 🎉
                            </h1>

                            {/* Glow effect */}
                            <div className="absolute inset-0 blur-3xl opacity-50 bg-gradient-to-r from-pink-300 via-rose-300 to-fuchsia-300 -z-10"></div>
                        </div>

                        <p className="text-3xl md:text-4xl text-white font-semibold mb-6 drop-shadow-lg"
                           style={{ fontFamily: "'Poppins', sans-serif" }}>
                            I knew you'd say yes! 💕
                        </p>

                        <div className="text-9xl my-8 animate-[bounce_1s_ease-in-out_infinite]">
                            😍
                        </div>

                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium"
                           style={{ fontFamily: "'Quicksand', sans-serif" }}>
                            Get ready for the most amazing Valentine's Day ever!
                            <br />
                            <span className="inline-block mt-2 text-2xl animate-[wave_1s_ease-in-out_infinite]">
                I promise to make it unforgettable! 💝
              </span>
                        </p>

                        {/* Decorative elements */}
                        <div className="mt-8 flex justify-center gap-4">
                            {['💐', '🌹', '🎁', '🍫', '🌟'].map((emoji, i) => (
                                <span
                                    key={i}
                                    className="text-4xl animate-[float_2s_ease-in-out_infinite]"
                                    style={{ animationDelay: `${i * 0.2}s` }}
                                >
                  {emoji}
                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Poppins:wght@600&family=Quicksand:wght@500;600&display=swap');
          
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
          }
          
          @keyframes scaleIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          
          @keyframes fall {
            to { transform: translateY(100vh) rotate(360deg); }
          }
          
          @keyframes wave {
            0%, 100% { transform: rotate(-3deg); }
            50% { transform: rotate(3deg); }
          }
        `}</style>
            </div>
        )
    }

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Animated mesh gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-rose-200 to-fuchsia-200">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-[blob_7s_ease-in-out_infinite]"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl animate-[blob_7s_ease-in-out_infinite] animation-delay-2000"></div>
                    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-fuchsia-400 rounded-full mix-blend-multiply filter blur-3xl animate-[blob_7s_ease-in-out_infinite] animation-delay-4000"></div>
                </div>
            </div>

            {/* Sparkle particles */}
            {sparkles.map((sparkle) => (
                <div
                    key={sparkle.id}
                    className="absolute w-1 h-1 bg-white rounded-full animate-[twinkle_1s_ease-out_forwards]"
                    style={{
                        left: `${sparkle.x}%`,
                        top: `${sparkle.y}%`,
                    }}
                />
            ))}

            {/* Floating hearts */}
            {Array.from({ length: 20 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute text-4xl opacity-20 pointer-events-none animate-[floatUp_8s_linear_infinite]"
                    style={{
                        left: `${(i * 5) % 100}%`,
                        animationDelay: `${i * 0.5}s`,
                    }}
                >
                    {['💕', '💖', '💗', '💝'][i % 4]}
                </div>
            ))}

            <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
                <div className="text-center max-w-3xl">
                    {/* Main card with glassmorphism */}
                    <div className="backdrop-blur-2xl bg-white/40 border border-white/60 p-12 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] mb-8 animate-[fadeIn_1s_ease-out]">
                        <div className="relative mb-8">
                            <h1 className="text-6xl md:text-7xl font-black mb-4 leading-tight"
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    background: 'linear-gradient(135deg, #ec4899 0%, #be185d 50%, #9d174d 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textShadow: '0 10px 30px rgba(236, 72, 153, 0.3)',
                                }}>
                                Will You Be My
                                <br />
                                Valentine? 💝
                            </h1>
                            {/* Decorative line */}
                            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="text-8xl mb-8 animate-[bounce_2s_ease-in-out_infinite]"
                             style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}>
                            🥺
                        </div>

                        <p className="text-xl md:text-2xl text-gray-800 mb-10 leading-relaxed font-medium max-w-xl mx-auto"
                           style={{ fontFamily: "'Lora', serif" }}>
                            I've been thinking about this for a while...
                            <br />
                            <span className="text-2xl text-rose-600 font-semibold">
                Would you make me the happiest person and be my Valentine?
              </span>
                        </p>

                        {/* Buttons */}
                        <div className="flex gap-6 justify-center items-center flex-wrap min-h-[120px] relative">
                            {/* Yes Button with premium styling */}
                            <button
                                onClick={() => setYesPressed(true)}
                                className="group relative overflow-hidden font-bold rounded-full shadow-2xl transition-all duration-300 hover:shadow-[0_20px_40px_rgba(34,197,94,0.4)] hover:scale-110 active:scale-105"
                                style={{
                                    fontSize: `${yesButtonSize * 0.4}px`,
                                    padding: `${yesButtonSize * 0.3}px ${yesButtonSize * 0.5}px`,
                                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                    fontFamily: "'Poppins', sans-serif",
                                }}
                            >
                                <span className="relative z-10 text-white drop-shadow-md">Yes! 💕</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>

                            {/* No Button with dynamic positioning */}
                            <button
                                onClick={handleNoClick}
                                onMouseEnter={handleNoHover}
                                className="group relative overflow-hidden font-bold rounded-full shadow-xl transition-all duration-200 hover:shadow-2xl"
                                style={{
                                    fontSize: `${noButtonSize * 0.35}px`,
                                    padding: `${noButtonSize * 0.25}px ${noButtonSize * 0.4}px`,
                                    position: noCount > 0 ? 'fixed' : 'relative',
                                    left: noCount > 0 ? `${noButtonPosition.x}px` : 'auto',
                                    top: noCount > 0 ? `${noButtonPosition.y}px` : 'auto',
                                    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                                    fontFamily: "'Poppins', sans-serif",
                                    transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                                }}
                            >
                                <span className="relative z-10 text-white drop-shadow-md">{getNoButtonText()}</span>
                            </button>
                        </div>

                        {noCount > 0 && (
                            <p className="text-sm text-gray-600 mt-6 italic animate-[fadeIn_0.5s_ease-out]"
                               style={{ fontFamily: "'Quicksand', sans-serif" }}>
                                ✨ The "Yes" button is getting bigger... Maybe that's a sign? 😊
                            </p>
                        )}
                    </div>

                    {/* Additional message */}
                    {noCount > 5 && (
                        <div className="backdrop-blur-xl bg-gradient-to-r from-pink-500/90 to-rose-500/90 text-white p-8 rounded-3xl shadow-2xl animate-[slideUp_0.5s_ease-out] border border-white/30">
                            <p className="text-2xl font-bold mb-2"
                               style={{ fontFamily: "'Poppins', sans-serif" }}>
                                The button is running away from you! 🏃‍♂️💨
                            </p>
                            <p className="text-lg"
                               style={{ fontFamily: "'Quicksand', sans-serif" }}>
                                Maybe just click "Yes"? 🥺👉👈
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=Lora:wght@500;600&family=Poppins:wght@600;700;800&family=Quicksand:wght@500;600&display=swap');
        
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes floatUp {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes twinkle {
          0% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0); }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </div>
    )
}