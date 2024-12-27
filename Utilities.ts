export class Utilities {
   public dot = new class {
	  constructor(public superThis: Utilities) {}

	  public operator(a: number[], b: number[]): number {
		 return a.map((_, i) => a[i] * b[i]).reduce((sum, curr) => sum + curr);
	  }
   }(this);
}
