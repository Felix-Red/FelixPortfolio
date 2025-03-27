document.addEventListener('DOMContentLoaded', function() {
    // After loading animation completes (3 seconds total), show profile selector
    setTimeout(function() {
        document.querySelector('.loading-screen').style.display = 'none';
        document.querySelector('.profile-container').style.display = 'block';
    }, 3000);

    const profiles = document.querySelectorAll('.profile');
    
    profiles.forEach(profile => {
        profile.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url && url !== '#') {
                window.open(url, '_blank');
            } else {
                const profileName = this.getAttribute('data-name');
                alert(`${profileName} link is not configured yet`);
            }
        });
        
        // Keyboard accessibility
        profile.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const url = this.getAttribute('data-url');
                if (url && url !== '#') {
                    window.open(url, '_blank');
                }
            }
        });
    });
    
    // Manage profiles button (simple implementation)
    document.querySelector('.manage-profiles').addEventListener('click', function() {
        alert('Profile management would go here');
    });

    // Keyboard navigation between profiles
    document.addEventListener('keydown', function(e) {
        const currentActive = document.querySelector('.profile:focus');
        let nextActive;
        
        if (e.key === 'ArrowRight') {
            nextActive = currentActive ? currentActive.nextElementSibling : profiles[0];
        } else if (e.key === 'ArrowLeft') {
            nextActive = currentActive ? currentActive.previousElementSibling : profiles[profiles.length - 1];
        }
        
        if (nextActive) {
            nextActive.focus();
        }
    });
});