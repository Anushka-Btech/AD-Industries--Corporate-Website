export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute -top-40 -left-20 h-[520px] w-[520px] rounded-full bg-brand/30 blur-[120px] animate-blob" />
      <div className="absolute top-20 right-[-8rem] h-[520px] w-[520px] rounded-full bg-brand-glow/25 blur-[120px] animate-blob [animation-delay:-4s]" />
      <div className="absolute bottom-[-8rem] left-1/3 h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[120px] animate-blob [animation-delay:-8s]" />
      <div className="absolute inset-0 grid-lines opacity-60" />
    </div>
  );
}
