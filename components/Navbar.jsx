"use client";
import "@styles/Navbar.scss";
import { Menu, Person, Search, ShoppingCart } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "./Logo";

const Navbar = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [dropdownMenu, setDropdownMenu] = useState(false);

  const handleLogout = async () => {
    signOut({ callbackUrl: "/" });
  };

  const [query, setQuery] = useState("");

  const router = useRouter();

  const searchWork = async (e) => {
    e.preventDefault();
    router.push(`/search/${query}`);
  };

  const cart = user?.cart;

  return (
    <div className="navbar">
      <Link href="/">
        <div>
          <Logo />
        </div>
      </Link>

      <div className="navbar_search">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <IconButton disabled={query === ""} onClick={searchWork}>
          <Search sx={{ color: "red" }} />
        </IconButton>
      </div>

      <div className="navbar_right">
        {user && (
          <Link href="/cart">
            <div className="cart">
              <ShoppingCart sx={{ color: "gray" }} />
              Cart <span>({cart?.length})</span>
            </div>
          </Link>
        )}

        <div className="navbar_right_account">
          <IconButton onClick={() => setDropdownMenu(!dropdownMenu)}>
            {user ? (
              <img
                src={user.profileImagePath}
                alt="profile"
                style={{ objectFit: "cover", borderRadius: "50%" }}
              />
            ) : (
              <Person sx={{ color: "gray" }} />
            )}
          </IconButton>
        </div>

        {dropdownMenu && (
          <div className="navbar_right_accountmenu">
            {!user ? (
              <>
                <Link href="/login">Log In</Link>
                <Link href="/register">Sign Up</Link>
              </>
            ) : (
              <>
                <Link href="/wishlist">Wishlist</Link>
                <Link href="/cart">Cart</Link>
                <Link href="/order">Orders</Link>
                <Link href={`/shop?id=${user._id}`}>Your Shop</Link>
                <Link href="/create-work">Sell Your Work</Link>
                <a onClick={handleLogout}>Log Out</a>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
