export default function Loading() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden relative">
            {/* Animated Background Pattern - İnşaat temalı geometrik şekiller */}
            <div className="absolute inset-0 opacity-10">
                {/* Diagonal lines - İnşaat temalı çizgiler */}
                <div className="absolute inset-0 bg-repeat animate-slide-diagonal"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
                             45deg,
                             transparent,
                             transparent 35px,
                             rgba(250, 204, 21, 0.1) 35px,
                             rgba(250, 204, 21, 0.1) 70px
                         )`
                    }}>
                </div>
            </div>

            {/* Floating geometric shapes - Yüzen geometrik şekiller */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-32 h-32 border-2 border-yellow-400/20 rotate-45 animate-float-slow"></div>
                <div className="absolute top-40 right-32 w-24 h-24 border-2 border-yellow-400/20 animate-float-medium"></div>
                <div className="absolute bottom-32 left-1/4 w-40 h-40 border-2 border-yellow-400/20 rotate-12 animate-float-slow"></div>
                <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-yellow-400/20 rotate-45 animate-float-fast"></div>

                {/* Circles */}
                <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full border-2 border-yellow-400/20 animate-float-medium"></div>
                <div className="absolute bottom-1/3 left-1/3 w-16 h-16 rounded-full border-2 border-yellow-400/20 animate-float-fast"></div>
            </div>

            {/* Logo - Merkez */}
            <div className="relative z-10 text-center">
                <h1 className="text-4xl sm:text-5xl font-bold">
                    {/* Han - Kalp atışı gibi */}
                    <span className="inline-block text-yellow-400 animate-heartbeat drop-shadow-lg">
                        Han
                    </span>
                    {/* yapı - Sabit kısım */}
                    <span className="text-white drop-shadow-lg">yapı</span>
                </h1>
            </div>

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `linear-gradient(rgba(250, 204, 21, 0.1) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(250, 204, 21, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}>
            </div>
        </div>
    );
}
