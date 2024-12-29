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
	  let iterOpArr: String[];
	  beforeAll(() => {
		 iterOp = utility.iterate;
		 sb = new StringBuilder();
		 iterOpArr = ["hello", "olleh"];	
	  });
	  describe("A Basic Operation", () => {
		 describe("Created", () => {
			test("Should exist.", () => {
			   expect(iterOp).toBeDefined();
			});
		 });
		 describe("Executed", () => {
			let mockCallback: jest.Mock<void, [String, number]>;
			let mockCallbackCalls: [String, number][];
			let whichCBArg: number;
			beforeAll(() => {
			   mockCallback = jest.fn((char, idx) => {
				  if(idx != 0) sb.appendSp();
				  sb.append(`${char}`);
				  if(idx != iterOpArr.length-1) sb.appendComma();
			   });
			   sb.append('[');
			   iterOp.iterate(iterOpArr, mockCallback);
			   sb.append(']');
			   mockCallbackCalls = mockCallback.mock.calls;
			});
			test("Should have executed 'two' calls.", () => {
			   const numCalls = mockCallbackCalls.length;
			   const iterOpArrSize = iterOpArr.length;
			   expect(numCalls).toBe(iterOpArrSize);
			});
			test("Should have as first argument: 'hello'.", () => {
			   whichCBArg = 0;
			   const iterOp1stArg = mockCallbackCalls[whichCBArg][0];
			   expect(iterOp1stArg).toBe(iterOpArr[whichCBArg]);
			});
			test("Should have as second argument: 'olleh'.", () => {
			   whichCBArg = 1;
			   const iterOp2ndArg = mockCallbackCalls[whichCBArg][0];
			   expect(iterOp2ndArg).toBe(iterOpArr[whichCBArg]);
			});
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
