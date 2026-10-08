import { print_fancy } from "./animation.ts";
import { print_list } from "./snacks.ts";

let guest_names = ['Lebron James', 'Jeffrey', 'Alexander Hamilton']

export function print_guest_names(): void {
  console.log("\nGuests:");
  print_fancy(guest_names);
}
