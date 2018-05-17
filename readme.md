# React Skeleton

environment
```bash
# node -v 6.11.5
# yarn -v 1.6.0

cd path/to/react-skeleton
yarn --prefer-offline

# production build
# option 1
yarn run build
open dist/index.html

# option 2
yarn webpack # --mode production


# development server
# including --open flag opens browser http://localhost:$PORT
# option 1
yarn webpack-dev-server --mode development # --open

# option 2
yarn run start # --open

```