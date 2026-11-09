Natasha Litherland portfolio

index.html is the whole website in one file. All images are inside it, so you can upload just this file (for example to GitHub Pages as index.html) and it will work.

The CV link opens the PDF on Google Drive (set in CONFIG.cvUrl).

source/ holds the pieces the page is built from, if you want to edit them. To rebuild index.html, join them in this order:
part1.html photos.js photos2.js photos3.js photos4.js photos5.js photos6.js work_data.js part2.html
(on Mac or Linux: cat part1.html photos.js photos2.js photos3.js photos4.js photos5.js photos6.js work_data.js part2.html > ../index.html)
