import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../src/App";
import HomePage from "../src/pages/homePage";

function Index () {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route path="/" element={<HomePage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Index;