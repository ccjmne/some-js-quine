let s='^',w=s=>process.stdout.write(s);for(let c of s)w(c.charCodeAt(0)==94?s.replace(/\\/g,`\\\\`).replace(/'/g,`\\'`):c)
