// Import necessary modules and components
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { IconButton } from "@mui/material";
import { Person, Search, Menu, ShoppingCart } from "@mui/icons-material";
import Link from "next/link";
import Logo from "./Logo";
// Import styles
import "../styles/Navbar.scss";
import variables from "../styles/variables.module.scss";

// Navbar component
const Navbar = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [query, setQuery] = useState("");
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  const searchWork = () => {
    const searchPath = query === "" ? "/search/all" : `/search/${query}`;
    router.push(searchPath);
  };

  return (
    <div className="navbar">
      <Link href="/">
        <Logo/>
      </Link>

      <div className="navbar_search">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            searchWork();
          }}
        >
          <input
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <IconButton>
            <Search
              sx={{ color: variables.pinkred }}
              onClick={() => searchWork()}
            />
          </IconButton>
        </form>
      </div>

      <div className="navbar_right">
        {user && (
          <Link href="/cart">
            <a className="cart">
              <ShoppingCart sx={{ color: variables.darkgrey }} />
              Cart <span>({user?.cart.length})</span>
            </a>
          </Link>
        )}

        <button
          className="navbar_right_account"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        >
          <Menu sx={{ color: variables.darkgrey }} />
          {!user ? (
            <Person sx={{ color: variables.darkgrey }} />
          ) : (
            <img
              src={user.profileImagePath}
              alt="Profile"
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          )}
        </button>

        {dropdownMenu && (
          <div className="navbar_right_accountmenu">
            {user ? (
              <>
                <Link href="/wishlist">Wishlist</Link>
                <Link href="/cart">Cart</Link>
                <Link href="/order">Order</Link>
                <Link href={`/shop?id=${user._id}`}>Your Shop</Link>
                <Link href="/create-work">Publish Your Work</Link>
                <a onClick={handleLogout}>Log Out</a>
              </>
            ) : (
              <>
                <Link href="/login">Log In</Link>
                <Link href="/register">Sign Up</Link>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
