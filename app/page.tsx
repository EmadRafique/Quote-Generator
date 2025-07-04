import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-500 via-blue-500 to-pink-500 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white/20 backdrop-blur-md shadow-2xl rounded-2xl p-8 transition-all duration-300 hover:scale-[1.01]">
        <h1 className="text-3xl font-bold text-white mb-6 text-center drop-shadow-md">
          Get Your Personalized Quote
        </h1>
        <QuoteForm />
      </div>
    </main>
  );
}
