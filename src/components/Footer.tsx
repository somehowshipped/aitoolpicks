export function Footer() {
  return (
    <footer className="border-t border-[#e5e7eb] bg-[#f9fafb]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-[#6b7280] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} AI Tool Picks. All rights reserved.</p>
        <p>AI coding guides for modern builders.</p>
      </div>
    </footer>
  );
}
