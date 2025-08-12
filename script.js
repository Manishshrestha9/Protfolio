// Simple print functionality
document.addEventListener('keydown', function(e) {
    if (e.key === 'p' && e.ctrlKey) {
      e.preventDefault();
      window.print();
    }
  });
  