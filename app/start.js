const input = document.getElementById('search-box');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const query = input.value.trim();
    if (query.startsWith('http')) {
      window.location.href = query; // direct URL
    } else {
      const searchEngine = "https://www.google.com/search?q=";
      window.location.href = `${searchEngine}${encodeURIComponent(query)}`;
    }
  }
});
