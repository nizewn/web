import { A } from "solid-start";
import { createSignal, onMount } from "solid-js";
import IconEmail from "./icons/IconEmail";
import IconSun from "./icons/IconSun";
import IconMoon from "./icons/IconMoon";

export default function Header() {
    const [dark, setDark] = createSignal(true);

    function toggleTheme() {
        if (
            document.documentElement.classList.contains("dark") ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
            setDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
            setDark(true);
        }
    }

    onMount(() => {
        if (document.documentElement.classList.contains("dark")) {
            setDark(true);
        } else {
            setDark(false);
        }
    });

    return (
        <header class="mx-3 h-[calc(25vh-1.5rem)] md:mx-16 md:h-[calc(25vh-2rem)] lg:mx-36 xl:mx-52 2xl:mx-72">
            <nav class="flex h-full w-full items-center justify-evenly font-roboto text-sm">
                <A
                    class="__highlight flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-lg border-2 border-transparent p-2 transition-all hover:border-gruvbox-bg1 dark:hover:border-gruvboxDark-bg1"
                    activeClass=" pointer-events-none shadow-md hmd:border-gruvbox-bg dark:hmd:border-gruvboxDark-bg"
                    href="/"
                    end={true}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="__highlight hidden h-6 w-6 hmd:flex"
                    >
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>

                    <span>Home</span>
                </A>
                <A
                    class="__highlight flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-lg border-2 border-transparent p-2 transition-all hover:border-gruvbox-bg1 dark:hover:border-gruvboxDark-bg1"
                    activeClass=" pointer-events-none shadow-md hmd:border-gruvbox-bg dark:hmd:border-gruvboxDark-bg"
                    href="/projects"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="__highlight hidden h-6 w-6 hmd:flex"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z"
                            clip-rule="evenodd"
                        />
                    </svg>

                    <span>Projects</span>
                </A>
                <A
                    class="__highlight flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-lg border-2 border-transparent p-2 transition-all hover:border-gruvbox-bg1 dark:hover:border-gruvboxDark-bg1"
                    activeClass=" pointer-events-none shadow-md hmd:border-gruvbox-bg dark:hmd:border-gruvboxDark-bg"
                    href="/contact"
                >
                    <IconEmail class="__highlight hidden h-6 w-6 hmd:flex" />

                    <span>Contact</span>
                </A>
                <button
                    title="Toggle theme"
                    class={
                        "__highlight p-4 transition-all duration-300" +
                        (typeof localStorage !== "undefined"
                            ? (dark() || !dark()) /* to force rerender */ && "theme" in localStorage
                                ? " animate-pulse"
                                : " animate-bounce"
                            : "")
                    }
                    onClick={toggleTheme}
                >
                    {dark() ? (
                        <IconSun class="__highlight h-5 w-5" />
                    ) : (
                        <IconMoon class="__highlight h-5 w-5" />
                    )}
                </button>
            </nav>
        </header>
    );
}
