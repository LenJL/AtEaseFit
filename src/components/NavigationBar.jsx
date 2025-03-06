'use client'
import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const navigation = [
  { name: 'Home', href: '/AtEaseFit/' },
  { name: 'Workout', href: '/WorkoutSpiltNav' },
  { name: 'Tracker', href: '/Tracker' },
];

const NavLink = ({ name, href, className }) => (
  <Link to={href} className={`text-sm font-semibold ${className}`}>
    {name}
  </Link>
);

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="relative flex items-center justify-between p-4 lg:px-8">
        
        {/* Logo */}
        <NavLink name="AtEaseFit" href="/AtEaseFit/" className="-m-1.5 p-1.5 text-white text-xl font-bold" />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden -m-2.5 p-2.5 text-white"
        >
          <Bars3Icon className="size-6" />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink key={item.name} {...item} className="text-white hover:text-gray-300" />
          ))}
        </div>

        {/* Log in Button */}
        <NavLink name="Log in →" href="/signin" className="hidden lg:flex text-white" />

      </nav>

      {/* Mobile Navigation */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 p-2.5 text-gray-700"
          >
            <XMarkIcon className="size-6" />
          </button>
          <div className="mt-6">
            {navigation.map((item) => (
              <NavLink key={item.name} {...item} className="block py-2 text-gray-900 hover:bg-gray-50" />
            ))}
            <NavLink name="Log in" href="/signin" className="block py-2.5 text-gray-900 hover:bg-gray-50" />
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
