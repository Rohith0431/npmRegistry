import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle search submission logic here
    navigate(`/search?query=${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <VscSearch className="h-5 w-5 text-gray-500" />
        </div>
        <input
          value={query}
          className="pl-10 py-2 w-full border-0 shadow-none"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search NPM packages..."
        />
      </div>
    </form>
  );
}
