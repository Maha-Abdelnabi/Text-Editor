const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
//  Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = event;
    // Update UI notify the user they can install the PWA
   butInstall.classList.toggle("hidden", false);
});

//Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
     window.deferredPrompt;
     if (!promptEvent) {
       return;
     }
     promptEvent.prompt();
     window.deferredPrompt = null;
     butInstall.classList.toggle("hidden", true);
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear the prompt when the user has added the PWA to the home screen
    deferredPrompt = null;
    // Show a notification that the PWA has been added to the home screen
    console.log('PWA has been added to home screen');
    
});
