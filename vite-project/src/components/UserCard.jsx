import React from "react";

const UserCard = ({ name, role, location }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className="flex items-center space-x-4 mb-5">
        <div className="text-5xl">👤</div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-indigo-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-4">📍 <span className="italic">{location}</span></p>
      <button className="bg-indigo-500 hover:bg-indigo-600 text-black py-2 px-4 rounded-full transition-all duration-200">
        Contact
      </button>
    </div>
  );
};

export default UserCard;
