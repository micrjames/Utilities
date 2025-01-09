export class Utilities {
   public dot = new class {
	  constructor(public superThis: Utilities) {}

	  public operator(a: number[], b: number[]): number {
		 if(a.length !== b.length)
			throw new Error("Vectors are unequal length");
		 return a.map((_, i) => a[i] * b[i]).reduce((sum, curr) => sum + curr);
	  }
   }(this);
   public iterate = new class {
	  constructor(public superThis: Utilities) {}

	  public iterate<T>(collection: T[], cb: (val: T, index: number) => void) {
		 for(let idx = 0; idx < collection.length; idx++) {
			cb(collection[idx], idx);
		 }
	  }
   }(this);
   public utils = new class {
	  constructor(public superThis: Utilities) {}

	  public countOccurrences(arr: number[]): {} { 
		 return arr.reduce((acc, val) => {
			acc[val] = (acc[val] || 0) + 1;
			return acc;
		 }, {});
	  }

   }(this);
}
