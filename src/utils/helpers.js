export function filter(products, category, inStock = false) {
  if (category !== "" && inStock) {
    //there is a selection for category and inStock filter is on
    return products.filter((p) => p.category === category && p.inStock);
  }
  if (category !== "") {
    return products.filter((p) => p.category === category);
  }

  if (inStock) {
    //same as inStock === true
    return products.filter((p) => p.inStock);
  }
  return products;
}

export function sort(products, option) {
  switch (option) {
    case "1": {
      return products.sort(function (a, b) {
        return a.name.localeCompare(b.name); //will return and change order it's comparing
      });
    }
    case "2": {
      return products.sort((a, b) => a.price - b.price); //compare
    }
    default: {
      return products;
    }
  }
}
