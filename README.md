# @native-base/icons

## **Table of Contents**

1. About The Project
2. Built With
3. Installation
4. Usage
5. Contributing

## **About the project**

This project was designed to make integration of icons in nativebase projects easier. It is a unified library which export icons and fonts for all the native and web platforms.

## Built With

- react-native-vector-icons
- @expo/vector-icon
- typescript

## Installation

`yarn add @native-base/icons`

### Next Js:

- Add Fonts:
    - To add all the fonts, write this piece of code in `_document.js`
    - 
    
    ```jsx
    import { default as NativebaseDocument } from "@native-base/next-adapter/document";
    import fontsCSS from "native-base-icons/FontCSS"
    
    class Document extends NativebaseDocument {
      //
    }
    
    async function getInitialProps({ renderPage }) {
      const res = await NativebaseDocument.getInitialProps({ renderPage });
      const styles = [
        // eslint-disable-next-line react/jsx-key
        <style dangerouslySetInnerHTML={{ __html: fontsCSS }} />,
        ...res.styles
      ];
      return { ...res, styles: React.Children.toArray(styles) };
    }
    
    Document.getInitialProps = getInitialProps;
    
    export default Document;
    ```
    
    - To add particular fonts: (For example, if you need to add AntDesignFonts and MaterialIconsFonts, write this piece of code in `_document.js`)
    
    ```jsx
    import { default as NativebaseDocument } from "@native-base/next-adapter/document";
    import AntDesignFontFaceCSS from "native-base-icons/FontCSS/AntDesignFontFaceCSS";
    import MaterialIconsFontFaceCSS from "native-base-icons/FontCSS/MaterialIconsFontFaceCSS";
    
    const fontsCSS = AntDesignFontFaceCSS + MaterialIconsFontFaceCSS;
    
    class Document extends NativebaseDocument {
      //
    }
    
    async function getInitialProps({ renderPage }) {
      const res = await NativebaseDocument.getInitialProps({ renderPage });
      const styles = [
        // eslint-disable-next-line react/jsx-key
        <style dangerouslySetInnerHTML={{ __html: fontsCSS }} />,
        ...res.styles
      ];
      return { ...res, styles: React.Children.toArray(styles) };
    }
    
    Document.getInitialProps = getInitialProps;
    
    export default Document;
    ```
    

### Create React App:

- Add Fonts:
    - To add all the fonts, write this piece of code in `index.jsx`:
    
    ```jsx
    import fontCSS from "native-base-icons/FontCSS";
    
    const style = document.createElement("style");
    style.type = "text/css";
    if (style.styleSheet) {
      style.styleSheet.cssText += fontCSS;
    } else {
      style.appendChild(document.createTextNode(fontCSS));
    }
    document.head.appendChild(style); 
    ```
    
    - To add a particular font
    
    ```jsx
    import AntDesignFontFaceCSS from "native-base-icons/FontCSS/AntDesignFontFaceCSS";
    import MaterialIconsFontFaceCSS from "native-base-icons/FontCSS/MaterialIconsFontFaceCSS";
    
    const fontsCSS = AntDesignFontFaceCSS + MaterialIconsFontFaceCSS;
    
    const style = document.createElement("style");
    style.type = "text/css";
    if (style.styleSheet) {
      style.styleSheet.cssText += fontCSS;
    } else {
      style.appendChild(document.createTextNode(fontCSS));
    }
    document.head.appendChild(style); 
    ```
    

### Expo:

- Add this configuration to `.babel.config.js` file in root directory:

```jsx
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "native-base-icons": "native-base-icons/lib",
          },
        },
      ],
    ],
  };
};
```

## Usage:

Now, let’s render an icon:

```jsx
import { Entypo } from "native-base-icons";

return <Icon as={Entypo} name="user"></Icon>;
```

## Contributing:

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
6. 
