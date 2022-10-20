let { assert } = require("chai");
let { bookSelection } = require("./solution");

describe(" testing func isGenreSuitable", () => {
    it("should return correctly message for suitable", () => {
        assert.equal(bookSelection.isGenreSuitable("Thriller", 13), `Those books are suitable`);
        assert.equal(bookSelection.isGenreSuitable("Horror", 13), `Those books are suitable`);
    });
    it("should return correctly message for unsuitable by age param", () => {
        assert.equal(bookSelection.isGenreSuitable("Thriller", 12),
            `Books with Thriller genre are not suitable for kids at 12 age`);
        assert.equal(bookSelection.isGenreSuitable("Horror", 12),
            `Books with Horror genre are not suitable for kids at 12 age`);
        assert.equal(bookSelection.isGenreSuitable("Thriller", 10),
            `Books with Thriller genre are not suitable for kids at 10 age`);
        assert.equal(bookSelection.isGenreSuitable("Horror", 10),
            `Books with Horror genre are not suitable for kids at 10 age`);
    });
});
describe("testing func isItAffordable", () => {
    it("first param should be number type", () => {
        assert.throw(() => {
            bookSelection.isItAffordable("nope", 3), new Error("Invalid input");
        });
    });
    it("second param should be number type", () => {
        assert.throw(() => {
            bookSelection.isItAffordable(3, {}), new Error("Invalid input");
        });
    });
    it("both param should be number type", () => {
        assert.throw(() => {
            bookSelection.isItAffordable([], {}), new Error("Invalid input");
        });
    });
    it("should return not enough money if price is higher than budget", () => {
        assert.equal(bookSelection.isItAffordable(3, 2), "You don't have enough money");
        assert.equal(bookSelection.isItAffordable(3, 2), "You don't have enough money");
    });
    it("should return correct string if budget is enough to pay price", () => {
        assert.equal(bookSelection.isItAffordable(3, 3), "Book bought. You have 0$ left");
        assert.equal(bookSelection.isItAffordable(3, 5), "Book bought. You have 2$ left");
        assert.equal(bookSelection.isItAffordable(3.5, 5), "Book bought. You have 1.5$ left");
    })
});
describe("testing func suitableTitles", () => {
    it("first param must be an array type", () => {
        assert.throw(() => {
            bookSelection.suitableTitles("books", "wantedGenre"), new Error("Invalid input")
        });
        assert.throw(() => {
            bookSelection.suitableTitles(1, "wantedGenre"), new Error("Invalid input")
        });
        assert.throw(() => {
            bookSelection.suitableTitles({}, "wantedGenre"), new Error("Invalid input")
        });
    });
    it("second param must be string type", () => {
        assert.throw(() => {
            bookSelection.suitableTitles([], []), new Error("Invalid input")
        });
         assert.throw(() => {
            bookSelection.suitableTitles([], 1), new Error("Invalid input")
        });
        assert.throw(() => {
            bookSelection.suitableTitles([], {}), new Error("Invalid input")
        });
    });
    it("both params must be correct type", () => {
        assert.throw(() => {
            bookSelection.suitableTitles({}, []), new Error("Invalid input")
        });
        assert.throw(() => {
            bookSelection.suitableTitles("{}", []), new Error("Invalid input")
        });
    });
    it("should return correctly array of obj filtered by genre prop", () => {
        bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" },
        { title: "Darkness", genre: "Horror" },
        { title: "IT", genre: "Horror" }], 'Horror'), ["Darkness", "IT"]
    });
    it("should return correctly array of obj filtered by genre prop", () => {
        bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" },
        { title: "Darkness", genre: "Horror" }], 'Horror'), ["Darkness"]
    });
    it("should return correctly array of obj filtered by genre prop", () => {
        bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Horror" },
        { title: "Darkness", genre: "Horror" }], 'Horror'), ["The Da Vinci Code","Darkness"]
    });
    it("should return empty array of obj filtered by genre prop", () => {
        bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" },
        { title: "Darkness", genre: "Horror" }], 'NoSuchGenre'), []
    });
    
})