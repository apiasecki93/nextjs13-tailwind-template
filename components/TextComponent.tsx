"use client"

import React from 'react'

import { Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"
const monsterrat = Montserrat({ weight: '600', subsets: ['latin'] })


const TextComponent = () => {
  return (
    <div className={cn("text-red-500", monsterrat.className)}>textComponent</div>
  )
}

export default TextComponent