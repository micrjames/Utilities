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
	  let iterOpArrSize: number;
	  let mockCallback: jest.Mock<void, [String, number]>;
	  let mockCallbackCalls: [String, number][];
	  beforeAll(() => {
		 iterOp = utility.iterate;
		 sb = new StringBuilder();
		 iterOpArr = ["hello", "olleh"];	
		 iterOpArrSize = iterOpArr.length;
	  });
	  describe("A Basic Operation", () => {
		 let whichCBArg: number;
		 describe("Created", () => {
			test("Should exist.", () => {
			   expect(iterOp).toBeDefined();
			});
		 });
		 describe("Executed", () => {
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
			   expect(mockCallbackCalls).toHaveLength(iterOpArrSize);
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
			let sbStrs: String[];
			beforeAll(() => {
			   sbStr = sb.build()
			   const sbStrSliced = sbStr.slice(1,sbStr.length-1)
			   const sbStrSlicedAndReplaced = sbStrSliced.replace(/ /, '');
			   sbStrs = sbStrSlicedAndReplaced.split(',');
			});
			test("Should have the same number of strings as the number of arguments.", () => {
			   expect(sbStrs).toHaveLength(iterOpArrSize);
			});
			test("Should have each string the same type as the type of each argument.", () => {
			   sbStrs.forEach((sbStr, whichCBArg) => {
				  const iterOpArg = mockCallbackCalls[whichCBArg][0];
				  const iterOpArgType = typeof iterOpArg;
				  const sbStrType = typeof sbStr;
				  expect(sbStrType).toEqual(iterOpArgType);
			   });
			});
			test("Should have each string the same as each argument.", () => {
			   sbStrs.forEach((sbStr, whichCBArg) => {
				  const iterOpArg = mockCallbackCalls[whichCBArg][0];
				  expect(sbStr).toEqual(iterOpArg);
			   });
			});
		 });
	  });
   });
});
