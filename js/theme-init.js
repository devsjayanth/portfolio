// ==========================================
// THEME INITIALIZATION
// This runs before page load to prevent flash
// ==========================================

(function() {
    try {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
            document.documentElement.classList.add('light-mode');
        }
    } catch (e) { 
        console.log('Privacy Mode: LS access denied'); 
    }
})();