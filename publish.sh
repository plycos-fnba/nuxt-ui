pnpm i
pnpm run build --preset=github_pages
echo $'\n' publishing to github pages...
npx gh-pages -d .output/public