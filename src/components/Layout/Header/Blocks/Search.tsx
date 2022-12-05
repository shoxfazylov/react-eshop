import React, {useState} from "react"
// import {useRoutes} from "react-router-dom"

export function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    // const router = useRoutes();

    const handleSearch = () => {
        console.log("click");
        // router.push({
        //     pathname: "/products",
        //     query: {
        //         search: searchTerm,
        //     },
        // });
        setSearchTerm("");
    };

    const handleInput = (event: React.KeyboardEvent<HTMLElement>) => {
        event.preventDefault()
        if (event.key === "Enter") {
            event.preventDefault();
            handleSearch();
        }
    };
    return (
        <>
            <div className="search-style-2">
                <form>
                    <select className="select-active">
                        <option>All Categories</option>
                        <option>Women's</option>
                        <option>Men's</option>
                        <option>Cellphones</option>
                        <option>Computer</option>
                        <option>Electronics</option>
                        <option> Accessories</option>
                        <option>Home & Garden</option>
                        <option>Luggage</option>
                        <option>Shoes</option>
                        <option>Mother & Kids</option>
                    </select>
                    <input
                        value={searchTerm}
                        onKeyDown={handleInput}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="text"
                        placeholder="Search"
                    />
                </form>
            </div>
        </>
    );
}
