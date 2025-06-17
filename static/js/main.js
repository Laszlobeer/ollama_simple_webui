// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    // Load models
    fetch('/api/models')
        .then(response => response.json())
        .then(models => populateModels(models));

    // Theme switching
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Chat functionality
    document.getElementById('sendBtn').addEventListener('click', sendMessage);
    
    // System prompt handling
    document.getElementById('savePrompt').addEventListener('click', savePrompt);
    
    // History management
    document.getElementById('clearHistory').addEventListener('click', clearHistory);
    
    // Regeneration
    document.getElementById('regenerateBtn').addEventListener('click', regenerateResponse);
});

// Populate model selector
function populateModels(models) {
    const selector = document.getElementById('modelSelector');
    models.forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        selector.appendChild(option);
    });
}

// Theme switching
function toggleTheme() {
    const themes = ['dark', 'light', 'retro'];
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = themes[(themes.indexOf(current) + 1) % themes.length];
    
    document.documentElement.setAttribute('data-theme', next);
    document.cookie = `theme=${next}; path=/; max-age=31536000`;
}

// Regenerate last response
function regenerateResponse() {
    // Logic to remove last response and resend
}

// File handling (static/js/fileProcessor.js)
async function processFile(file) {
    // PDF, DOCX, TXT processing logic
    // Extract text content for AI comprehension
}