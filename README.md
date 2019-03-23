# img-suspense

[Demo](https://codesandbox.io/s/k3jx7l96po)

A React img component like **React.Suspense**!

Actually, its all props are same as `<img/>` like `src` `alt`...

**You should pass a react element to `fallback` prop.**

When image are still pending, it'll show fallback element.


## Intallation

```sh
$ yarn add img-suspense
```

## Usage

```jsx
import ImgSuspense from 'img-suspense';

<ImgSuspense
  src="./cutecat.jpg"
  alt="cat"
  style={{width:200px}}
  fallback={<p>Pending...</p>}
  />

```
