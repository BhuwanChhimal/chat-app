import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "aarav.sharma@example.com",
    fullName: "Aarav Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
    email: "aasha.poudel@example.com",
    fullName: "Aasha Poudel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
    email: "priya.adhikari@example.com",
    fullName: "Priya Adhikari",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
    email: "sita.karki@example.com",
    fullName: "Sita Karki",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
    email: "anisha.khatri@example.com",
    fullName: "Anisha Khatri",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
    email: "deepika.thapa@example.com",
    fullName: "Deepika Thapa",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
    email: "kavita.shrestha@example.com",
    fullName: "Kavita Shrestha",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
    email: "sarita.tamang@example.com",
    fullName: "Sarita Tamang",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    // Male Users
    {
    email: "ram.bhattarai@example.com",
    fullName: "Ram Bhattarai",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
    email: "krishna.gurung@example.com",
    fullName: "Krishna Gurung",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
    email: "arjun.basnet@example.com",
    fullName: "Arjun Basnet",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
    email: "sanjay.magar@example.com",
    fullName: "Sanjay Magar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
    email: "prakash.rai@example.com",
    fullName: "Prakash Rai",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
    email: "bikash.limbu@example.com",
    fullName: "Bikash Limbu",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
    email: "suraj.chhetri@example.com",
    fullName: "Suraj Chhetri",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
    },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();