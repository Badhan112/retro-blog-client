import React from 'react';

const CardLoadingAnimation = () => {
    return (
        <div class="border border-blue-300 shadow rounded-md overflow-hidden max-w-sm w-full mx-auto">
            <div class="animate-pulse space-x-4">
                <div class="bg-blue-400 h-52 w-full"></div>
                <div class="flex-1 space-y-4 p-4">
                    <div class="h-4 bg-blue-400 rounded w-3/4"></div>
                    <div class="space-y-2">
                        <div class="h-4 bg-blue-400 rounded"></div>
                        <div class="h-4 bg-blue-400 rounded w-5/6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardLoadingAnimation;