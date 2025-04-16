function orderBurger(callback) {
  setTimeout(() => {
    console.log("🍔 Бургер готов");
    callback();
  }, 1000);
}

function addFries(callback, errorCallback) {
  setTimeout(() => {
    const friesInStock = Math.random() > 0.5;

    if (friesInStock) {
      console.log("🍟 Картошка добавлена");
      callback();
    } else {
      errorCallback("❌ Картошка закончилась");
    }
  }, 1000);
}

function takeDrink(callback) {
  setTimeout(() => {
    console.log("🥤 Напиток взят");
    callback();
  }, 1000);
}

function pending(num, callback) {
  setTimeout(() => {
    console.log(`Заказ №${num}`);
    callback();
  }, 1000);
}

function order(num, callback) {
  pending(num, () => {
    orderBurger(() => {
      addFries(
        () => {
          takeDrink(() => {
            console.log("ЗАКАЗ ВЫПОЛНЕН!!!!");
            callback();
          });
        },
        (text) => {
          console.log(`${text}, упс..`);
          console.log("ЗАКАЗ ОТМЕНЕН");
          callback();
        }
      );
    });
  });
}

order(1, () => {
  order(2, () => {
    order(3, () => {
      console.log("все 3 заказа были обработаны!");
    });
  });
});
