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

    //:Pour afficher tous les produits.
    listProducts() {
        if (dataproduit.length === 0) {
              console.log("Aucun produit disponible.");
        } else {
              console.log(dataproduit);
        }
  }

  // : Pour mettre à jour un produit existant.
  updateProduct() {
    const id = Number(prompt("Entrez l'id du produit à mettre à jour: "));

    if (id <=0 || id > dataproduit.length) {
          console.log("Produit introuvable.");
          return;
    }

    const newname = prompt("Entrez le nouveau nom : ");
    const newdescription = prompt("Entrez la nouvelle description : ");
    const newquantity = Number(prompt("Entrez la nouvelle quantité : "));
    const newprice = Number(prompt("Entrez le nouveau prix : "));

    dataproduit[id - 1].name = newname;
    dataproduit[id - 1].description = newdescription;
    dataproduit[id - 1].quantity = newquantity;
    dataproduit[id - 1].price = newprice;

    fs.writeFileSync("data.json", JSON.stringify(dataproduit, null, 4))

    console.log("Produit mis à jour avec succès !");
}

 //: Pour supprimer un produit.
 deleteProduct() {
    const id = Number(prompt("Entrez l'id du produit à suprimer: "));

    if (id <=0 || id > dataproduit.length) {
          console.log("Produit introuvable.");
          return;
    }
    dataproduit.splice(id ,1);

    fs.writeFileSync("data.json", JSON.stringify(dataproduit, null, 4));

    console.log("Produit supprimé avec succès !");
}

}

const inven = new Inventory();
let choix;
do {
      inven.menu();
      choix = Number(prompt("entrz votre choix."));

      switch (choix) {
            case 1:
                  inven.addProduct();
                  break;
            case 2:
                  inven.listProducts();
                  break;
            case 3:
                  inven.updateProduct();
                  break;
            case 4:
                  inven.deleteProduct();
                  break;
            case 5:
                  console.log("Au revoir!");
                  break;
            default:
                  console.log("Choix invalide. Veuillez réessayer.");
      }


} while (choix != 5);
