export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-4" />
        <p className="text-xs tracking-widest uppercase text-taupe">Loading</p>
      </div>
    </div>
  )
}
