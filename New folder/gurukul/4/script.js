// Initialize data
let mainStore = JSON.parse(localStorage.getItem('mainStore')) || [];
let godown = JSON.parse(localStorage.getItem('godown')) || [];

// Update stock summary on dashboard
function updateStockSummary() {
    const mainStoreQuantity = mainStore.reduce((sum, item) => sum + item.quantity, 0);
    const mainStoreValue = mainStore.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    const godownQuantity = godown.reduce((sum, item) => sum + item.quantity, 0);
    const godownValue = godown.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    
    document.getElementById('main-store-quantity').innerText = mainStoreQuantity;
    document.getElementById('main-store-value').innerText = mainStoreValue.toFixed(2);
    document.getElementById('godown-quantity').innerText = godownQuantity;
    document.getElementById('godown-value').innerText = godownValue.toFixed(2);
}

// Add item to main store
function addItem() {
    const itemName = prompt("Enter item name:");
    const quantity = parseInt(prompt("Enter quantity:"));
    const price = parseFloat(prompt("Enter price per pic:"));
    
    if (itemName && quantity >= 0 && price >= 0) {
        mainStore.push({ name: itemName, quantity: quantity, price: price });
        localStorage.setItem('mainStore', JSON.stringify(mainStore));
        renderMainStore();
        updateStockSummary();
    }
}

// Render main store items
function renderMainStore() {
    const tbody = document.getElementById('main-store-body');
    tbody.innerHTML = '';
    mainStore.forEach((item, index) => {
        const row = `<tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <button onclick="editMainStoreItem(${index})">Edit</button>
                <button onclick="deleteMainStoreItem(${index})">Delete</button>
            </td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

// Edit item in main store
function editMainStoreItem(index) {
    const newName = prompt("Enter new item name:", mainStore[index].name);
    const newQuantity = parseInt(prompt("Enter new quantity:", mainStore[index].quantity));
    const newPrice = parseFloat(prompt("Enter new price per pic:", mainStore[index].price));
    
    if (newName && newQuantity >= 0 && newPrice >= 0) {
        mainStore[index] = { name: newName, quantity: newQuantity, price: newPrice };
        localStorage.setItem('mainStore', JSON.stringify(mainStore));
        renderMainStore();
        updateStockSummary();
    }
}

// Delete item from main store
function deleteMainStoreItem(index) {
    mainStore.splice(index, 1);
    localStorage.setItem('mainStore', JSON.stringify(mainStore));
    renderMainStore();
    updateStockSummary();
}

// Transfer to Godown
function transferToGodown() {
    const itemName = prompt("Enter item name to transfer:");
    const quantity = parseInt(prompt("Enter quantity to transfer:"));
    const item = mainStore.find(item => item.name === itemName);
    
    if (item && quantity > 0 && item.quantity >= quantity) {
        item.quantity -= quantity;
        const godownItem = godown.find(g => g.name === itemName);
        
        if (godownItem) {
            godownItem.quantity += quantity;
        } else {
            godown.push({ name: itemName, quantity: quantity, price: item.price });
        }
        
        localStorage.setItem('mainStore', JSON.stringify(mainStore));
        localStorage.setItem('godown', JSON.stringify(godown));
        renderMainStore();
        updateStockSummary();
    } else {
        alert("Transfer failed: Check item name or quantity.");
    }
}

// Filter items in main store
function filterItems() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const filteredItems = mainStore.filter(item => item.name.toLowerCase().includes(searchValue));
    const tbody = document.getElementById('main-store-body');
    tbody.innerHTML = '';
    filteredItems.forEach((item, index) => {
        const row = `<tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <button onclick="editMainStoreItem(${index})">Edit</button>
                <button onclick="deleteMainStoreItem(${index})">Delete</button>
            </td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

// Add item to godown
function addGodownItem() {
    const itemName = prompt("Enter item name:");
    const quantity = parseInt(prompt("Enter quantity:"));
    const price = parseFloat(prompt("Enter price per pic:"));
    
    if (itemName && quantity >= 0 && price >= 0) {
        godown.push({ name: itemName, quantity: quantity, price: price });
        localStorage.setItem('godown', JSON.stringify(godown));
        renderGodown();
        updateStockSummary();
    }
}

// Render godown items
function renderGodown() {
    const tbody = document.getElementById('godown-body');
    tbody.innerHTML = '';
    godown.forEach((item, index) => {
        const row = `<tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <button onclick="editGodownItem(${index})">Edit</button>
                <button onclick="deleteGodownItem(${index})">Delete</button>
            </td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

// Edit item in godown
function editGodownItem(index) {
    const newName = prompt("Enter new item name:", godown[index].name);
    const newQuantity = parseInt(prompt("Enter new quantity:", godown[index].quantity));
    const newPrice = parseFloat(prompt("Enter new price per pic:", godown[index].price));
    
    if (newName && newQuantity >= 0 && newPrice >= 0) {
        godown[index] = { name: newName, quantity: newQuantity, price: newPrice };
        localStorage.setItem('godown', JSON.stringify(godown));
        renderGodown();
        updateStockSummary();
    }
}

// Delete item from godown
function deleteGodownItem(index) {
    godown.splice(index, 1);
    localStorage.setItem('godown', JSON.stringify(godown));
    renderGodown();
    updateStockSummary();
}

// Transfer to Main Store
function transferToMainStore() {
    const itemName = prompt("Enter item name to transfer:");
    const quantity = parseInt(prompt("Enter quantity to transfer:"));
    const item = godown.find(item => item.name === itemName);
    
    if (item && quantity > 0 && item.quantity >= quantity) {
        item.quantity -= quantity;
        const mainStoreItem = mainStore.find(m => m.name === itemName);
        
        if (mainStoreItem) {
            mainStoreItem.quantity += quantity;
        } else {
            mainStore.push({ name: itemName, quantity: quantity, price: item.price });
        }
        
        localStorage.setItem('mainStore', JSON.stringify(mainStore));
        localStorage.setItem('godown', JSON.stringify(godown));
        renderGodown();
        updateStockSummary();
    } else {
        alert("Transfer failed: Check item name or quantity.");
    }
}

// Filter items in godown
function filterGodownItems() {
    const searchValue = document.getElementById('search-godown').value.toLowerCase();
    const filteredItems = godown.filter(item => item.name.toLowerCase().includes(searchValue));
    const tbody = document.getElementById('godown-body');
    tbody.innerHTML = '';
    filteredItems.forEach((item, index) => {
        const row = `<tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <button onclick="editGodownItem(${index})">Edit</button>
                <button onclick="deleteGodownItem(${index})">Delete</button>
            </td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

// Initial render
if (document.getElementById('main-store-body')) {
    renderMainStore();
}
if (document.getElementById('godown-body')) {
    renderGodown();
}
updateStockSummary();
