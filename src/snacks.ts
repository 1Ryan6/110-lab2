let snack_names: string[] = ['Goldfish', 'Nacho Fries', 'Chips']

export function print_list(l: string[]): void {
  for (const i of l) {
    console.log(i);
  }
}

print_list(snack_names);

const snacks: Array<string> = ["Doritos", "Gummy Bears"];

function print(arr: Array<string>): void {
    console.log(arr);
}

print(snacks);