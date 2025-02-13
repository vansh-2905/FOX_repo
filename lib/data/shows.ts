export type Show = {
  id: number;
  title: string;
  image: string;
  genre?: string;
};

export const shows = {
  featured: [
    { 
      id: 1, 
      title: "The Last Journey", 
      image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1920&h=1080&fit=crop", 
      genre: "Action" 
    },
    { 
      id: 2, 
      title: "Silent Echo", 
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop", 
      genre: "Drama" 
    },
    { 
      id: 3, 
      title: "City Lights", 
      image: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?w=1920&h=1080&fit=crop", 
      genre: "Comedy" 
    },
  ],
  action: [
    { id: 4, title: "Desert Storm", image: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=800&auto=format&fit=crop" },
    { id: 5, title: "Urban Warriors", image: "https://images.unsplash.com/photo-1526906144461-2df6f949eb5f?w=800&auto=format&fit=crop" },
  ],
  drama: [
    { id: 6, title: "Lost in Time", image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&auto=format&fit=crop" },
    { id: 7, title: "The Inheritance", image: "https://images.unsplash.com/photo-1497514440240-3b870f7341f0?w=800&auto=format&fit=crop" },
  ],
  comedy: [
    { id: 8, title: "Happy Days", image: "https://images.unsplash.com/photo-1517242027094-631f8c218a0f?w=800&auto=format&fit=crop" },
    { id: 9, title: "Office Party", image: "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?w=800&auto=format&fit=crop" },
  ],
} as const;

export type ShowsData = typeof shows;