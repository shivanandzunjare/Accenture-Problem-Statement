import React, { useState } from "react";
import { users as initialUsers } from "./Data/users";
import UserCard from "./components/UserCard";

const App = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = initialUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-100 to-indigo-100 py-10 px-4">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 drop-shadow-lg">
          🌟 Project Team
        </h1>
        <input
          type="text"
          placeholder="Search by name or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              role={user.role}
              location={user.location}
            />
          ))
        ) : (
          <p className="text-gray-800 text-lg col-span-full text-center">No users to display.</p>
        )}
      </div>
    </div>
  );
};

export default App;
