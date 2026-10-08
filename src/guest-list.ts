import { print_list } from "./snacks.ts";

let guest_names = ['Lebron James', 'Jeffrey', 'Alexander Hamilton']

export function print_guest_names(): void {
  console.log("\nGuests:")
  print_list(guest_names);
}
