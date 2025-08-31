const input = document.getElementById('search-box');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const query = input.value.trim();
    if (query.startsWith('http')) {
      window.location.href = query;
    } else {
      window.location.href = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
    }
  }
});
