$(document).ready(function() {
    let names = [];

    $.ajax({
        url: 'names.json',  
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            names = data.names;
        },
        error: function(err) {
            console.log('Error loading data:', err);
        }
    });

    $('#search-input').on('input', function() {
        let query = $(this).val().toLowerCase();

        if (query.length > 1) {
            let filteredItems = names.filter((item) =>
                item.toLowerCase().includes(query)
            );

            let suggestions = $('#suggestions');
            suggestions.empty(); 

            if (filteredItems.length > 0) {
                filteredItems.forEach(function(item) {
                    suggestions.append(`<div>${item}</div>`);
                });
            } else {
                suggestions.append('<div>No results found</div>');
            }

            
            $('.autocomplete-suggestions div').on('click', function() {
                $('#search-input').val($(this).text());
                suggestions.empty(); 
            });
        } else {
            $('#suggestions').empty(); 
        }
    });
});
