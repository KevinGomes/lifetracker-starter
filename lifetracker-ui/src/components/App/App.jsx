import * as React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "components/NavBar/NavBar";
import LoginPage from "components/LoginPage/LoginPage";
import RegistrationPage from "components/RegistrationPage/RegistrationPage";
import ActivityPage from "components/ActivityPage/ActivityPage";
import NutritionPage from "components/NutritionPage/NutritionPage";
import NotFound from "components/NotFound/NotFound";
import LandingPage from "components/LandingPage/LandingPage";
import { AuthContextProvider, useAuthContext } from "../../contexts/auth";
import { ActivityContextProvider } from "../../contexts/activity";
import { NutritionContextProvider } from "../../contexts/nutrition"
import { ExerciseContextProvider } from "../../contexts/exercises";
import NutritionNew from "components/NutritionNew/NutritionNew";
import ExerciseForm from "components/ExerciseForm/ExerciseForm";
<<<<<<< HEAD
=======
import SleepForm from "components/SleepForm/SleepForm";
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d
import ExerciseOverview from "components/ExerciseOverview/ExerciseOverview";
import SleepOverview from "components/SleepOverview/SleepOverview";

export default function AppContainer(){
  return (
    <AuthContextProvider>
      <ActivityContextProvider>
        <NutritionContextProvider>
          <ExerciseContextProvider>
            <App />
          </ExerciseContextProvider>
        </NutritionContextProvider>
      </ActivityContextProvider>
    </AuthContextProvider>
  )
}

function App() {
  const {user, setUser} = useAuthContext()
  
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<LandingPage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/register" element={<RegistrationPage />}></Route>
                <Route path="/activity" element={<ActivityPage />}></Route>
                <Route path="/nutrition" element={<NutritionPage />}></Route>
                <Route path="/nutrition/create" element={<NutritionNew />}></Route>
                <Route path="/exercise" element={<ExerciseOverview />}></Route>
                <Route path="/exercise/create" element={<ExerciseForm />}></Route>
                <Route path="/sleep" element={<SleepOverview />}></Route>
                <Route path="/sleep/create" element={<SleepForm />}></Route>
                <Route path="*" element={<NotFound />}></Route>
                </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}
