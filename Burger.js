function cookBurger(callback) {
  setTimeout(() => {
    console.log("🍔 Бургер готов");
    callback();
  }, 1000);
}

function fryFries(callback) {
  setTimeout(() => {
    console.log("🍟 Картошка готова");
    callback();
  }, 1000);
}

function pourDrink(callback) {
  setTimeout(() => {
    console.log("🥤 Напиток налит");
    callback();
  }, 1000);
}

function addDessert(callback) {
  setTimeout(() => {
    console.log("🍰 Десерт добавлен");
    callback();
  }, 1000);
}

let kitchenIsCompleat = false;
let barIsCompleat = false;

const kitchen = (callback) => {
  cookBurger(() => {
    fryFries(() => {
      kitchenIsCompleat = true;
      console.log("👨‍🍳 Кухня завершила заказ", kitchenIsCompleat);
      callback();
    });
  });
};

const Bar = (callback) => {
  pourDrink(() => {
    addDessert(() => {
      barIsCompleat = true;
      console.log("🍹 Бар завершил заказ", barIsCompleat);
      callback();
    });
  });
};

kitchen(() => {
  Bar(() => {
    if (kitchenIsCompleat & barIsCompleat) {
      console.log("🎉 Заказ подан!");
    }
  });
});
