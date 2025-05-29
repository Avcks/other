code an total stock manager for offline store 
  and an dasebord page in which it show total stock in godown and totalstock in mainstore and give two negavation button 
    one to nevagate in a page of an total stock manager for main store and
        in mainstore page it should be as stock manager
    another to nevagate in a page of an total stock manager for godown
        in godown page it should show the stock after the takeing out products from godown to main store

=========================================================================================================================================================================================================================

updated prompt by ai:-

"Develop a stock management application for an offline store with the following features:
----Dashboard: A main dashboard page displaying:
        Total stock quantity in the godown.
        Total stock quantity in the main store.
--------Two navigation buttons:
            "Main Store Stock Manager": Navigates to the main store stock management page.
            "Godown Stock Manager": Navigates to the godown stock management page.
----Main Store Stock Manager Page: A page dedicated to managing stock within the main store. This should include stock management functionalities.
----Godown Stock Manager Page: A page dedicated to managing stock within the godown. This page should reflect stock levels after products have been transferred from the godown to the main store."

=========================================================================================================================================================================================================================

Updated Prompt:-

"Develop a stock management application for an offline retail store with these features:
----Dashboard:-
        Display the total stock quantity in both the godown (warehouse) and the main store.
        Provide two navigation buttons:
            “Main Store Stock Manager” — takes users to the main store’s stock management page.
            “Godown Stock Manager” — takes users to the godown’s stock management page.
----Main Store Stock Manager:-
        Allow users to manage and update the inventory within the main store (including adding, removing, and editing stock).
----Godown Stock Manager:-
        Allow users to manage inventory in the godown.
        Ensure stock levels reflect real-time updates, especially when transferring items from the godown to the main store."

=========================================================================================================================================================================================================================

Enhanced Prompt:-

Project Overview

Develop a stock management web application for an offline retail store, using HTML, CSS, and JavaScript (vanilla, without frameworks unless otherwise specified). The application’s goal is to streamline inventory tracking and transfers between a main store and a separate godown (warehouse).


Features & Requirements

1. Dashboard

    Display total stock summary
    Show real-time aggregate quantities for both the godown and the main store.
    Navigation
    Two clear buttons:
        Main Store Stock Manager – navigates to main store inventory management.
        Godown Stock Manager – navigates to godown inventory management.


2. Main Store Stock Manager

    Inventory List
    Show a table/list of current items (with columns: Item Name, Quantity, Edit/Delete actions).
    Edit Stock
    Ability to add items, remove items, or edit quantities and details.
    Search/Filter
    Include a simple way to find items quickly (by item name or SKU).
    Transfer Stock
    Option to initiate transfer requests for items from the godown, specifying quantity.


3. Godown Stock Manager

    Inventory List
    Show a table/list of current godown items (with columns: Item Name, Quantity, Edit/Delete actions).
    Edit Stock
    Ability to add, remove, or edit stock.
    Transfer to Main Store
    Ability to transfer specified quantities to the main store. Ensure both location inventories are updated immediately and accurately.
    Transfer Confirmation
    Transfer actions should require confirmation (e.g. “Are you sure?” modal).


4. Data Management

    Persistent Local Storage (Browser Storage)
    All inventory changes and transfers should be saved in the browser’s local storage so that data is retained between sessions.
    Real-Time Update
    Stock levels in both locations must reflect changes and transfers instantly on all pages.


5. UI/UX

    Clean, Responsive Design
    Modern, intuitive interface that works on desktops, tablets, and smartphones.
    Basic Validation
    Prevent negative values, empty item names, or faulty transfers (no “overdraws”).
    Clear Notifications
    Use visual cues or pop-ups for actions like successful transfers, errors, or confirmations.
    Optional (for ‘excellent’ experience):
        A basic stock movement history/log (records each transfer or edit with timestamp and location).
        Support for item images (if you want item pictures, clarify).


6. Technical Notes

    Standalone app
    No backend; everything runs in-browser.
    No frameworks/libraries
    Unless you specify otherwise: use plain HTML, CSS, and JS.
    Semantic Code
    Structure the code cleanly for easy maintenance and future extension.
Optional Enhancements (If Required)

    User authentication (PIN or password for access).
    Export to CSV/Excel.
    Multi-user/multi-device support using local network sync (requires further clarification).
