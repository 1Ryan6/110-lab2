export function print_fancy(arr: Array<string>): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(`\x1b[1m${arr[i]}\x1b[0m`); // Bold
        console.log(`\x1b[3m${arr[i]}\x1b[0m`); // Italic   
    }

}
