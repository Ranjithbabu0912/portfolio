"use client";
import { assets, workData } from "@/assets/assets";
import Project from "./components/Project";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Projects() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "";
        }
    }, [isDarkMode]);

    const [modal, setModal] = useState({ active: false, index: 0 });

    return (
        <div>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/> <br /><br />
            <div className="flex items-center justify-around sm:p-10 p-5 scroll-m-0">
                <h1 className="text-3xl sm:text-6xl">My Projects</h1>
                <a target="_blank" href="https://github.com/Ranjithbabu0912" className="flex items-center gap-2 text-sm sm:text-xl">
                    <Image src={isDarkMode ? assets.github_white : assets.github} alt="" className="w-4 sm:w-8" />
                    Ranjithbabu0912
                </a>
            </div>
            <div>
                {workData.map((project, index) => {
                    return (
                        <Project
                            key={index}
                            index={index}
                            title={project.title}
                            desc={project.description}
                            setModal={setModal}
                        />
                    );
                })}
                <Modal modal={modal} projects={workData}/>
            </div>
        </div>
    );
}
