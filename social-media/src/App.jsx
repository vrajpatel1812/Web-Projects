import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import SideBar from "./Component/SideBar";
import { Outlet } from "react-router-dom";
import PostProvider from "./Store/PostList-Content-Store";

function App() {
  return (
    <PostProvider>
      <div className="Container">
        <div className="leftBox">
          <SideBar></SideBar>
        </div>
        <div className="rightBox">
          <Header />
          <Outlet />
          {/* {currentPage === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>} */}
          <Footer />
        </div>
      </div>
    </PostProvider>
  );
}

export default App;
