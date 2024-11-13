$(document).ready(function () {
    let currentPage = 1;
    const itemsPerPage = 5; // Number of items to load per request
    const contentList = $('#content-list');
    const loadMoreButton = $('#load-more-btn');

    // Mock data to simulate the API response
    const mockData = [
        { title: 'Post 1' },
        { title: 'Post 2' },
        { title: 'Post 3' },
        { title: 'Post 4' },
        { title: 'Post 5' },
        { title: 'Post 6' },
        { title: 'Post 7' },
        { title: 'Post 8' },
        { title: 'Post 9' },
        { title: 'Post 10' },
        { title: 'Post 11' },
        { title: 'Post 12' },
        { title: 'Post 13' },
        { title: 'Post 14' },
        { title: 'Post 15' }
    ];

    // Function to load content from the mock data and append to the list
    function loadMoreContent(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const data = mockData.slice(startIndex, endIndex);

        if (data.length > 0) {
            // Append each item to the list
            data.forEach(item => {
                contentList.append(`<li>${item.title}</li>`);
            });

            loadMoreButton.text('Load More');
            loadMoreButton.prop('disabled', false);

            // Hide the "Load More" button if no more data is available
            if (endIndex >= mockData.length) {
                loadMoreButton.text('No more content to load');
                loadMoreButton.prop('disabled', true);
            }
        } else {
            // Custom message for no more content
            loadMoreButton.text('No more content to load');
            loadMoreButton.prop('disabled', true);
        }
    }

    // Initial content load
    loadMoreContent(currentPage);

    // Event listener for the "Load More" button
    loadMoreButton.on('click', function () {
        currentPage++; // Increment page number
        loadMoreContent(currentPage); // Load the next page
    });
});
