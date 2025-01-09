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
			let uniqNumbers: number[];
			let numsOccurences: countedOccurrences<number>;
			let countedOps: countedOccurrences<number>;
			beforeAll(() => {
			   numbers = [1, 2, 3, 2, 1, 3, -1, 0];
			   uniqNumbers = [...new Set(numbers)];
			   numsOccurences = countOccurrencesOp.countOccurrences(numbers);
			   countedOps = {
				  '0': 1,
				  '1': 2,
				  '2': 2,
				  '3': 2,	
				  '-1': 1
			   };
			});
			test("Should exist.", () => {
			   expect(countedOps).toBeDefined();
			});
			test("Should have a 'numsOccurences'.", () => {
			   expect(numsOccurences).toBeDefined();
			});
			test("Should have the result as a 'countedOccurrences'.", () => {
			   expect(numsOccurences).toEqual(
				   expect.objectContaining(
					  Object.fromEntries(uniqNumbers.map(num => [num, expect.any(Number)]))
				   )
			   );
			});
			test("Should perform the operation.", () => {
			   expect(numsOccurences).toEqual(countedOps);
			});
			test("Should have each key as the unique element of the 'numbers'.", () => {
			   const numsOccurencesKeys = Object.keys(numsOccurences);
			   const hasEachUniqueElement = numsOccurencesKeys.every(nums => uniqNumbers.includes(+nums));
			   expect(hasEachUniqueElement).toBeTruthy();
			});
			test("Should have the sum of the values of the result as the size of the 'numbers' array.", () => {
			   const numsOccurrencesValues = Object.values(numsOccurences);
			   const sumNumsOccurrencesValues = numsOccurrencesValues.reduce((sum, addend) => sum + addend);
			   const numbersSize = numbers.length;
			   expect(sumNumsOccurrencesValues).toBe(numbersSize);
			});
		 });
	  });
   });
});
