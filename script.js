document.addEventListener('DOMContentLoaded', function() {
    const profiles = document.querySelectorAll('.profile');
    
    profiles.forEach(profile => {
        profile.addEventListener('click', function() {
            const profileName = this.getAttribute('data-name');
            alert(`Welcome, ${profileName}!`);
            // In a real app, you would redirect to the dashboard or set the profile
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        const currentActive = document.querySelector('.profile:focus');
        let nextActive;
        
        if (e.key === 'ArrowRight') {
            nextActive = currentActive ? currentActive.nextElementSibling : profiles[0];
        } else if (e.key === 'ArrowLeft') {
            nextActive = currentActive ? currentActive.previousElementSibling : profiles[profiles.length - 1];
        } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            // Implement vertical navigation if needed
            return;
        }
        
        if (nextActive) {
            nextActive.focus();
        }
    });
});

// The JavaScript remains exactly the same as in the previous implementation
document.addEventListener('DOMContentLoaded', function() {
    // After loading animation completes (3 seconds total), show profile selector
    setTimeout(function() {
        document.querySelector('.loading-screen').style.display = 'none';
        document.querySelector('.profile-container').style.display = 'block';
        
        // Set focus to first profile for keyboard navigation
        document.querySelector('.profile').focus();
    }, 3000);

    const profiles = document.querySelectorAll('.profile');
    
    profiles.forEach(profile => {
        profile.addEventListener('click', function() {
            selectProfile(this);
        });
        
        profile.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectProfile(this);
            }
        });
    });
    
    function selectProfile(profileElement) {
        const profileName = profileElement.getAttribute('data-name');
        
        // Add visual feedback
        profileElement.classList.add('selected');
        
        // In a real app, you would redirect to the dashboard or set the profile
        // For now we'll just show an alert after a short delay
        setTimeout(() => {
            alert(`Welcome, ${profileName}!`);
            profileElement.classList.remove('selected');
        }, 300);
    }
    
    // Keyboard navigation between profiles
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || 
            e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            
            const currentActive = document.activeElement;
            if (!currentActive.classList.contains('profile')) return;
            
            e.preventDefault();
            let nextActive;
            const profilesArray = Array.from(profiles);
            const currentIndex = profilesArray.indexOf(currentActive);
            
            if (e.key === 'ArrowRight') {
                nextActive = profilesArray[(currentIndex + 1) % profilesArray.length];
            } else if (e.key === 'ArrowLeft') {
                nextActive = profilesArray[(currentIndex - 1 + profilesArray.length) % profilesArray.length];
            } else if (e.key === 'ArrowDown') {
                // For a grid layout, you would calculate position
                nextActive = profilesArray[(currentIndex + 1) % profilesArray.length];
            } else if (e.key === 'ArrowUp') {
                nextActive = profilesArray[(currentIndex - 1 + profilesArray.length) % profilesArray.length];
            }
            
            if (nextActive) {
                nextActive.focus();
            }
        }
    });
});