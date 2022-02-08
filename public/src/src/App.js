import { PostListPage } from './Components/posts/postListPage/PostListPage';
import { UserListPage } from './Components/users/userListPage/UserListPage';
import { UserDetailsPage } from './Components/users/userDetailsPage/UserDetailsPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './Components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
    <header>
      <nav>
       <Navbar/>
      </nav>
     </header>
        <Routes>
          <Route path = "/" element = {<PostListPage/>}/>
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/users" element={<UserListPage />} />
          <Route path="/users/:userId" element={<UserDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;