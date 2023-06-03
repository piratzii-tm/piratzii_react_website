import Home from "./components/Screens/Home"
import Team from "./components/Screens/Team"
import Join from "./components/Screens/Join"
import Contest from "./components/Screens/Contests"

import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Projects from "./components/Screens/Projects";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="team" element={<Team />} />
                <Route path="join" element={<Join />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contest" element={<Contest />} />
            </Routes>
        </div>
    );
}