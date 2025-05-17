import React from "react";
import TreeTexture from './assets/wooden_brush.jpg';
import brownWood from './assets/brown-wood.jpg';


const familyData = {
  name: "Krishna Chaitanya",
  photo: "https://i.pravatar.cc/80?img=1",
  location: "Amalapuram",
  children: [
    {
      name: "Parent 1",
      photo: "https://i.pravatar.cc/80?img=2",
      location: "Hyderabad",
      children: [
        {
          name: "Child 1",
          photo: "https://i.pravatar.cc/80?img=3",
          location: "Bangalore",
        },
        {
          name: "Child 2",
          photo: "https://i.pravatar.cc/80?img=4",
          location: "Dubai",
        },
      ],
    },
  ],
};

const PersonCard = ({ name, photo, location, gradientClass }) => (
  <div
    className={`p-4 rounded-xl animate-grow cursor-pointer shadow-lg text-center max-w-xs text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${gradientClass} animate-fade-in`}
  >
    <img
      src={photo}
      alt={name}
      className="mx-auto rounded-full w-20 h-20 mb-3 border-4 border-white"
    />
    <h3 className="font-semibold text-lg tracking-wide">{name}</h3>
    <p className="text-sm opacity-90">{location}</p>
  </div>
);

const Connector = () => (
  <div className="w-1 h-10 mx-auto bg-gray-300 rounded-sm"></div>
);

const CurvedConnector = () => (
  <svg width="60" height="50" className="mx-auto">
    <path d="M30 0 C30 25, 30 25, 30 50" stroke="green" strokeWidth="2" fill="none" />
  </svg>
);


const FamilyTree = ({ person, level = 1 }) => {
  const gradientClasses = [
    "bg-gradient-to-br from-blue-500 to-purple-500",
    "bg-gradient-to-br from-green-500 to-teal-500",
    "bg-gradient-to-br from-pink-500 to-fuchsia-600",
    "bg-gradient-to-br from-indigo-500 to-blue-700",
    "bg-gradient-to-br from-orange-500 to-yellow-400",
  ];
  const gradientClass = gradientClasses[(level - 1) % gradientClasses.length];

  return (
    <div className="flex flex-col items-center">
      <PersonCard
        name={person.name}
        photo={person.photo}
        location={person.location}
        gradientClass={gradientClass}
      />
      {person.children && person.children.length > 0 && (
        <>
          <CurvedConnector />
          <div className="flex flex-wrap justify-center gap-12 mt-4 w-full max-w-6xl transition-all duration-300">
  {person.children.map((child, idx) => (
    <FamilyTree key={idx} person={child} level={level + 1} />
  ))}
</div>

        </>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="p-8 bg-gradient-to-br from-slate-100 via-sky-100 to-white min-h-screen font-sans" style={{
      backgroundImage: `url(${brownWood})`,
      backgroundRepeat: 'repeat',
      backgroundSize: 'cover',
    }}>
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center flex items-center justify-center gap-2">
  🌿 FamilyTree360 🌿
</h1>

      <p className="text-center text-brown-500 mb-10 text-lg">
        A beautiful way to visualize your legacy
      </p>
      <FamilyTree person={familyData} />
      <footer className="text-center mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} FamilyTree360. All rights reserved.
      </footer>
    </div>
  );
}
