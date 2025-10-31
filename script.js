document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const filter = searchInput.value.toLowerCase();
            document.querySelectorAll('ul li').forEach(item => {
                item.style.display = item.textContent.toLowerCase().includes(filter) ? '' : 'none';
            });
        });
    }
});
