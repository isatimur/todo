import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Header from "./Header";
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