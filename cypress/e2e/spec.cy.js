describe('3tTest', () => {
  beforeEach(() => {
    cy.visit('https://amazon.co.uk'); // Directs to amazon.co.uk
    cy.get('[data-cel-widget="sp-cc-accept"]').click(); // Accept cookies
  });

it('Adds socks to the cart and verifies the cart is not empty', () => {
    cy.get('[name="field-keywords"]').type('Socks{enter}'); // Search for 'Socks'

    cy.get('[data-image-index="1"]').first().click(); // Select the first item in the list

    cy.get('#add-to-cart-button').click(); // Add the item to the cart

    cy.get('[data-csa-c-slot-id="sw-gtc"]').click(); // View the basket

    cy.get('.a-row.sc-your-amazon-cart-is-empty').should('not.exist'); // Verify the cart is not empty

    cy.contains('Subtotal (1 item)').should('exist'); // Check that one item is in the cart
  });

it('Deletes an item from the cart using the delete button and verifies it is empty', () => {
  cy.get('[name="field-keywords"]').type('Socks{enter}'); // Search for 'Socks'

  cy.get('[data-image-index="1"]').first().click(); // Select the first item in the list

  cy.get('#add-to-cart-button').click(); // Add the item to the cart

  cy.get('[data-csa-c-slot-id="sw-gtc"]').click(); // View the basket

  cy.get('input[value="Delete"]').click() // Deletes the item

  cy.contains('Subtotal (0 items)').should('exist'); // Check that no items are in the cart

  cy.contains('Your Amazon Cart is empty.').should('exist'); // Check that the 'Your Amazon Cart is empty' heading has appeared
  
  cy.get('span[id="nav-cart-count"]').click(); // Clicks the basket icon to refresh the cart screen

  cy.get('.a-row.sc-your-amazon-cart-is-empty').should('exist'); // Verify the cart is empty on re-viewing the basket - checks for deletion error - client / server
  });

it('Deletes an item from the cart using the quantity button and verifies it is empty', () => {
    cy.get('[name="field-keywords"]').type('Socks{enter}'); // Search for 'Socks'
  
    cy.get('[data-image-index="1"]').first().click(); // Select the first item in the list
  
    cy.get('#add-to-cart-button').click(); // Add the item to the cart
  
    cy.get('[data-csa-c-slot-id="sw-gtc"]').click(); // View the basket

    cy.get('span[class="a-dropdown-label"').click(); // Clicks quantity button to reveal dropdown list

    cy.get('ul[class="a-nostyle a-list-link"').find('li[class="a-dropdown-item quantity-option"]').find('a[id="quantity_0"]').click() // Clicks 0 from dropdown list

    cy.contains('Your Amazon Cart is empty.').should('exist'); // Check that the 'Your Amazon Cart is empty' heading has appeared

    cy.get('span[id="nav-cart-count"]').click(); // Clicks the basket icon to refresh the cart screen

    cy.get('.a-row.sc-your-amazon-cart-is-empty').should('exist'); // Verify the cart is empty on re-viewing the basket - checks for deletion error - client / server


  });
  
it('Increases the quanity of an item in the basket from 1 to 2', () => {
  cy.get('[name="field-keywords"]').type('Socks{enter}'); // Search for 'Socks'

  cy.get('[data-image-index="1"]').first().click(); // Select the first item in the list

  cy.get('#add-to-cart-button').click(); // Add the item to the cart

  cy.get('[data-csa-c-slot-id="sw-gtc"]').click(); // View the basket

  cy.get('span[class="a-dropdown-label"').click(); // Clicks quantity button to reveal dropdown list

  cy.get('ul[class="a-nostyle a-list-link"').find('li[class="a-dropdown-item quantity-option"]').find('a[id="quantity_2"]').click() // Clicks 2 from dropdown list

  cy.contains('Subtotal (2 items)').should('exist'); // Check that two items are in the cart
  });
});
