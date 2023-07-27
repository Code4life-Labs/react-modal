# tunangn-react-modal
Use to show message by using Dialog, snackbar or to show side in React. You can use this package easily to manage your dialog, snackbar or side. Ensure for privacy!! Dialog, side and snackbar only show (in screen or in DON Tree) if them are opened.

## Install
You can install it by:
```js
npm install tunangn-react-modal
```

## How to use?# tunangn-react-modal
Use to show message by using Dialog, snackbar or to show side in React. You can use this package easily to manage your dialog, snackbar or side. Ensure for privacy!! Dialog, side and snackbar only show (in screen or in DOM Tree) if they are opened.

See more examples in [live demo](https://stackblitz.com/edit/stackblitz-starters-azcqhw?file=src%2Findex.tsx).

## Note
- This will not cause unexpected re-renders to other components when you open modal item(s). (Only the modal react component re-render)
- This package contains default items that you just use them to solve many cases.
- I use typescript in all examples.

## Install
You can install it by:
```js
npm install tunangn-react-modal
```
Import to `App.jsx` or `App.tsx` and open default `dialog`:
```jsx
import { TunangnModal, dialog } "tunangn-react-modal";

export default function App() {
  return (
    <div>
      <button onClick={() => dialog({ title: "My first dialog" })}>Open my dialog</button>
      <TunangnModal />
    </div>
  )
}
```

## How to use?
I will show you how to use TunangnModal in this article.

An default modal item always has 4 components:
- __Header__ has `title` and `x` button (optional).
- __Body__ has `content`.
- __Footer__: depend on type of Modal Item, the __Footer__ will has difference children. Firstly, I want to talk about `title` and `content`.
- __Container__: wrap all components above.

### Table of Contents
- [TunangnModal](#tunangnmodal)
- [What is Modal Item Data?](#modal-item-data)
- [What is Modal Item Properties?](#modal-item-data)
- Example for [dialog](#dialog)
- Example for [side](#side)
- Example for [snackbar](#snackbar)
- Customize you own Modal Item [here](#customize)

### TunangnModal
This is the Modal React Component that you __have to__ place it in `App` Component. There are 3 default modal items, you can use all of them immediately with
`dialog`, `side` and `snackbar` from `tunangn-react-modal`.

TunangnModal has 2 properties:
- className: (don't recommend) replace the default class name. If you replace the default class name, make sure you have suitable style because the default
inline style will be unapply.
- items: if you want to custom you own modal items, you can use this properties.

`items` is an object contains options to assign modal item to list.

| Name | Type | Description |
| :------------ | :------------ | :------------ |
| type  | `MITypes`  | Use to modify the title of modal item. |
| placeOn (__Only for Side__)  | `SidePlaces \| undefined` | Where is side placed? |
| position (__Only for Snackbar__) | `SnackbarPositions \| undefined` | What is position of snackbar? |
| duration (__Only for Snackbar__) | `number \| null \| undefined` | How long does snackbar last? If you want to disable the auto-close behaviour, you can assign `null` to this option. |
| clearDefaultInlineStyle | `boolean \| undefined` | Clear default inline stlyes. You can use the default class name to style the UI component for Modal Item. __Note__: this option will not work if you use `element` as Function Component or using this option if you want to write css to the default class name. |
| className | `string \| undefined` | Class name of item's container. This will be based class name for other ui element components. You don't need `clearDefaultInlineStyle` to clear the default inline style, because the default inline style will be cleared if `className` option is assigned. __Note__: this option will not work if you use `element` as Function Component or using this option if you just want to modify UI Element with your own css |
| element | `((props: CustomizedModalItemProps) => JSX.Element) \| undefined` | Use this option if you want to create you own modal item. |

### Modal Item Data
<a name="modal-item-data"></a>
__Note__: You cannot use these properties in your own modal item.

When you open an dialog with `dialog` function, an side with `side` function or an snackbar with `snackbar` function. You can pass an object
to this function, an this object is `data` of Modal Item, the data that you want to modify the content of modal item. Each modal item always
has `title` and `content`, so you can pass an object with `title`, `content` properties to modify the default modal item.

```js
{
  title?: string | JSX.Element,
  content?: string | JSX.Element
}
```

| Name | Type | Description |
| :------------ | :------------ | :------------ |
| title  | `string \| JSX.Element \| undefined`  | Use to modify the title of modal item. |
| content  | `string \| JSX.Element \| undefined` | Use to modify the content of modal item. |

### Modal Item Properties
Modal Item Data is a part of Modal Item Properties.

### Dialog
__Note__: You cannot use these properties in your own modal item.

### Side
__Note__: You cannot use these properties in your own modal item.

### Snackbar
__Note__: You cannot use these properties in your own modal item.

### Customize your own Tunangn Modal Item
<a name="customize"></a># tunangn-react-modal
Use to show message by using Dialog, snackbar or to show side in React. You can use this package easily to manage your dialog, snackbar or side. Ensure for privacy!! Dialog, side and snackbar only show (in screen or in DOM Tree) if they are opened.

See more examples in [live demo](https://stackblitz.com/edit/stackblitz-starters-azcqhw?file=src%2Findex.tsx).

## Note
- This will not cause unexpected re-renders to other components when you open modal item(s). (Only the modal react component re-render)
- This package contains default items that you just use them to solve many cases.
- I use typescript in all examples.

## Install
You can install it by:
```js
npm install tunangn-react-modal
```
Import to `App.jsx` or `App.tsx` and open default `dialog`:
```jsx
import { TunangnModal, dialog } "tunangn-react-modal";

export default function App() {
  return (
    <div>
      <button onClick={() => dialog({ title: "My first dialog" })}>Open my dialog</button>
      <TunangnModal />
    </div>
  )
}
```

## How to use?
I will show you how to use TunangnModal in this article.

An default modal item always has 4 components:
- __Header__ has `title` and `x` button (optional).
- __Body__ has `content`.
- __Footer__: depend on type of Modal Item, the __Footer__ will has difference children. Firstly, I want to talk about `title` and `content`.
- __Container__: wrap all components above.

### Table of Contents
- [TunangnModal](#tunangnmodal)
- [What is Modal Item Data?](#modal-item-data)
- [What is Modal Item Properties?](#modal-item-data)
- Example for [dialog](#dialog)
- Example for [side](#side)
- Example for [snackbar](#snackbar)
- Customize you own Modal Item [here](#customize)

### TunangnModal
This is the Modal React Component that you __have to__ place it in `App` Component. There are 3 default modal items, you can use all of them immediately with
`dialog`, `side` and `snackbar` from `tunangn-react-modal`.

TunangnModal has 2 properties:
- className: (don't recommend) replace the default class name. If you replace the default class name, make sure you have suitable style because the default
inline style will be unapply.
- items: if you want to custom you own modal items, you can use this properties.

`items` is an object contains options to assign modal item to list.

| Name | Type | Description |
| :------------ | :------------ | :------------ |
| type  | `MITypes`  | Use to modify the title of modal item. |
| placeOn (__Only for Side__)  | `SidePlaces \| undefined` | Where is side placed? |
| position (__Only for Snackbar__) | `SnackbarPositions \| undefined` | What is position of snackbar? |
| duration (__Only for Snackbar__) | `number \| null \| undefined` | How long does snackbar last? If you want to disable the auto-close behaviour, you can assign `null` to this option. |
| clearDefaultInlineStyle | `boolean \| undefined` | Clear default inline stlyes. You can use the default class name to style the UI component for Modal Item. __Note__: this option will not work if you use `element` as Function Component or using this option if you want to write css to the default class name. |
| className | `string \| undefined` | Class name of item's container. This will be based class name for other ui element components. You don't need `clearDefaultInlineStyle` to clear the default inline style, because the default inline style will be cleared if `className` option is assigned. __Note__: this option will not work if you use `element` as Function Component or using this option if you just want to modify UI Element with your own css |
| element | `((props: CustomizedModalItemProps) => JSX.Element) \| undefined` | Use this option if you want to create you own modal item. |

### Modal Item Data
<a name="modal-item-data"></a>
__Note__: You cannot use these properties in your own modal item.

When you open an dialog with `dialog` function, an side with `side` function or an snackbar with `snackbar` function. You can pass an object
to this function, an this object is `data` of Modal Item, the data that you want to modify the content of modal item. Each modal item always
has `title` and `content`, so you can pass an object with `title`, `content` properties to modify the default modal item.

```js
{
  title?: string | JSX.Element,
  content?: string | JSX.Element
}
```

| Name | Type | Description |
| :------------ | :------------ | :------------ |
| title  | `string \| JSX.Element \| undefined`  | Use to modify the title of modal item. |
| content  | `string \| JSX.Element \| undefined` | Use to modify the content of modal item. |

### Modal Item Properties
Modal Item Data is a part of Modal Item Properties.

### Dialog
__Note__: You cannot use these properties in your own modal item.

### Side
__Note__: You cannot use these properties in your own modal item.

### Snackbar
__Note__: You cannot use these properties in your own modal item.

### Customize your own Tunangn Modal Item
<a name="customize"></a>