export default function SearchBar({
    search,
    setSearch,
}) {
    return (
        <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-3 rounded-lg mb-5"
        />
    );
}