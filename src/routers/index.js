import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
//Category
import Category from '../pages/views/Admin/Category'
import AddCategory from '../pages/views/Admin/Category/add'
import EditCategory from '../pages/views/Admin/Category/edit'
//Products
import Products from '../pages/views/Admin/Products'
import AddProducts from '../pages/views/Admin/Products/add'
import EditProducts from '../pages/views/Admin/Products/edit'
import DetailProducts from '../pages/views/Admin/Products/detail'
//User
import User from '../pages/views/Admin/User'
import AddUser from '../pages/views/Admin/User/add'
//CategoryPost
import CategoryPost from '../pages/views/Admin/CategoryPost'
import AddCategoryPost from '../pages/views/Admin/CategoryPost/add'
import EditCategoryPost from '../pages/views/Admin/CategoryPost/edit'
//Post
import Post from '../pages/views/Admin/Post'
import AddPost from '../pages/views/Admin/Post/add'
import EditPost from '../pages/views/Admin/Post/edit'
//checkOut
import CheckOut from '../pages/views/Admin/CheckOut'


//Main
import Blog from '../pages/views/Main/Blog'
import DetailPost from '../pages/views/Main/Blog/detailpost'
import Home from '../pages/views/Main/Home'
import Shop from '../pages/views/Main/Shop'
import Contact from '../pages/views/Main/Contact'
import Detail from '../pages/views/Main/Detail'
import Cart from '../pages/views/Main/Cart'
import Search from '../pages/views/Main/Search'
import Login from '../pages/views/Main/Login'
import Registration from '../pages/views/Main/Login/dangki'
import ContactAdmin from '../pages/views/Admin/Contact';





const Routers = ({ products, onRemove }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?" exact>
                    <LayoutAdmin>

                        <Route path='/admin/' exact>
                            <Dashboard />
                        </Route>
                        {/* Category */}
                        <Route path='/admin/category' exact>
                            <Category />
                        </Route>
                        <Route path='/admin/category/add' exact>
                            <AddCategory />
                        </Route>
                        <Route path='/admin/category/edit/:id' exact>
                            <EditCategory />
                        </Route>

                        {/* Product */}
                        <Route path='/admin/product' exact>
                            <Products />
                        </Route>
                        <Route path='/admin/product/add'>

                            < AddProducts />
                        </Route>
                        <Route path='/admin/product/edit/:id' exact>
                            < EditProducts />
                        </Route>
                        <Route path='/admin/product/detail' exact>
                            < DetailProducts />
                        </Route>

                        {/* User */}
                        <Route path='/admin/user' exact>
                            <User />
                        </Route>
                        <Route path='/admin/user/add' exact>
                            <AddUser />
                        </Route>
                        {/* category_post */}
                        <Route path='/admin/categoryPost' exact>
                            <CategoryPost />
                        </Route>
                        <Route path='/admin/categoryPost/add' exact>
                            <AddCategoryPost />
                        </Route>
                        <Route path='/admin/categoryPost/edit/:id' exact>
                            <EditCategoryPost />
                        </Route>

                        {/* Post */}
                        <Route path='/admin/post' exact>
                            <Post />
                        </Route>
                        <Route path='/admin/post/add' exact>
                            <AddPost />
                        </Route>
                        <Route path='/admin/post/edit/:id' exact>
                            <EditPost />
                        </Route>

                        {/* contact */}
                        <Route path='/admin/contact' exact>
                            <ContactAdmin />
                        </Route>

                        {/* checkOut */}
                        <Route path='/admin/checkOut' exact>
                            <CheckOut />
                        </Route>
                    </LayoutAdmin>

                </Route>

                <Route path="/:path?/:path?/" exact>
                    <LayoutMain>

                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/blog" exact>
                            <Blog />
                        </Route>
                        <Route path="/detailPost/:id" exact>
                            <DetailPost />
                        </Route>
                        <Route path="/shop" exact>
                            <Shop />
                        </Route>
                        <Route path="/contact" exact>
                            <Contact />
                        </Route>
                        <Route path="/detail/:id" exact>
                            <Detail />
                        </Route>
                        <Route path="/cart" exact>
                            <Cart />
                        </Route>
                        <Route path="/search/:name" exact>
                            <Search />
                        </Route>
                        <Route path="/login" exact>
                            <Login />
                        </Route>
                        <Route path="/registration" exact>
                            <Registration />
                        </Route>
                    </LayoutMain>

                </Route>


            </Switch>
        </Router>
    )
}
Routers.propTypes = {

}

export default Routers
