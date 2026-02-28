'use client';
import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
        <Next13ProgressBar height="4px" color="#0044e6" options={{ showSpinner: true }} showOnShallow />
            {children}
        </>
    )
}
