// app/page.tsx
export default function Home() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-primary mb-6">
        Welcome to My Portfolio
      </h2>
      <p className="text-lg mb-8">
        I am <span className="font-semibold">Muhammad Bilal</span>, a passionate student of BSCS, part of the AI & Cloud Computing initiative.
      </p>
      <h3 className="text-3xl font-semibold mb-6">My Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="https://rent-a-car-amber.vercel.app" target="_blank" className="bg-white shadow-lg p-6 rounded-lg hover:bg-primary hover:text-blue transition text-red-500">
          <h4 className="text-xl font-bold">Rent a Car</h4>
          <p className="mt-2">A car rental service project.</p>
        </a>
        <a href="https://clothing-website-tawny.vercel.app" target="_blank" className="bg-white shadow-lg p-6 rounded-lg hover:bg-primary hover:text-blue transition text-red-500">
          <h4 className="text-xl font-bold">Clothing Website</h4>
          <p className="mt-2">An elegant clothing store.</p>
        </a>
        <a href="https://resume-builder-1-two.vercel.app" target="_blank" className="bg-white shadow-lg p-6 rounded-lg hover:bg-primary hover:text-blue transition text-red-500">
          <h4 className="text-xl font-bold">Resume Builder</h4>
          <p className="mt-2">Interactive resume creation tool.</p>
        </a>
      </div>
    </div>
  );
}
