        document.addEventListener('DOMContentLoaded', function() {
            const sectionLinks = document.querySelectorAll('header nav ul li a');
            const sections = document.querySelectorAll('main .section');
            const proximamenteMsg = document.getElementById('proximamente-msg');
            const buttonGroups = document.querySelectorAll('.button-group button');
            
            // Show section based on menu item click
            sectionLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    
                    // Hide all sections
                    sections.forEach(section => section.classList.remove('active'));
                    
                    // Remove active class from all links
                    sectionLinks.forEach(link => link.classList.remove('active'));
                    
                    // Show the clicked section
                    const sectionId = this.getAttribute('data-section');
                    if (sectionId) {
                        document.getElementById(sectionId).classList.add('active');
                    }

                    // Update active link
                    this.classList.add('active');
                    
                    // Show or hide "Próximamente" message
                    if (sectionId === 'consolas') {
                        proximamenteMsg.style.display = 'block';
                    } else {
                        proximamenteMsg.style.display = 'none';
                    }
                });
            });
            
            // Show category based on button click
            buttonGroups.forEach(button => {
                button.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');
                    
                    // Hide all categories
                    document.querySelectorAll('.category').forEach(cat => cat.style.display = 'none');
                    
                    // Show the selected category
                    if (category) {
                        document.getElementById(category).style.display = 'block';
                    }
                });
            });
        });