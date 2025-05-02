document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Initialize theme
  let currentTheme = localStorage.getItem('theme');
  if (!currentTheme) {
    currentTheme = prefersDark.matches ? 'dark' : 'light';
  }
  document.body.setAttribute('data-theme', currentTheme);
  
  // Toggle theme
  themeToggle.addEventListener('click', () => {
    const newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Dispatch event for analytics (optional)
    document.dispatchEvent(new CustomEvent('themeChanged', { detail: newTheme }));
  });
  
  // Watch for system theme changes
  prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      document.body.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });
});
