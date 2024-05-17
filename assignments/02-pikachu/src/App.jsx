import React, { Suspense } from "react";
import "./App.css";
import "./styles/main.css";
import Layout from "./templates/Layout";
const Home = React.lazy(() => import("./components/todo/PlayGround"));
function Loading() {
  return <div>Loading...</div>;
}
function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    </Layout>
  );
}

export default App;
