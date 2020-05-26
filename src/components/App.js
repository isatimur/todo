import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Header from "./Header";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const App = () => (
    <div>
        <Header/>
        <Container>
            <AddTodo/>
            <VisibleTodoList/>
        </Container>

        <Footer/>
    </div>
)

export default App