document.addEventListener('DOMContentLoaded', () => {
    // Universal Nav Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // --- Property Data (Static for Demo) ---
    const propertiesData = [
        {
            id: 1,
            title: 'Luxury Villa with Pool',
            location: 'Miami, Florida',
            price: 1850000,
            beds: 4,
            baths: 3,
            sqft: 3200,
            garage: 2,
            type: 'villa',
            image: 'https://via.placeholder.com/400x250/6A82FB/FFFFFF?text=Luxury+Villa',
            images: [
                'https://via.placeholder.com/900x600/6A82FB/FFFFFF?text=Luxury+Property+1',
                'https://via.placeholder.com/900x600/FC5C7D/FFFFFF?text=Villa+Interior+Kitchen',
                'https://via.placeholder.com/900x600/FFC300/FFFFFF?text=Villa+Interior+Bedroom',
                'https://via.placeholder.com/900x600/2ECC71/FFFFFF?text=Villa+Pool+Area',
                'https://via.placeholder.com/900x600/9C27B0/FFFFFF?text=Villa+Bathroom'
            ],
            description: 'This stunning luxury villa offers breathtaking ocean views and unparalleled elegance. Located in the prestigious area of Miami, it features spacious interiors, high ceilings, and state-of-the-art amenities. Enjoy a private pool, a gourmet kitchen, and beautifully landscaped gardens. Perfect for those seeking an exclusive and serene lifestyle.',
            amenities: ['Private Pool', 'Air Conditioning', 'Modern Kitchen', 'High-Speed Internet', 'Parking Space', 'Security System', 'Balcony/Patio']
        },
        {
            id: 2,
            title: 'Spacious City Apartment',
            location: 'New York, NY',
            price: 750000,
            beds: 2,
            baths: 2,
            sqft: 1200,
            garage: 1,
            type: 'apartment',
            image: 'https://via.placeholder.com/400x250/FF6B6B/FFFFFF?text=Modern+Apartment',
            images: [
                'https://via.placeholder.com/900x600/FF6B6B/FFFFFF?text=Modern+Apartment+1',
                'https://via.placeholder.com/900x600/FFC300/FFFFFF?text=Apartment+Living',
                'https://via.placeholder.com/900x600/6A82FB/FFFFFF?text=Apartment+Bedroom',
                'https://via.placeholder.com/900x600/2ECC71/FFFFFF?text=Apartment+View',
                'https://via.placeholder.com/900x600/FC5C7D/FFFFFF?text=Apartment+Kitchen'
            ],
            description: 'A spacious and modern apartment in the heart of New York City. Features an open-plan living area, two large bedrooms, and stunning city views. Enjoy access to a private gym and rooftop terrace. Close to all major attractions and public transport.',
            amenities: ['Gym Access', 'Rooftop Terrace', 'Concierge Service', 'Central Heating', 'Dishwasher', 'Pets Allowed']
        },
        {
            id: 3,
            title: 'Cozy Family Home',
            location: 'Austin, Texas',
            price: 499000,
            beds: 3,
            baths: 2,
            sqft: 1800,
            garage: 2,
            type: 'house',
            image: 'https://via.placeholder.com/400x250/2ECC71/FFFFFF?text=Cozy+Family+Home',
            images: [
                'https://via.placeholder.com/900x600/2ECC71/FFFFFF?text=Cozy+Family+Home+1',
                'https://via.placeholder.com/900x600/6A82FB/FFFFFF?text=Home+Living+Room',
                'https://via.placeholder.com/900x600/FC5C7D/FFFFFF?text=Home+Garden',
                'https://via.placeholder.com/900x600/FFC300/FFFFFF?text=Home+Kids+Room',
                'https://via.placeholder.com/900x600/9C27B0/FFFFFF?text=Home+Exterior'
            ],
            description: 'A charming and cozy family home located in a quiet neighborhood in Austin. This property boasts a large backyard, a modern kitchen, and comfortable living spaces. Perfect for growing families, with excellent schools nearby.',
            amenities: ['Large Backyard', 'Hardwood Floors', 'Fireplace', 'Washer/Dryer Hookups', 'Pet-Friendly', 'Close to Parks']
        },
        {
            id: 4,
            title: 'Downtown Condo with View',
            location: 'Chicago, Illinois',
            price: 580000,
            beds: 2,
            baths: 2,
            sqft: 1100,
            garage: 1,
            type: 'condo',
            image: 'https://via.placeholder.com/400x250/9C27B0/FFFFFF?text=Downtown+Condo',
            images: [
                'https://via.placeholder.com/900x600/9C27B0/FFFFFF?text=Downtown+Condo+1',
                'https://via.placeholder.com/900x600/6A82FB/FFFFFF?text=Condo+Living+Area',
                'https://via.placeholder.com/900x600/2ECC71/FFFFFF?text=Condo+Balcony',
                'https://via.placeholder.com/900x600/FF6B6B/FFFFFF?text=Condo+Bedroom',
                'https://via.placeholder.com/900x600/FC5C7D/FFFFFF?text=Condo+Kitchen'
            ],
            description: 'Experience urban living at its finest in this stylish downtown condo. Enjoy panoramic city views from your private balcony. Building amenities include a fitness center and 24-hour security. Ideal for professionals seeking convenience and luxury.',
            amenities: ['City Views', 'Balcony', 'Fitness Center', '24/7 Security', 'Stainless Steel Appliances', 'Community Pool']
        },
        {
            id: 5,
            title: 'Rustic Cabin Retreat',
            location: 'Asheville, NC',
            price: 320000,
            beds: 2,
            baths: 1,
            sqft: 950,
            garage: 0,
            type: 'house',
            image: 'https://via.placeholder.com/400x250/FFC300/FFFFFF?text=Rustic+Cabin',
            images: [
                'https://via.placeholder.com/900x600/FFC300/FFFFFF?text=Rustic+Cabin+1',
                'https://via.placeholder.com/900x600/6A82FB/FFFFFF?text=Cabin+Interior',
                'https://via.placeholder.com/900x600/2ECC71/FFFFFF?text=Cabin+Forest+View',
                'https://via.placeholder.com/900x600/FF6B6B/FFFFFF?text=Cabin+Deck',
                'https://via.placeholder.com/900x600/9C27B0/FFFFFF?text=Cabin+Fireplace'
            ],
            description: 'Escape to this charming rustic cabin nestled in the mountains near Asheville. Perfect for a peaceful retreat or a cozy family getaway. Features a wood-burning fireplace and stunning natural surroundings.',
            amenities: ['Wood-Burning Fireplace', 'Mountain Views', 'Hiking Trails Nearby', 'Private Deck', 'Garden Space']
        }
    ];

    // --- Helper Function to Format Price ---
    function formatPrice(price) {
        return `$${price.toLocaleString('en-US')}`;
    }

    // --- Create Property Card HTML ---
    function createPropertyCard(property) {
        const card = document.createElement('div');
        card.classList.add('property-card');
        card.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <div class="card-content">
                <h4>${property.title}</h4>
                <p class="location"><i class="fas fa-map-marker-alt"></i> ${property.location}</p>
                <p class="price">${formatPrice(property.price)}</p>
                <div class="features">
                    <span><i class="fas fa-bed"></i> ${property.beds} Beds</span>
                    <span><i class="fas fa-bath"></i> ${property.baths} Baths</span>
                    <span><i class="fas fa-ruler-combined"></i> ${property.sqft} SqFt</span>
                </div>
                <a href="property-detail.html?id=${property.id}" class="btn btn-secondary">View Details</a>
            </div>
        `;
        return card;
    }

    // --- Home Page Logic ---
    if (document.querySelector('.featured-properties-section')) {
        const featuredPropertiesContainer = document.querySelector('.featured-properties-section .property-grid');
        if (featuredPropertiesContainer) {
            // Display first 3 properties as featured
            propertiesData.slice(0, 3).forEach(property => {
                featuredPropertiesContainer.appendChild(createPropertyCard(property));
            });
        }

        const heroSearchButton = document.querySelector('.hero-section .search-button');
        const heroSearchInput = document.querySelector('.hero-section .search-input');
        if (heroSearchButton && heroSearchInput) {
            heroSearchButton.addEventListener('click', (e) => {
                e.preventDefault();
                const searchTerm = heroSearchInput.value.trim();
                if (searchTerm) {
                    // Redirect to properties page with search term
                    window.location.href = `properties.html?search=${encodeURIComponent(searchTerm)}`;
                } else {
                    window.location.href = `properties.html`;
                }
            });
        }
    }

    // --- Properties Page Logic ---
    if (document.querySelector('.properties-page')) {
        const propertiesContainer = document.getElementById('properties-container');
        const propertyFiltersForm = document.getElementById('property-filters');

        function renderProperties(filteredProperties) {
            propertiesContainer.innerHTML = ''; // Clear existing properties
            if (filteredProperties.length === 0) {
                propertiesContainer.innerHTML = '<p class="text-center">No properties found matching your criteria.</p>';
            } else {
                filteredProperties.forEach(property => {
                    propertiesContainer.appendChild(createPropertyCard(property));
                });
            }
        }

        function applyFilters() {
            const location = document.getElementById('location').value.toLowerCase();
            const type = document.getElementById('property-type').value.toLowerCase();
            const minPrice = parseInt(document.getElementById('min-price').value);
            const maxPrice = parseInt(document.getElementById('max-price').value);
            const beds = parseInt(document.getElementById('beds').value);
            const baths = parseInt(document.getElementById('baths').value);

            let filtered = propertiesData.filter(property => {
                const matchesLocation = location === '' || property.location.toLowerCase().includes(location);
                const matchesType = type === '' || property.type === type;
                const matchesPrice = property.price >= minPrice && property.price <= maxPrice;
                const matchesBeds = property.beds >= beds;
                const matchesBaths = property.baths >= baths;
                return matchesLocation && matchesType && matchesPrice && matchesBeds && matchesBaths;
            });
            renderProperties(filtered);
        }

        if (propertiesContainer && propertyFiltersForm) {
            // Initial render or render based on URL search params
            const urlParams = new URLSearchParams(window.location.search);
            const searchTerm = urlParams.get('search');
            if (searchTerm) {
                document.getElementById('location').value = searchTerm;
            }
            applyFilters(); // Apply initial filters (from URL or defaults)

            propertyFiltersForm.addEventListener('submit', (e) => {
                e.preventDefault();
                applyFilters();
            });

            const clearFiltersButton = document.querySelector('.clear-filters-button');
            if (clearFiltersButton) {
                clearFiltersButton.addEventListener('click', () => {
                    propertyFiltersForm.reset();
                    document.getElementById('min-price').value = 0; // Ensure reset sets to default numbers
                    document.getElementById('max-price').value = 5000000;
                    document.getElementById('beds').value = 1;
                    document.getElementById('baths').value = 1;
                    applyFilters();
                });
            }
        }
    }

    // --- Property Detail Page Logic ---
    if (document.querySelector('.property-detail-page')) {
        const urlParams = new URLSearchParams(window.location.search);
        const propertyId = parseInt(urlParams.get('id'));
        const property = propertiesData.find(p => p.id === propertyId);

        if (property) {
            document.title = `${property.title} | Dream Dwellings`;
            document.getElementById('property-title').textContent = property.title;
            document.getElementById('property-location').textContent = property.location;
            document.getElementById('property-price').textContent = formatPrice(property.price);
            document.getElementById('property-beds').textContent = property.beds;
            document.getElementById('property-baths').textContent = property.baths;
            document.getElementById('property-sqft').textContent = property.sqft;
            document.getElementById('property-garage').textContent = property.garage;
            document.getElementById('property-description').textContent = property.description;

            // Amenities
            const amenitiesList = document.querySelector('.amenities-list');
            if (amenitiesList) {
                amenitiesList.innerHTML = property.amenities.map(amenity => `
                    <li><i class="fas ${getAmenityIcon(amenity)}"></i> ${amenity}</li>
                `).join('');
            }

            // Image Gallery
            const mainImage = document.getElementById('main-property-image');
            const thumbnailGallery = document.getElementById('thumbnail-gallery');

            if (mainImage && thumbnailGallery) {
                mainImage.src = property.images[0];
                thumbnailGallery.innerHTML = ''; // Clear default thumbnails

                property.images.forEach((imgSrc, index) => {
                    const img = document.createElement('img');
                    img.src = imgSrc;
                    img.alt = `Property Thumbnail ${index + 1}`;
                    if (index === 0) img.classList.add('active');
                    img.addEventListener('click', () => {
                        mainImage.src = imgSrc;
                        // Remove active from all, add to clicked
                        document.querySelectorAll('.thumbnail-images img').forEach(thumb => thumb.classList.remove('active'));
                        img.classList.add('active');
                    });
                    thumbnailGallery.appendChild(img);
                });
            }

            // Booking Modal Logic
            const bookingModal = document.getElementById('booking-modal');
            const bookTourButton = document.getElementById('book-tour-button');
            const closeButton = document.querySelector('.modal .close-button');
            const bookingForm = document.getElementById('booking-form');

            if (bookingModal && bookTourButton && closeButton && bookingForm) {
                bookTourButton.addEventListener('click', () => {
                    bookingModal.classList.add('show');
                });

                closeButton.addEventListener('click', () => {
                    bookingModal.classList.remove('show');
                });

                window.addEventListener('click', (event) => {
                    if (event.target == bookingModal) {
                        bookingModal.classList.remove('show');
                    }
                });

                bookingForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    // In a real application, you would send this data to a server
                    alert('Tour booked successfully! We will contact you shortly.');
                    bookingModal.classList.remove('show');
                    bookingForm.reset();
                });
            }

        } else {
            // Property not found, redirect or show error
            document.querySelector('main').innerHTML = '<section class="container text-center"><h2>Property Not Found</h2><p>The property you are looking for does not exist.</p><a href="properties.html" class="btn btn-primary">Back to Properties</a></section>';
        }
    }

    function getAmenityIcon(amenity) {
        switch (amenity) {
            case 'Private Pool': return 'fa-swimming-pool';
            case 'Air Conditioning': return 'fa-fan';
            case 'Modern Kitchen': return 'fa-utensils';
            case 'High-Speed Internet': return 'fa-wifi';
            case 'Parking Space': return 'fa-parking';
            case 'Security System': return 'fa-camera';
            case 'Balcony/Patio': return 'fa-sun';
            case 'Gym Access': return 'fa-dumbbell';
            case 'Rooftop Terrace': return 'fa-cloud-sun';
            case 'Concierge Service': return 'fa-bell-concierge';
            case 'Central Heating': return 'fa-thermometer-half';
            case 'Dishwasher': return 'fa-sink';
            case 'Pets Allowed': return 'fa-paw';
            case 'Large Backyard': return 'fa-tree';
            case 'Hardwood Floors': return 'fa-brush';
            case 'Fireplace': return 'fa-fire';
            case 'Washer/Dryer Hookups': return 'fa-washing-machine';
            case 'Pet-Friendly': return 'fa-dog';
            case 'Close to Parks': return 'fa-leaf';
            case 'City Views': return 'fa-building';
            case 'Balcony': return 'fa-wind';
            case 'Fitness Center': return 'fa-heartbeat';
            case '24/7 Security': return 'fa-shield-alt';
            case 'Stainless Steel Appliances': return 'fa-blender';
            case 'Community Pool': return 'fa-pool-8-ball';
            case 'Wood-Burning Fireplace': return 'fa-fireplace';
            case 'Mountain Views': return 'fa-mountain';
            case 'Hiking Trails Nearby': return 'fa-person-hiking';
            case 'Private Deck': return 'fa-deck-crew';
            case 'Garden Space': return 'fa-seedling';
            default: return 'fa-check';
        }
    }

    // --- Contact Page Logic ---
    if (document.querySelector('.contact-page')) {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you shortly.');
                contactForm.reset();
            });
        }
    }
});