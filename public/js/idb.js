let db;

const request = indexedDB.open('budget_tracker',1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore('new_budget_entry', {autoIncrement: true});
};

request.onsuccess = function(event) {
    db = event.target.result;

    if(navigator.onLine) {
        uploadEntries();
    }
};

request.onerror = function(event) {
    console.log(event.target.errorCode);
};

function saveRecord(record) {
    const transaction = db.transaction(['new_budget_entry'], 'readwrite');
    const entryObjectStore = transaction.objectStore('new_budget_entry');
    entryObjectStore.add(record);
    alert('Your entry has been saved offline and will upload once you have an internet connection.')
};

function uploadEntries() {
    const transaction = db.transaction(['new_budget_entry'], 'readwrite');
    const entryObjectStore = transaction.objectStore('new_budget_entry');
    const getAll = entryObjectStore.getAll();

    getAll.onsuccess = function() {
        if (getAll.result.length > 0) {
            fetch('/api/transaction', {
                method: 'POST',
                body: JSON.stringify(getAll.result),
                headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(serverResponse => {
            if (serverResponse.message) {
                throw new Error(serverResponse);
            }
            const transaction = db.transaction(['new_budget_entry'], 'readwrite');
            const entryObjectStore = transaction.objectStore('new_budget_entry');
            alert('All entries have been uploaded');

            entryObjectStore.clear();
            })
            .catch(err => {
                console.log(err);
            });
    }
};
}

window.addEventListener('online', uploadEntries);