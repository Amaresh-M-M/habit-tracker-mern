export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold tracking-tight mb-4">
            TrackEasy
          </h1>
          <p className="text-2xl text-zinc-400">
            Build better habits, one day at a time
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-zinc-900 rounded-3xl p-10 shadow-xl">
          <p className="text-zinc-400 text-center text-lg mb-8">
            Your simple daily habit tracker is ready.<br />
            We will build it step by step over the next 7 days.
          </p>
          
          <div className="text-center">
            <div className="inline-block bg-zinc-800 text-zinc-400 px-6 py-3 rounded-2xl text-sm">
              Current Status: Setup Complete ✅
            </div>
          </div>
        </div>

        <p className="text-center text-zinc-500 mt-12 text-sm">
          Push this change to GitHub and watch it auto-deploy on Vercel
        </p>
      </div>
    </div>
  );
}