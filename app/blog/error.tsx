'use client';

export default function ErrorWrapper ({error}: {error:Error}){
    <h1>Oops!!! {error.message}</h1>
}