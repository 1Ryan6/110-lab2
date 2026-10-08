export let snack_names: string[] = ['Goldfish', 'Nacho Fries', 'Chips', "Gummy Bears"]

export function print_list(l: string[]): void {
  for (const i of l) {
    console.log(i);
  }
}

print_list(snack_names);