import { Utilities } from "../Utilities";
import { countedOccurrences } from "../types";

describe("A Utility Class", () => {
   let utility: Utilities;
   beforeAll(() => {
	  utility = new Utilities();
   });
   describe("With a Utils Inner Class", () => {
	  describe("countOccurrences", () => {
		 let countOccurrencesOp: typeof utility.utils;
		 beforeAll(() => {
			countOccurrencesOp = utility.utils;
		 });
		 describe("Of Numbers", () => {
			let numbers: number[];
			let numsOccurences: countedOccurrences<number>;
			let countedOps: countedOccurrences<number>;
			beforeAll(() => {
			   numbers = [1, 2, 3, 2, 1, 3, -1, 0];
			   numsOccurences = countOccurrencesOp.countOccurrences(numbers);
			   console.log(numsOccurences);
			   countedOps = {
				  '0': 1,
				  '1': 2,
				  '2': 2,
				  '3': 2,	
				  '-1': 1
			   };
			});
			test.todo("Should exist.");
			test.todo("Should have a 'numsOccurences'.");
			test.todo("Should have the result as a 'countOccurrences'.");
			test.todo("Should perform the operation.");
			test.todo("Should have each key as the unique element of the 'numbers'.");
			test.todo("Should have the sum of the values of the result as the size of the 'numbers' array.");
		 });
	  });
   });
});
