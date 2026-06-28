"use client"
import { createSlice } from "@reduxjs/toolkit";

  const posts = [
    {
      id: "p1",
      title: "The Quiet Weight of Unsaid Things",
      tag: "Emotions",
      excerpt: "Sometimes words stay trapped inside — this is a space to finally let them breathe.",
      color: "#A0453A",
    },
    {
      id: "p2",
      title: "When Anxiety Feels Like Home",
      tag: "Mental Health",
      excerpt: "Learning to notice when worry becomes familiar, and what to do with that knowing.",
      color: "#6B7C5C",
    },
    {
      id: "p3",
      title: "Colours That Hold Memory",
      tag: "Reflection",
      excerpt: "A cream wall, a terracotta bowl — how our surroundings carry our emotional history.",
      color: "#C49A6C",
    },
    {
      id: "p4",
      title: "Writing as Release",
      tag: "Journaling",
      excerpt: "You don't need to be a writer. You just need to start the sentence.",
      color: "#A0453A",
    },
    {
      id: "p5",
      title: "Sitting With the Hard Feelings",
      tag: "Healing",
      excerpt: "Resistance makes pain louder. What happens when we stop fighting what we feel?",
      color: "#6B7C5C",
    },
    {
      id: "p6",
      title: "Letters to Younger Me",
      tag: "Growth",
      excerpt: "If you could reach back across time, what would you want yourself to know?",
      color: "#C49A6C",
    },
  ];

  const guidelines = [
    { num: "01", rule: "Write without judgement — this is your space, not a stage." },
    { num: "02", rule: "You don't need perfect words. Raw ones are welcome here." },
    { num: "03", rule: "Read others with care. Every vent carries real weight." },
    { num: "04", rule: "Support gently. You don't have to fix — sometimes just witnessing is enough." },
  ];


const initialState = {
   posts,
   guidelines
}

const globalstore  = createSlice({
    name:"global",
    initialState,
    reducers:{

    }
})

export default globalstore.reducer