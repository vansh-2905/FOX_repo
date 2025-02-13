"use client";

export default function MePage() {
  return (
    <main className="min-h-screen bg-black pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Urban Warriors</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1526906144461-2df6f949eb5f?w=1600&auto=format&fit=crop" 
              alt="Urban Warriors"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-white space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">About</h2>
              <p className="text-white/80">A gritty urban action series following a group of vigilantes protecting their city from corruption and crime.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-2">Cast</h2>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Sarah Chen as Maya Lin</li>
                <li>Marcus Rodriguez as Diego Torres</li>
                <li>James Wilson as Detective Carter</li>
                <li>Aisha Johnson as Dr. Parker</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-2">Episodes</h2>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>S1E1: "Streets of Shadow"</li>
                <li>S1E2: "The Underground"</li>
                <li>S1E3: "Night Watch"</li>
                <li>S1E4: "Code of Honor"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}