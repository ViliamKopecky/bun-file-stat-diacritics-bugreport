# Bugreport for `Bun.file().stat()` with diacritics

While `Bun.file('bořek.txt').exists()` works fine, `Bun.file('bořek.txt').stat()` fails with `ENOENT` error when file contains diacritics.

```bash
bun run index.ts
```

```txt
alice.txt exists true
alice.txt stat 5

bořek.txt exists true
ENOENT: no such file or directory, stat 'boÅek.txt'
    path: "boÅek.txt",
 syscall: "stat",
   errno: -2,
    code: "ENOENT"


Bun v1.2.1 (macOS arm64)
```
