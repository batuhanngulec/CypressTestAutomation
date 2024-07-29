/// <reference types="cypress" />

// Link: https://petstore.swagger.io/
// includes pet, store, user


describe('GET Request - All Available Pets', () => {
    // /pet/findByStatus
    // status are; available, pending, sold
    it('Should fetch all available pets', () => {
      cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=available')
        .then((response) => {
          expect(response.status).to.eq(200); // 200 responcse code
          expect(response.body).to.be.an('array');

          console.log('Available Pets:', response.body);
        });
    });
  });

  describe('POST Request - Add New Pet', () => {
    const newPet = {
        id: 0, 
        category: {
            id: 1, // Category ID
            name: "Dogs" // Category Name
        },
        name: "Buddy", // Pet'in adı
        photoUrls: ["https://example.com/photo.jpg"], // Img URL
        tags: [
            {
                id: 1, // Tag ID
                name: "Friendly" // Tag Name
            }
        ],
        status: "available" // Pet status: available, pending, sold
    };

    it.only('Should add a new pet', () => {
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            body: newPet,
            headers: {
                'Content-Type': 'application/json' // JSON format
            }
        })
        .then((response) => {
            // Check response code
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id'); // Check IF
            expect(response.body.name).to.eq(newPet.name); // Check Pet Name
            console.log('Add Pet Response:', response.body);
        });
    });
    
});