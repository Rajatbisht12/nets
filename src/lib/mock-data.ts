
export interface Celebrity {
  id: string;
  name: string;
  category: string;
  bio: string;
  rating: number;
  price: number;
  imageUrl: string;
  featured: boolean;
}

// Mock celebrities data
export const mockCelebrities: Celebrity[] = [
  {
    id: "cel-1",
    name: "Emma Stone",
    category: "Actor",
    bio: "Academy Award-winning actress known for La La Land and The Favourite.",
    rating: 4.9,
    price: 299,
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    featured: true
  },
  {
    id: "cel-2",
    name: "Michael Jordan",
    category: "Athlete",
    bio: "Legendary NBA player, considered one of the greatest basketball players of all time.",
    rating: 5.0,
    price: 599,
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    featured: true
  },
  {
    id: "cel-3",
    name: "Taylor Swift",
    category: "Musician",
    bio: "Multi-Grammy Award-winning singer-songwriter with chart-topping hits worldwide.",
    rating: 4.8,
    price: 499,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    featured: true
  },
  {
    id: "cel-4",
    name: "Chris Hemsworth",
    category: "Actor",
    bio: "Australian actor best known for playing Thor in the Marvel Cinematic Universe.",
    rating: 4.7,
    price: 349,
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    featured: true
  },
  {
    id: "cel-5",
    name: "Serena Williams",
    category: "Athlete",
    bio: "Tennis legend with 23 Grand Slam singles titles.",
    rating: 4.9,
    price: 549,
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    featured: true
  },
  {
    id: "cel-6",
    name: "Dwayne Johnson",
    category: "Actor",
    bio: "Actor and former WWE wrestler known as 'The Rock'.",
    rating: 4.8,
    price: 399,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    featured: true
  }
];

// Celebrity videos data
export interface CelebrityVideo {
  id: string;
  celebrityId: string;
  title: string;
  videoUrl: string;
}

export const celebrityVideos: CelebrityVideo[] = [
  {
    id: "vid-1",
    celebrityId: "cel-1", // Emma Stone
    title: "Behind the Scenes",
    videoUrl: "https://www.celebrityfootage.com/user_area/gallery/MP4_clips/12759_001.mp4",
  },
  {
    id: "vid-2",
    celebrityId: "cel-2", // Michael Jordan
    title: "Training Session",
    videoUrl: "https://www.celebrityfootage.com/user_area/gallery/MP4_clips/12759_001.mp4",
  },
  {
    id: "vid-3",
    celebrityId: "cel-3", // Taylor Swift
    title: "Studio Session",
    videoUrl: "https://www.celebrityfootage.com/user_area/gallery/MP4_clips/12759_001.mp4",
  },
  {
    id: "vid-4",
    celebrityId: "cel-4", // Chris Hemsworth
    title: "Workout Routine",
    videoUrl: "https://www.celebrityfootage.com/user_area/gallery/MP4_clips/12759_001.mp4",
  },
  {
    id: "vid-5",
    celebrityId: "cel-5", // Serena Williams
    title: "Tennis Practice",
    videoUrl: "https://www.celebrityfootage.com/user_area/gallery/MP4_clips/12759_001.mp4",
  },
  {
    id: "vid-6",
    celebrityId: "cel-6", // Dwayne Johnson
    title: "Gym Workout",
    videoUrl: "https://www.celebrityfootage.com/user_area/gallery/MP4_clips/12759_001.mp4",
  }
];

// Function to get a celebrity by ID
export function getCelebrityById(id: string): Celebrity | undefined {
  return mockCelebrities.find(celebrity => celebrity.id === id);
}

// Function to get videos for a celebrity
export function getVideosForCelebrity(celebrityId: string): CelebrityVideo[] {
  return celebrityVideos.filter(video => video.celebrityId === celebrityId);
}
