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

## Handle Exception

```jsx
<ErrorBoundary>
  <ImgSuspense src="./path/picuture.jpg" fallback={<p>Pending...</p>} />
</ErrorBoundary>
```

If the **img** fails to load (for example, due to network failure), it will trigger an error.

You can handle these errors to show a nice user experience and manage recovery with Error Boundaries.

That's a same way you handle React.suspense exception.

- https://reactjs.org/docs/code-splitting.html#error-boundaries
- https://reactjs.org/docs/error-boundaries.html

Or...
```jsx
<ImgSuspense
  onError={e => console.log('Error occurs! Override ImgSuspense exception')}
  src="./path/picuture.jpg"
  fallback={<p>Pending...</p>}
/>
```
You can just **override onError handler** to prevent component exception, treat it like an img element!
