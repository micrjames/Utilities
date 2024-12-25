export class Utilities {
   public dot = new class {
	  constructor(public superThis: Utilities) {}

	  public operator(a: number[], b: number[]): number {
		 return -1;
	  }
   }(this);
}
