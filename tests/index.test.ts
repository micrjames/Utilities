import { Utilities } from "../Utilities";

describe("A Utility Class", () => {
   let utility: Utilities;
   beforeAll(() => {
	  utility = new Utilities();
   });
   describe("With a Dot Product Inner Class", () => {
	  let dotOp: typeof utility.dot;
	  beforeAll(() => {
		 dotOp = utility.dot;
	  });
	  describe("A Basic Operation", () => {
		 let result:number;
		 beforeAll(() => {
			result = dotOp.operator([0, 0], [0, 0]);
		 });
		 describe("Completed", () => {
			test.todo("Should exist.");
			test.todo("Should return a number.");
			test.todo("Should perform the operation.");
		 });
		 describe("Throws an Error", () => {
			test.todo("Should throw an 'Vectors are unequal length' error.");
			test.todo("Should throw an 'Vectors are not numbers' error.");
		 });
	  });
   });
});
