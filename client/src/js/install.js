const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    event.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = event;
    // Update UI notify the user they can install the PWA
    butInstall.style.visibility = 'visible';

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Hide our user interface that shows our button
    butInstall.style.display = 'none';
    // Show the prompt
    const promptEvent = await deferredPrompt.prompt();
    // Log the result
    console.log(promptEvent);
    // Show the prompt to the user
    if (promptEvent.userChoice.outcome === 'accepted') {
        console.log('User accepted the prompt');
        } else {
            console.log('User dismissed the prompt');
            }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear the prompt when the user has added the PWA to the home screen
    deferredPrompt = null;
    // Show a notification that the PWA has been added to the home screen
    console.log('PWA has been added to home screen');
    
});
