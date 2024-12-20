class Inventory {
    //: Pour ajouter un produit.
    addProduct() {
          const id = dataproduit.lenght + 1;
          const name = prompt("Entrez le nom du produit:");
          const description = prompt("Entrez la description du produit:");
          const quantity = Number(prompt("Entrez la quantité disponible:"));
          const price = Number(prompt("Entrez le prix du produit:"));


          const product = new Product(id, name, description, quantity, price);
          dataproduit.push(product);
          console.log("l'opération a été réussie!");

          fs.writeFileSync("data.json", JSON.stringify(dataproduit, null, 4))
    }
}