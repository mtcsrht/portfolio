export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-2xl px-6 py-8 mt-16 border-t border-border">
      <div className="flex flex-col gap-1 font-mono text-sm text-muted sm:flex-row sm:justify-between">
        <p>made by Máté Cserháti</p>
        <p>© {new Date().getFullYear()} · Budapest</p>
      </div>
    </footer>
  );
}
