const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  role: "Admin",
  status: "Active",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.",
  profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
  activities: [
    { id: 1, description: "Updated password", timestamp: "2025-02-10" },
    { id: 2, description: "Changed email address", timestamp: "2025-01-25" },
    {
      id: 3,
      description: "Logged in from a new device",
      timestamp: "2025-01-15",
    },
  ],
};
export default user;
