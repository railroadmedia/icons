# Icons - @musora/icons
A custom svg icon font/library

## Usage

Install the dependencies

`yarn install`

Generate the Font

`yarn font:generate`

## Adding New Icons

- Make sure your svg is a 100x100 square and place it in the assets/svg directory
- Run the above command

## Deployment to S3

1. `npm version patch` - This command will do a few things:
    - Bump the version number up by 1: `1.0.0 -> 1.0.1`
    - Create a commit and tag under that version number
2. Push the commit **and the tag**

_Note that Travis **will only deploy to S3 when you push the tag**._
- The directory it deploys to will match the version number in the tag
