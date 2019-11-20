# Icons - @musora/icons
A custom svg icon font/library

## Usage

#### Loading From a CDN

```html
<head>
    <link 
        rel="stylesheet" 
        href="https://d1prhhmg8i11jr.cloudfront.net/v1.0.0/dist/icons.css"
    >
</head>
<body>
    <i class="icon-courses"></i>
</body>
```

<hr>

#### Loading from NPM

`npm install @musora/icons`
or
`yarn install @musora/icons`

```javascript
import '@musora/icons/dist/icons.css';
```

<hr>

#### Using the SVGs in React Native

1. Install the [react-native-svg](https://github.com/react-native-community/react-native-svg) package
2. Install the [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer) package
3. In your `metro.config.js` file, add the following transformer:
```javascript
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
```

You can now import the SVG file directly and use it as a component:
```jsx harmony
import CourseIcon from '@musora/icons/assets/svg/courses.svg';

<CourseIcon width={100} height={100} />
```

## Adding New Icons

- Make sure your svg is a 100x100 square and place it in the assets/svg directory
- Run the above command

Install the dependencies

`yarn install`

Generate the Font

`yarn font:generate`

## Deployment to S3

1. `npm version patch` - This command will do a few things:
    - Bump the version number up by 1: `1.0.0 -> 1.0.1`
    - Create a commit and tag under that version number
2. Push the commit **and the tag**

_Note that Travis **will only deploy to S3 when you push the tag**._
- The directory it deploys to will match the version number in the tag
