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
		 let result: number;
		 let dotOp0: number[];
		 let dotOp1: number[];
		 describe("Completed", () => {
			let dottedOps: number;
			beforeAll(() => {
			   dotOp0 = [1, 1];	
			   dotOp1 = [1, 0];	
			   result = dotOp.operator(dotOp0, dotOp1);
			   dottedOps = dotOp0[0] * dotOp1[0] + dotOp0[1] * dotOp1[1];
			});
			test("Should exist.", () => {
			   expect(dotOp).toBeDefined();
			});
			test("Should have a 'result'.", () => {
			   expect(result).toBeDefined();
			});
			test("Should have a result as a number.", () => {
			   expect(result).toStrictEqual(expect.any(Number));
			});
			test("Should perform the operation.", () => {
			   expect(result).toBe(dottedOps);
			});
		 });
		 describe("Throws an Error", () => {
			beforeAll(() => {
			   dotOp0 = [1, 1];	
			   dotOp1 = [0];	
			});
			test("Should throw an 'Vectors are unequal length' error.", () => {
			   expect(() => {
				  dotOp.operator(dotOp0, dotOp1);
			   }).toThrow("Vectors are unequal length");
			});
		 });
	  });
   });
});
