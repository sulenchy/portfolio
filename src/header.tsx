import React from 'react';


const listItems: string[] = ['About', 'Work', 'Contact'];
export default function header() {
    return (
        <header id="main-header" className="fixed bg-blue-400 shadow-lg  z-50 w-full">
            <nav id="navbar" className="px-5 py-2 flex justify-between items-center">
                <a className="text-2xl text-white">My App</a>
                <ul className="flex">
                    {
                        listItems.map((item, index) => {
                            return (<li key={ `${ item }-${ index }`}>
                                <a className="text-white hover:bg-gray-700 px-3 rounded py-1" href="#welcome-section">{ item }</a>
                            </li>)
                        })
                    }
                </ul>
          </nav>
      </header>
    );
}