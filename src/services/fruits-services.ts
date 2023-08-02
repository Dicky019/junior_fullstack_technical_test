export function jawaban1(fruits: IFruit[]) {
  return removeDuplicateFruits(fruits, (fruit) => fruit.fruitName)
    .map((fruit) => fruit.fruitName)
    .join(", ");
}

function removeDuplicateFruits(
  fruits: IFruit[],
  key: (fruit: IFruit) => string
): IFruit[] {
  const uniqueFruits: { [name: string]: boolean } = {};
  const result: IFruit[] = [];

  for (const fruit of fruits) {
    const lowercaseName = key(fruit).toLowerCase();
    if (!uniqueFruits[lowercaseName]) {
      uniqueFruits[lowercaseName] = true;
      result.push(fruit);
    }
  }

  return result;
}

export function jawaban2(fruits: IFruit[]) {
  const groupedFruitsByType = groupFruitsByType(
    removeDuplicateFruits(fruits, (fruit) => fruit.fruitName)
  );
  const values = Object.values(groupedFruitsByType);
  const massingBuah = values
    .map((v, i) => {
      const buah = v
        .map((fruit) => `${fruit.fruitName}/${fruit.fruitType}`)
        .join(", ");
      const wadah = 1 + i;
      return `${wadah} ${buah}`;
    })
    .join(" || ");

  const keys = Object.keys(groupedFruitsByType);
  const jumlahWadah = keys.length;

  return {
    jumlahWadah,
    massingBuah,
  };
}

export function jawaban3(fruits: IFruit[]) {
  const groupedFruitsByType = groupFruitsByType(fruits);
  const totalStockByContainer: { [fruitType: string]: number } = {};
  for (const fruitType in groupedFruitsByType) {
    // eslint-disable-next-line no-prototype-builtins
    if (groupedFruitsByType.hasOwnProperty(fruitType)) {
      const totalStock = groupedFruitsByType[fruitType].reduce(
        (acc, fruit) => acc + fruit.stock,
        0
      );
      totalStockByContainer[fruitType] = totalStock;
    }
  }

  const importStok = totalStockByContainer["IMPORT"] satisfies number;
  const localStok = totalStockByContainer["LOCAL"] satisfies number;

  return `IMPORT ${importStok}, LOCAL : ${localStok}`;
}

function groupFruitsByType(arr: IFruit[]): { [fruitType: string]: IFruit[] } {
  const groupedFruits: { [fruitType: string]: IFruit[] } = {};

  for (const fruit of arr) {
    const { fruitType } = fruit;
    if (!groupedFruits[fruitType]) {
      groupedFruits[fruitType] = [];
    }
    groupedFruits[fruitType].push(fruit);
  }

  return groupedFruits;
}
