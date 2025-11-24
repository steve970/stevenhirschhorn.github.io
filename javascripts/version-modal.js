// Version Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
  const rewindButton = document.getElementById('rewindButton');
  const modal = document.getElementById('versionModal');
  const closeButton = document.getElementById('closeModal');
  
  // Exit early if modal elements don't exist on this page
  if (!rewindButton || !modal || !closeButton) {
    return;
  }
  
  // Open modal
  rewindButton.addEventListener('click', function() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  });
  
  // Close modal
  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});