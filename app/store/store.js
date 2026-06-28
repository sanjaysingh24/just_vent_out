"use client"
import { configureStore } from "@reduxjs/toolkit";
import globalSlicer from './slicers/global-slice'


export const store = configureStore({
    reducer:{
        global:globalSlicer
    }
})