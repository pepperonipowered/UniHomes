import { Button } from '@/components/ui/button';
import spiels from '@/lib/constants/spiels';
import { SearchIcon } from 'lucide-react';
import React from 'react';

export default function HeroSection() {
    return (
            <div className="flex items-center justify-center h-screen w-1/2">
                <div className="fixed w-full px-4 py-8">
                    <div className="flex flex-col items-center">
                        <p className='my-6 text-pretty text-1xl'>Explore Saved Listings</p>
                        <h1 className="text-pretty text-4xl font-bold lg:text-6xl">
                            UniHomes
                        </h1>
                        <h1 className="text-pretty text-4xl font-bold lg:text-6xl">
                            Favorite 
                        </h1>
                        <h1 className="text-pretty text-4xl font-bold lg:text-6xl">
                            Listings
                        </h1>
                        <form className="flex mt-5 w-full max-w-md justify-center">
                            <label htmlFor="search" className="sr-only">{spiels.BUTTON_SEARCH}</label>
                            <div className="relative flex w-full">
                                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <input
                                    type="search"
                                    name="search"
                                    id="search"
                                    className="block w-full rounded-md border-0 bg-input px-10 py-2 text-input placeholder:text-muted-foreground focus:ring-2 focus:ring-accent"
                                    placeholder="Search"
                                />
                            </div>
                        </form>
                        <div className='flex flexs-row gap-2 mt-3'>
                            <Button className='bg-transparent hover:bg-transparent text-black border border-black'>{spiels.BUTTON_SHOW_LISTINGS}</Button>
                            <Button className=''>{spiels.BUTTON_BACK_HOME}</Button>
                        </div>
                    </div>
                </div>
            </div>
      );

}
