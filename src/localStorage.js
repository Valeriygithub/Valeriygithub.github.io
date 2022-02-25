class LocalStorageRepository {
	// добавление рецепта в локальное хранилище
	// receipt - обьект с данными о рецепте
	addRecept(recept) {

		// получение массива с рецептами
		let receipts = this.getAllReceipts();

		// добавление обьекта в массив
		receipts.push(recept);

		// обновление массива с рецептами в локальном хранилище
		this.saveToLocale("receipts", receipts);
	}

	// получение массива с рецептами
	getAllReceipts() {
		let array = this.getFromLocale("receipts");
		return array ? array : [];
	}

	// добавление в локально хранилище обьекта по определенному ключу и преобразование в JSON строку
	saveToLocale(key, json) {
		if (json) localStorage.setItem(key, JSON.stringify(json));
	}

	// получение из локального хранилища и преобразование в обьект
	getFromLocale(key) {
		let data = localStorage.getItem(key);

		if (data) return JSON.parse(data);

		return null;
	}

}

export default LocalStorageRepository;

//создание нового класса
  // let repo = new LocalStorageRepository();

  // // получение массива рецептов
  // let receipts = repo.getAllReceipts();

  // // добавление элемента в массив
  // repo.addRecept({title: "Title 1", customProp: "Prop"});
