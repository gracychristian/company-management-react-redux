import { Box } from "@material-ui/core";
import { Provider } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Companies from "./components/companies";
import CompanyDetails from "./components/companyDetails";
import Toggle from "./components/toggle";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Box className="p-10 App bg-white dark:bg-black">
        <Toggle />
        <Routes>
          <Route path="/home" element={<Companies />}></Route>
          <Route path="/company/:id" element={<CompanyDetails />}></Route>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Box>
    </Provider>
  );
}

export default App;
