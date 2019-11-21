# Star Wars Top Trumps

Builded with create-react-app and axios 

## Tools

1. axios
2. bootstrap
3. node-sass
4. prop-types
5. react
6. enzyme
7. jest

## Comments

I've tried to do it really simple, so that's why redux store is not used.

Used localStorage to keep data persistent, so only two request will be made when the app is loaded, one for the characters and one for the starships.

After each game the array will be shuffled and then the first and second element will be taken for the array and assign for player 1 and player 2, this will ensure that player 1 will not be the same as player 2. 

## Available Scripts

In the project directory, you can run:

### `yarn start`

### `yarn test`

### `yarn build`

### `yarn eject`