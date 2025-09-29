import React, { useState } from "react";
import ReactDOM from "react-dom/client";

/**
 * Component con: chỉ nhận prop `value` và hiển thị nó.
 */
function CounterDisplay({ value }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <h1>Giá trị hiện tại: {value}</h1>
    </div>
  );
}

/**
 * Component cha: giữ state `count`, 2 nút để tăng/giảm,
 * và truyền `count` xuống CounterDisplay qua props.
 */
function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      <p><strong>Bài 1: Ứng dụng Đếm số</strong></p>

      {/* truyền count vào component con */}
      <CounterDisplay value={count} />

      <div>
        <button onClick={decrement} style={{ marginRight: 8 }}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Bài 1 - Demo React (CDN + Babel)</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
      body { font-family: Arial, sans-serif; padding: 24px; }
    </style>
  </head>
  <body>
    <h2>Bài 1: Ứng dụng Đếm số (Demo nhanh)</h2>
    <div id="root"></div>

    <script type="text/babel">
      const { useState } = React;

      function CounterDisplay({ value }) {
        return (
          <div style={{ margin: "20px 0" }}>
            <h1>Giá trị hiện tại: {value}</h1>
          </div>
        );
      }

      function App() {
        const [count, setCount] = useState(0);

        const increment = () => setCount(prev => prev + 1);
        const decrement = () => setCount(prev => prev - 1);

        return (
          <div>
            <p><strong>Bài 1: Ứng dụng Đếm số</strong></p>
            <CounterDisplay value={count} />
            <div>
              <button onClick={decrement} style={{ marginRight: 8 }}>-</button>
              <button onClick={increment}>+</button>
            </div>
          </div>
        );
      }

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<App />);
    </script>
  </body>
</html>