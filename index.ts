const files = ["alice.txt", "bořek.txt"];

for (const file of files) {
	console.log("");
	console.log(file, "exists", await Bun.file(file).exists());
	console.log(file, "stat", (await Bun.file(file).stat())?.size);
}
