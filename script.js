document.addEventListener('DOMContentLoaded', function() {
    // Pagination functionality
    const itemsPerPage = 12;
    const container = document.querySelector('.loading-container');
    const paginationContainer = document.querySelector('.pagination');
    const items = Array.from(container.getElementsByClassName('animation-item'));
    let currentPage = 1;

    function showPage(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        items.forEach((item, index) => {
            item.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
        });

        document.querySelectorAll('.page-btn').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.page) === page);
        });

        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function setupPagination() {
        const pageCount = Math.ceil(items.length / itemsPerPage);
        paginationContainer.innerHTML = '';

        const prevBtn = document.createElement('button');
        prevBtn.className = 'page-btn prev';
        prevBtn.innerHTML = '&lt;';
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
            }
        });
        paginationContainer.appendChild(prevBtn);

        for (let i = 1; i <= pageCount; i++) {
            const button = document.createElement('button');
            button.className = 'page-btn';
            button.textContent = i;
            button.dataset.page = i;
            button.addEventListener('click', () => {
                currentPage = i;
                showPage(currentPage);
            });
            paginationContainer.appendChild(button);
        }

        const nextBtn = document.createElement('button');
        nextBtn.className = 'page-btn next';
        nextBtn.innerHTML = '&gt;';
        nextBtn.addEventListener('click', () => {
            if (currentPage < pageCount) {
                currentPage++;
                showPage(currentPage);
            }
        });
        paginationContainer.appendChild(nextBtn);
    }

    // Theme switcher functionality
    const themeBtn = document.querySelector('.theme-btn');
    const themePanel = document.querySelector('.theme-panel');
    const themeOptions = document.querySelectorAll('.theme-option');
    
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeOptions.forEach(option => {
        option.classList.toggle('active', option.dataset.theme === savedTheme);
    });

    // Toggle theme panel
    themeBtn.addEventListener('click', () => {
        themePanel.classList.toggle('active');
    });

    // Close theme panel when clicking outside
    document.addEventListener('click', (e) => {
        if (!themePanel.contains(e.target) && !themeBtn.contains(e.target)) {
            themePanel.classList.remove('active');
        }
    });

    // Theme selection
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            
            // Update active state
            themeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            // Apply theme
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('selectedTheme', theme);
            
            // Add transition effect
            document.documentElement.style.transition = 'all 0.3s ease';
            setTimeout(() => {
                document.documentElement.style.transition = '';
            }, 300);
            
            // Close panel
            themePanel.classList.remove('active');
        });
    });

    // Initialize pagination
    setupPagination();
    showPage(1);
});
