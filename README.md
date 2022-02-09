# native-base-icons

`yarn add @native-base/icons` 

# Next Js:

- Add Fonts:
    - To add all the fonts, write this piece of code in `_document.js`
    
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
    

- Now that you are done with adding fonts, let’s render an icon:

```jsx
import { Entypo } from "native-base-icons";

return <Icon as={Entypo} name="arrow-right"></Icon>;
```

# Create React App:

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
    

# Expo:

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
            "native-base-icons": "native-base-icons/index",
          },
        },
      ],
    ],
  };
};
```