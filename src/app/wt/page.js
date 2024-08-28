"use client";

import { useState, useEffect } from 'react';

export default function Watchlist() {
  const apiUrl = 'https://kuryana.vercel.app';
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  const handleSearch = async () => {
    if (searchQuery) {
      try {
        const response = await fetch(`${apiUrl}/search/q/${searchQuery}`);
        const data = await response.json();
        setSearchResults(data.results.dramas || []);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
  };

  const addToWatchlist = (slug, title, thumb) => {
    const newWatchlistItem = { slug, title, thumb, comments: [] };
    const updatedWatchlist = [...watchlist, newWatchlistItem];
    setWatchlist(updatedWatchlist);
    saveToLocalStorage(updatedWatchlist);
  };

  const saveComment = (slug, comment) => {
    const updatedWatchlist = watchlist.map(item =>
      item.slug === slug
        ? { ...item, comments: [...item.comments, comment] }
        : item
    );
    setWatchlist(updatedWatchlist);
    saveToLocalStorage(updatedWatchlist);
  };

  const saveToLocalStorage = (updatedWatchlist) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    }
  };

  const loadFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      const savedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
      setWatchlist(savedWatchlist);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl mb-4">Watchlist</h1>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="ค้นหา..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 bg-gray-700 text-white rounded"
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-blue-500 text-white rounded"
        >
          ค้นหา
        </button>
      </div>

      <div id="searchResults" className="mb-6">
        {searchResults.length > 0 ? (
          searchResults.map(drama => (
            <div key={drama.slug} className="bg-gray-800 p-4 rounded-lg mb-4 flex gap-4">
              {drama.thumb && <img src={drama.thumb} alt={drama.title} className="w-24 h-24 object-cover rounded" />}
              <div>
                <h3 className="text-xl">{drama.title}</h3>
                <p>{drama.type} ({drama.year})</p>
                <p>{drama.ranking}</p>
                <button
                  onClick={() => addToWatchlist(drama.slug, drama.title, drama.thumb)}
                  className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
                >
                  เพิ่มลงลิสต์
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>ไม่พบผลลัพธ์ที่ตรงกับการค้นหา</p>
        )}
      </div>

      <h2 className="text-3xl mb-4">My List</h2>
      <div className="grid grid-cols-2 gap-6">
        {watchlist.length > 0 && watchlist.map(item => (
          <div key={item.slug} className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <img src={item.thumb} alt={item.title} className="w-16 h-16 object-cover rounded" />
              <span className="text-lg">{item.title}</span>
            </div>
            <div className="mb-2">
              <input
                type="text"
                placeholder="ใส่ความคิดเห็น..."
                className="w-full p-2 bg-gray-700 text-white rounded"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.target.value.trim()) {
                    saveComment(item.slug, e.target.value.trim());
                    e.target.value = '';
                  }
                }}
              />
            </div>
            <div className="comments">
              {item.comments.map((comment, idx) => (
                <p key={idx} className="text-sm text-gray-400">{comment}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
