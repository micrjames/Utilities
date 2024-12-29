import { Utilities } from "../Utilities";
import { StringBuilder } from "../StringBuilder/StringBuilder";

describe("A Utility Class", () => {
   let utility: Utilities;
   beforeAll(() => {
	  utility = new Utilities();
   });
   describe("With an Iterate Class", () => {
	  let iterOp: typeof utility.iterate;
	  let sb: StringBuilder;
	  beforeAll(() => {
		 iterOp = utility.iterate;
		 sb = new StringBuilder();
	  });
	  describe("A Basic Operation", () => {
		 describe("Created", () => {
			test("Should exist.", () => {
			   expect(iterOp).toBeDefined();
			});
		 });
		 describe("Executed", () => {
			let iterOpArr: String[];
			let mockCallback: (val: String, index: number) => void;
			beforeAll(() => {
			   iterOpArr = ["hello", "olleh"];	
			   sb.append('[');
			   iterOp.iterate(iterOpArr, jest.fn((char, idx) => {
				  if(idx != 0) sb.appendSp();
				  sb.append(`${char}`);
				  if(idx != iterOpArr.length-1) sb.appendComma();
			   }));
			   sb.append(']');
			});
			test.todo("Should have executed 'two' calls.");
			test.todo("Should have as first argument: 'hello'.");
			test.todo("Should have as first argument: 'olleh'.");
		 });
		 describe("After Execution.", () => {
			let sbStr: String;
			beforeAll(() => {
			   sbStr = sb.build();
			});
			test.todo("Should have the same number of strings as the number of arguments.");
			test.todo("Should have each string the same type as the type of each argument.");
			test.todo("Should have each string the same as each argument.");
		 });
	  });
   });
});
