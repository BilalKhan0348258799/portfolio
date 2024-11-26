// app/layout.tsx
import '../styles/globals.css';

export const metadata = {
  title: 'Muhammad Bilal | Portfolio',
  description: 'Personal portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-accent">
        <header className="bg-primary text-white py-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-wide">Muhammad Bilal</h1>
            <nav>
              <a href="/" className="px-4 hover:underline">Home</a>
              <a href="/about" className="px-4 hover:underline">About</a>
              <a href="/contact" className="px-4 hover:underline">Contact</a>
            </nav>
          </div>
        </header>
        <main className="container mx-auto mt-10 p-4">
          {children}
        </main>
        <footer className="bg-secondary text-white py-4 text-center">
          <p>&copy; 2024 Muhammad Bilal. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
